import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { forkJoin, from, map, of, shareReplay, switchMap, tap } from 'rxjs';
import { MediaWork, MediaWorkType } from '../models';

const TABLE = 'media_works';
// Buckets used for storage (kept in sync with MediaWorkFormComponent)
// Private bucket for manuscripts (still require signed URLs)
const MANUSCRIPTS_BUCKET = 'VisionMediaPrivateBucket';
// PUBLIC bucket for images so they no longer need signed URLs.
// Create this bucket in Supabase (or make existing bucket public) and set it here.
// If you keep using the same bucket name for both, ensure it is public and update MANUSCRIPTS_BUCKET usage accordingly.
const IMAGES_BUCKET = 'VisionMediaBucket';

@Injectable({ providedIn: 'root' })
export class MediaWorkService {
  constructor(private supabase: SupabaseService) {}

  // in-memory cache for current session; invalidated only on full page reload
  private allCache$?: any; // Observable<MediaWork[]>
  private cacheByType: Record<string, MediaWork[]> = {};

  /**
   * Clears the in-memory cache (can be used after create/update/delete if immediate consistency needed)
   */
  invalidateCache() {
    this.allCache$ = undefined;
    this.cacheByType = {};
  }

  private mapRow(row: any): MediaWork {
    if (!row) return row;
    return {
      id: row.id,
      name: row.name,
      title: row.title ?? null,
      description: row.description ?? null,
      summary: row.summary ?? null,
      manuscriptUrl: row.manuscript_url ?? null,
      youtubeUrl: row.youtube_url ?? null,
      githubUrl: row.github_url ?? null,
      imageUrl: row.image_url ?? null,
      type: row.type,
      status: row.status ?? undefined,
      categoryId: row.category_id ?? null,
      categoryName: row.categories?.name ?? null,
      ownerId: row.owner_id ?? null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }

  private toDb(payload: Partial<MediaWork>) {
    if (!payload) return payload;
    const categoryId = (payload as any).categoryId;
    const out: any = {};
    const assign = (key: string, value: any) => {
      if (value === undefined) return; // skip undefined so we don't overwrite
      out[key] = value === '' ? null : value; // treat empty string as null for nullable columns
    };
    assign('name', payload.name);
    assign('title', payload.title);
    assign('description', payload.description);
    assign('summary', (payload as any).summary);
    assign('manuscript_url', payload.manuscriptUrl);
    assign('youtube_url', payload.youtubeUrl);
    assign('github_url', payload.githubUrl);
    assign('image_url', payload.imageUrl);
    assign('type', payload.type);
    assign('status', (payload as any).status);
    assign('category_id', categoryId);
    assign('owner_id', (payload as any).ownerId);
    return out;
  }

  /**
   * List media works. Uses session cache. If type provided, filters from cached all-fetch.
   * A single network call is made on first invocation (per reload) then shared.
   */
  list(type?: MediaWorkType) {
    // If we already have the specific type cached (from previous filtering) return it.
    if (type && this.cacheByType[type]) {
      return of(this.cacheByType[type]);
    }

    // Initialize allCache$ if not yet created
    if (!this.allCache$) {
      const query = this.supabase.client
        .from(TABLE)
        .select('*, categories(name)')
        .order('created_at', { ascending: false });
      this.allCache$ = from(query).pipe(
        map((r) => {
          if (r.error) throw r.error;
          return (r.data as any[]).map((d) => this.mapRow(d));
        }),
        tap((all) => {
          // prime cache by type
          this.cacheByType = all.reduce<Record<string, MediaWork[]>>(
            (acc, mw) => {
              const t = mw.type;
              if (!acc[t]) acc[t] = [];
              acc[t].push(mw);
              return acc;
            },
            {}
          );
        }),
        shareReplay(1)
      );
    }

    if (!type) return this.allCache$;
    // filter once allCache$ resolved if not yet cached
    return this.allCache$.pipe(
      map((all: MediaWork[]) => {
        if (!this.cacheByType[type]) {
          this.cacheByType[type] = all.filter((m) => m.type === type);
        }
        return this.cacheByType[type];
      })
    );
  }

  /**
   * Attach access URLs for each media work:
   *  - imageSignedUrl: now derived from PUBLIC bucket without signing (immediate public URL)
   *  - manuscriptSignedUrl: still a short-lived signed URL from private bucket
   * TTL for manuscripts kept short (10 min) matching form component.
   */
  private addSignedUrls(mws: MediaWork[]) {
    if (!mws?.length) return of(mws);
    const ttlSeconds = 60 * 10;
    const sanitize = (p: string) => {
      if (!p) return p;
      // Remove any accidental leading slashes or bucket prefixes
      // Valid stored paths should look like: manuscripts/foo/123_file.pdf or images/foo/123_img.png
      let cleaned = p.trim();
      cleaned = cleaned.replace(/^\/+/, '');
      // If full public URL accidentally stored, extract path after bucket name
      const bucketIdx = cleaned.indexOf(MANUSCRIPTS_BUCKET + '/');
      if (bucketIdx !== -1) {
        cleaned = cleaned.substring(bucketIdx + MANUSCRIPTS_BUCKET.length + 1);
      }
      return cleaned;
    };
    // Build array of observables that create only manuscript signed URLs; images are public now.
    const tasks = mws.map((mw) => {
      const rawImage = mw.imageUrl || '';
      const manuscriptPath = sanitize(mw.manuscriptUrl || '');

      // IMAGE: If already a full URL (starts with http), use as-is. Otherwise build public URL from path.
      let imageSignedUrl: string | null = null;
      if (rawImage) {
        if (/^https?:\/\//i.test(rawImage)) {
          imageSignedUrl = rawImage; // stored as full URL already
        } else {
          const imagePath = sanitize(rawImage);
          const { data } = this.supabase.client.storage
            .from(IMAGES_BUCKET)
            .getPublicUrl(imagePath);
          // getPublicUrl never throws; if image doesn't exist, data.publicUrl is still the constructed URL
          imageSignedUrl = data?.publicUrl || null;
        }
      }
      // MANUSCRIPT: still private, create short-lived signed URL
      const manuscript$ = manuscriptPath
        ? from(
            this.supabase.client.storage
              .from(MANUSCRIPTS_BUCKET)
              .createSignedUrl(manuscriptPath, ttlSeconds)
          ).pipe(
            map((r) => {
              if (r.error) {
                console.warn('[MediaWorkService] manuscript signed URL error', {
                  path: manuscriptPath,
                  error: r.error.message,
                });
                return null;
              }
              return r.data?.signedUrl || null;
            })
          )
        : of(null);
      return manuscript$.pipe(
        map((manuscriptSignedUrl) => ({
          ...mw,
          imageSignedUrl,
          manuscriptSignedUrl,
        }))
      );
    });
    return forkJoin(tasks);
  }

  /**
   * Convenience method: list media works (optionally filtered by type) and attach fresh signed URLs.
   */
  listWithSignedUrls(type?: MediaWorkType) {
    return this.list(type).pipe(
      switchMap((mws: MediaWork[]) => this.addSignedUrls(mws))
    );
  }

  getById(id: string) {
    return from(
      this.supabase.client.from(TABLE).select('*').eq('id', id).single()
    ).pipe(
      map((r): MediaWork => {
        if (r.error) throw r.error;
        return this.mapRow(r.data) as MediaWork;
      })
    );
  }

  create(payload: Omit<MediaWork, 'id' | 'created_at' | 'updated_at'>) {
    const ownerId = this.supabase.currentSession?.user?.id || null;
    const dbPayload = this.toDb({ ...payload, ownerId });
    return from(
      this.supabase.client.from(TABLE).insert(dbPayload).select('*').single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        const mapped = this.mapRow(r.data);
        // update cache optimistically
        if (this.allCache$ && mapped) {
          // simple strategy: invalidate to refetch on next access
          this.invalidateCache();
        }
        return mapped;
      })
    );
  }

  update(id: string, patch: Partial<Omit<MediaWork, 'id'>>) {
    return from(
      this.supabase.client
        .from(TABLE)
        .update(this.toDb(patch))
        .eq('id', id)
        .select('*')
        .single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        const mapped = this.mapRow(r.data);
        this.invalidateCache();
        return mapped;
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
