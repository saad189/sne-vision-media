import { Injectable } from '@angular/core';
import { forkJoin, from, map, of, shareReplay, switchMap } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { TopMind, TopMindInput } from '../models';

const TABLE = 'top_minds';
const IMAGES_BUCKET = 'VisionMediaBucket';

@Injectable({ providedIn: 'root' })
export class TopMindsService {
  constructor(private supabase: SupabaseService) {}

  private cache$?: any;

  invalidateCache() {
    this.cache$ = undefined;
  }

  private mapRow(row: any): TopMind {
    return {
      id: row.id,
      name: row.name,
      title: row.title ?? null,
      field: row.field ?? null,
      quote: row.quote ?? null,
      quote_date: row.quote_date ?? null,
      profile_image_url: row.profile_image_url ?? null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }

  private sanitizePath(p?: string | null) {
    if (!p) return p;
    let cleaned = p.trim().replace(/^\/+/, '');
    const bucketIdx = cleaned.indexOf(IMAGES_BUCKET + '/');
    if (bucketIdx !== -1) {
      cleaned = cleaned.substring(bucketIdx + IMAGES_BUCKET.length + 1);
    }
    return cleaned;
  }

  private addSigned(list: TopMind[]) {
    if (!list.length) return of(list);
    const ttl = 60 * 10;
    const tasks = list.map((tm) => {
      const path = this.sanitizePath(tm.profile_image_url);
      if (!path) return of({ ...tm, profile_image_signed_url: null });
      return from(
        this.supabase.client.storage
          .from(IMAGES_BUCKET)
          .createSignedUrl(path, ttl)
      ).pipe(
        map((r) => ({
          ...tm,
          profile_image_signed_url: r.error ? null : r.data?.signedUrl || null,
        }))
      );
    });
    return forkJoin(tasks);
  }

  listWithSigned(force = false) {
    return this.list(force).pipe(
      switchMap((items: TopMind[]) => this.addSigned(items as any))
    );
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

  create(payload: TopMindInput) {
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

  update(id: string, patch: Partial<TopMindInput>) {
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
