import { Injectable } from '@angular/core';
import { forkJoin, from, map, of, shareReplay, switchMap } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { Event, EventInput, EventType } from '../models/event.interface';

const TABLE = 'events';
const IMAGES_BUCKET = 'VisionMediaBucket';

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(private supabase: SupabaseService) {}

  private cache$?: any; // Observable<Event[]>

  invalidateCache() {
    this.cache$ = undefined;
  }

  private mapRow(row: any): Event {
    if (!row) return row;
    const event: Event = {
      id: row.id,
      name: row.name,
      description: row.description ?? null,
      location: row.location ?? null,
      image_url: row.image_url ?? null,
      event_type_id: row.event_type_id,
      starts_at: row.starts_at,
      ends_at: row.ends_at,
      created_at: row.created_at,
      updated_at: row.updated_at,
      event_type: row.event_type || undefined,
    };
    return event;
  }

  private toDb(payload: Partial<EventInput>) {
    if (!payload) return payload;
    const out: any = {};
    const set = (k: string, v: any) => {
      if (v === undefined) return;
      out[k] = v === '' ? null : v;
    };
    set('name', payload.name);
    set('description', payload.description);
    set('location', payload.location);
    set('image_url', payload.image_url);
    set('event_type_id', payload.event_type_id);
    set('starts_at', payload.starts_at);
    set('ends_at', payload.ends_at);
    return out;
  }

  list(force = false) {
    if (!this.cache$ || force) {
      const q = this.supabase.client
        .from(TABLE)
        .select('*, event_type(*)')
        .order('starts_at', { ascending: true });
      this.cache$ = from(q).pipe(
        map((r) => {
          if (r.error) throw r.error;
          return (r.data || []).map((d: any) => this.mapRow(d));
        }),
        shareReplay(1)
      );
    }
    return this.cache$;
  }

  // --- Public Image URL support (updated: previously used signed URLs) ---
  // Events images bucket is now PUBLIC. We keep the property name `image_signed_url`
  // for backward compatibility with existing templates, but it now contains either:
  //  - the original full URL if already absolute
  //  - a constructed public URL from Supabase storage
  //  - null if no image
  private sanitizePath(p?: string | null) {
    if (!p) return p;
    let cleaned = p.trim().replace(/^\/+/, '');
    const bucketIdx = cleaned.indexOf(IMAGES_BUCKET + '/');
    if (bucketIdx !== -1) {
      cleaned = cleaned.substring(bucketIdx + IMAGES_BUCKET.length + 1);
    }
    return cleaned;
  }

  private addSigned(items: Event[]) {
    if (!items.length) return of(items);
    const mapped = items.map((ev) => {
      const raw = ev.image_url || '';
      let image_signed_url: string | null = null;
      if (raw) {
        if (/^https?:\/\//i.test(raw)) {
          image_signed_url = raw; // already a full URL
        } else {
          const path = this.sanitizePath(raw);
          if (path) {
            const { data } = this.supabase.client.storage
              .from(IMAGES_BUCKET)
              .getPublicUrl(path);
            image_signed_url = data?.publicUrl || null;
          }
        }
      }
      return { ...ev, image_signed_url };
    });
    // Wrap in of() to keep return type Observable<Event[]>
    return of(mapped);
  }

  listWithSigned(force = false) {
    return this.list(force).pipe(
      switchMap((items: Event[]) => this.addSigned(items))
    );
  }

  upcoming(nowIso = new Date().toISOString()) {
    return from(
      this.supabase.client
        .from(TABLE)
        .select('*, event_type(*)')
        .gte('starts_at', nowIso)
        .order('starts_at', { ascending: true })
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return (r.data || []).map((d: any) => this.mapRow(d));
      })
    );
  }

  past(nowIso = new Date().toISOString()) {
    return from(
      this.supabase.client
        .from(TABLE)
        .select('*, event_type(*)')
        .lt('starts_at', nowIso)
        .order('starts_at', { ascending: false })
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return (r.data || []).map((d: any) => this.mapRow(d));
      })
    );
  }

  getById(id: string) {
    return from(
      this.supabase.client
        .from(TABLE)
        .select('*, event_type(*)')
        .eq('id', id)
        .single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return this.mapRow(r.data);
      })
    );
  }

  create(payload: EventInput) {
    return from(
      this.supabase.client
        .from(TABLE)
        .insert(this.toDb(payload))
        .select('*, event_type(*)')
        .single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        this.invalidateCache();
        return this.mapRow(r.data);
      })
    );
  }

  update(id: string, patch: Partial<EventInput>) {
    return from(
      this.supabase.client
        .from(TABLE)
        .update(this.toDb(patch))
        .eq('id', id)
        .select('*, event_type(*)')
        .single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        this.invalidateCache();
        return this.mapRow(r.data);
      })
    );
  }

  remove(id: string) {
    return from(this.supabase.client.from(TABLE).delete().eq('id', id)).pipe(
      map((r) => {
        if (r.error) throw r.error;
        this.invalidateCache();
        return true;
      })
    );
  }
}
