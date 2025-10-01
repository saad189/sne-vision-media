import { Injectable } from '@angular/core';
import { forkJoin, from, map, of, shareReplay, switchMap } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { HeroSlideInput, HeroSlideItem } from '../models';

const TABLE = 'hero_slide';
// Reuse existing bucket (you may wish to dedicate a bucket later)
const IMAGES_BUCKET = 'VisionMediaBucket';

@Injectable({ providedIn: 'root' })
export class HeroListService {
  constructor(private supabase: SupabaseService) {}

  private cache$?: any; // Observable<ImageListItem[]>

  invalidateCache() {
    this.cache$ = undefined;
  }

  private mapRow(row: any): HeroSlideItem {
    return {
      id: row.id,
      name: row.name,
      description: row.description ?? null,
      image_url: row.image_url,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }

  private sanitizePath(p: string) {
    if (!p) return p;
    let cleaned = p.trim().replace(/^\/+/, '');
    const bucketIdx = cleaned.indexOf(IMAGES_BUCKET + '/');
    if (bucketIdx !== -1) {
      cleaned = cleaned.substring(bucketIdx + IMAGES_BUCKET.length + 1);
    }
    return cleaned;
  }

  private addSigned(items: HeroSlideItem[]) {
    if (!items.length) return of(items);
    const ttl = 60 * 10; // 10 minutes
    const tasks = items.map((it) => {
      const path = this.sanitizePath(it.image_url);
      if (!path) return of({ ...it, image_signed_url: null });
      return from(
        this.supabase.client.storage
          .from(IMAGES_BUCKET)
          .createSignedUrl(path, ttl)
      ).pipe(
        map((r) => ({
          ...it,
          image_signed_url: r.error ? null : r.data?.signedUrl || null,
        }))
      );
    });
    return forkJoin(tasks);
  }

  listWithSigned(force = false) {
    return this.list(force).pipe(
      switchMap((items: HeroSlideItem[]) => this.addSigned(items))
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

  create(payload: HeroSlideInput) {
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

  update(id: string, patch: Partial<HeroSlideInput>) {
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
