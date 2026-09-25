import { Injectable } from '@angular/core';
import { Observable, from, map, shareReplay } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { Category } from '../models';

const TABLE = 'categories';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  constructor(private supabase: SupabaseService) {}

  private mapRow(row: any): Category {
    return {
      id: row.id,
      name: row.name,
      slug: row.slug,
      description: row.description ?? null,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }

  // Shared so Use Cases + Projects on the landing page make one request, not two.
  private cache$?: Observable<Category[]>;

  invalidateCache() {
    this.cache$ = undefined;
  }

  list() {
    return (this.cache$ ??= from(
      this.supabase.client
        .from(TABLE)
        .select('*')
        .order('name', { ascending: true })
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        const categories = (r.data as any[]).map((d) => this.mapRow(d));
        const allIndex = categories.findIndex((c) => c.name === 'All');
        if (allIndex > -1) {
          const [allCategory] = categories.splice(allIndex, 1);
          categories.unshift(allCategory);
        }
        return categories;
      }),
      shareReplay(1)
    ));
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

  create(payload: { name: string; description?: string | null }) {
    return from(
      this.supabase.client
        .from(TABLE)
        .insert({
          name: payload.name,
          description: payload.description ?? null,
        })
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

  update(id: string, patch: { name?: string; description?: string | null }) {
    return from(
      this.supabase.client
        .from(TABLE)
        .update({
          ...(patch.name !== undefined ? { name: patch.name } : {}),
          ...(patch.description !== undefined
            ? { description: patch.description ?? null }
            : {}),
        })
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

  // Placeholder remove (decide on cascade or nullify strategy before enabling in UI)
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
