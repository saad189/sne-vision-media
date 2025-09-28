import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { map, Observable } from 'rxjs';
import { Session, User } from '@supabase/supabase-js';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private supabase: SupabaseService) {}

  session$(): Observable<Session | null> {
    return this.supabase.session$;
  }

  user$(): Observable<User | null> {
    return this.supabase.session$.pipe(map((s) => s?.user ?? null));
  }

  getCurrentUser(): User | null {
    return this.supabase.currentSession?.user ?? null;
  }

  isAuthenticated(): boolean {
    return !!this.supabase.currentSession;
  }
}
