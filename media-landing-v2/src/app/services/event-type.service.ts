import { Injectable } from '@angular/core';
import { from, map, of, shareReplay } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { EventType, EventTypeInput } from '../models/event.interface';

const TABLE = 'event_type';

@Injectable({ providedIn: 'root' })
export class EventTypeService {
  constructor(private supabase: SupabaseService) {}

  private cache$?: any; // Observable<EventType[]>

  invalidateCache() {
    this.cache$ = undefined;
  }

  private mapRow(row: any): EventType {
    return row as EventType;
  }

  list(force = false) {
    if (!this.cache$ || force) {
      const q = this.supabase.client
        .from(TABLE)
        .select('*')
        .order('created_at', { ascending: false });
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

  getById(id: string) {
    return from(
      this.supabase.client.from(TABLE).select('*').eq('id', id).single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return this.mapRow(r.data);
      })
    );
  }

  create(payload: EventTypeInput) {
    return from(
      this.supabase.client.from(TABLE).insert(payload).select('*').single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        this.invalidateCache();
        return this.mapRow(r.data);
      })
    );
  }

  update(id: string, patch: Partial<EventTypeInput>) {
    return from(
      this.supabase.client
        .from(TABLE)
        .update(patch)
        .eq('id', id)
        .select('*')
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
