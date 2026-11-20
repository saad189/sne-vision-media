import { Injectable } from '@angular/core';
// NOTE: Ensure you run npm install to install @supabase/supabase-js defined in package.json
import {
  createClient,
  SupabaseClient,
  Session,
  AuthChangeEvent,
} from '@supabase/supabase-js';
import { environment } from '../environments/environment';
import { BehaviorSubject, from, map, Observable } from 'rxjs';

export interface SupabaseUserProfile {
  id: string;
  email: string | null;
  // Extend with your public profile table fields if needed
}

// Global singleton (survives HMR) to avoid multiple Supabase client instances competing for auth storage locks.
interface SupabaseSingleton {
  client: SupabaseClient;
  session$: BehaviorSubject<Session | null>;
  ready$: BehaviorSubject<boolean>;
  initStarted: boolean; // prevent duplicate initSession runs
}

let __supabaseSingleton: SupabaseSingleton | undefined = (globalThis as any)
  .__supabaseSingleton;

@Injectable({ providedIn: 'root' })
export class SupabaseService {
  private _client: SupabaseClient;
  private _session$: BehaviorSubject<Session | null>;
  private _authReady$: BehaviorSubject<boolean>;

  constructor() {
    if (!__supabaseSingleton) {
      const client = createClient(
        environment.supabaseUrl,
        environment.supabaseAnonKey,
        {
          auth: {
            autoRefreshToken: true,
            persistSession: true,
            detectSessionInUrl: true,
          },
        }
      );
      __supabaseSingleton = {
        client,
        session$: new BehaviorSubject<Session | null>(null),
        ready$: new BehaviorSubject<boolean>(false),
        initStarted: false,
      };
      // Single auth state listener
      client.auth.onAuthStateChange(
        (_event: AuthChangeEvent, session: Session | null) => {
          __supabaseSingleton!.session$.next(session);
        }
      );
      (globalThis as any).__supabaseSingleton = __supabaseSingleton;
    }

    this._client = __supabaseSingleton.client;
    this._session$ = __supabaseSingleton.session$;
    this._authReady$ = __supabaseSingleton.ready$;

    if (!__supabaseSingleton.initStarted) {
      __supabaseSingleton.initStarted = true;
      this.initSession();
    }
  }

  private async initSession(retry = 0) {
    try {
      const { data, error } = await this._client.auth.getSession();
      if (error) throw error;
      this._session$.next(data.session);
    } catch (e: any) {
      const message = (e?.message ?? e?.toString?.() ?? '').toLowerCase();
      // Handle navigator lock contention with exponential backoff
      if (/lock/.test(message) && retry < 4) {
        const delay = 100 * Math.pow(2, retry); // 100,200,400,800 ms
        setTimeout(() => this.initSession(retry + 1), delay);
        return;
      }
      console.warn('[SupabaseService] initSession error', e);
    } finally {
      this._authReady$.next(true);
    }
  }

  get client(): SupabaseClient {
    return this._client;
  }

  get session$(): Observable<Session | null> {
    return this._session$.asObservable();
  }
  get authReady$(): Observable<boolean> {
    return this._authReady$.asObservable();
  }

  get currentSession(): Session | null {
    return this._session$.value;
  }
  get accessToken(): string | null {
    return this.currentSession?.access_token ?? null;
  }

  signInWithPassword(email: string, password: string) {
    return from(this._client.auth.signInWithPassword({ email, password }));
  }

  // Cached per access token so guards don't hit the RPC on every navigation;
  // a token refresh (hourly) or a different user triggers a fresh check.
  private adminCheck?: { token: string; result: Promise<boolean> };

  /**
   * True only if the signed-in user is in public.admins (via rpc('is_admin')).
   * Fails closed: no session or any error resolves false (errors aren't cached).
   */
  async isAdmin(): Promise<boolean> {
    const { data } = await this._client.auth.getSession();
    const token = data.session?.access_token;
    if (!token) return false;
    if (this.adminCheck?.token !== token) {
      const result = Promise.resolve(this._client.rpc('is_admin'))
        .then(({ data, error }) => {
          if (error) throw error;
          return data === true;
        })
        .catch((e) => {
          console.warn('[SupabaseService] is_admin check failed', e);
          if (this.adminCheck?.token === token) this.adminCheck = undefined;
          return false;
        });
      this.adminCheck = { token, result };
    }
    return this.adminCheck.result;
  }

  signOut() {
    return from(this._client.auth.signOut()).pipe(map(() => true));
  }

  /**
   * Clear cached auth token (manual recovery helper if lock errors persist or storage is corrupted)
   */
  clearSessionCache() {
    try {
      Object.keys(localStorage)
        .filter((k) => k.startsWith('sb-') && k.includes('auth-token'))
        .forEach((k) => localStorage.removeItem(k));
    } catch {
      /* ignore */
    }
    this._session$.next(null);
    // Re-run session initialization
    this.initSession();
  }

  getUser() {
    return from(this._client.auth.getUser()).pipe(map((r) => r.data.user));
  }

  onAuthStateChange(
    callback: (event: AuthChangeEvent, session: Session | null) => void
  ) {
    return this._client.auth.onAuthStateChange(callback);
  }
}
