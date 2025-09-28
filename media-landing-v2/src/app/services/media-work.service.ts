import { Injectable } from '@angular/core';
import { SupabaseService } from './supabase.service';
import { from, map } from 'rxjs';
import { MediaWork, MediaWorkType } from '../models';

const TABLE = 'media_works';

@Injectable({ providedIn: 'root' })
export class MediaWorkService {
  constructor(private supabase: SupabaseService) {}

  private mapRow(row: any): MediaWork {
    if (!row) return row;
    return {
      id: row.id,
      name: row.name,
      title: row.title ?? null,
      description: row.description ?? null,
      manuscriptUrl: row.manuscript_url ?? null,
      youtubeUrl: row.youtube_url ?? null,
      githubUrl: row.github_url ?? null,
      imageUrl: row.image_url ?? null,
      type: row.type,
      created_at: row.created_at,
      updated_at: row.updated_at,
    };
  }

  private toDb(payload: Partial<MediaWork>) {
    if (!payload) return payload;
    return {
      name: payload.name,
      title: payload.title,
      description: payload.description,
      manuscript_url: payload.manuscriptUrl,
      youtube_url: payload.youtubeUrl,
      github_url: payload.githubUrl,
      image_url: payload.imageUrl,
      type: payload.type,
    };
  }

  list(type?: MediaWorkType) {
    let query = this.supabase.client
      .from(TABLE)
      .select('*')
      .order('created_at', { ascending: false });
    if (type) {
      query = query.eq('type', type);
    }
    return from(query).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return (r.data as any[]).map((d) => this.mapRow(d));
      })
    );
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

  create(payload: Omit<MediaWork, 'id' | 'created_at' | 'updated_at'>) {
    return from(
      this.supabase.client
        .from(TABLE)
        .insert(this.toDb(payload))
        .select('*')
        .single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return this.mapRow(r.data);
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
        return this.mapRow(r.data);
      })
    );
  }

  remove(id: string) {
    return from(this.supabase.client.from(TABLE).delete().eq('id', id)).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return true;
      })
    );
  }
}
