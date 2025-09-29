import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { SupabaseService } from './supabase.service';
import { EcosystemSubmission, EcosystemSubmissionInput } from '../models';

const TABLE = 'ecosystem_submissions';

@Injectable({ providedIn: 'root' })
export class EcosystemService {
  constructor(private supabase: SupabaseService) {}

  submit(payload: EcosystemSubmissionInput) {
    const clean: any = { ...payload };
    // Normalize empty strings to null where appropriate
    ['phone', 'designation'].forEach((k) => {
      if (clean[k] === '') clean[k] = null;
    });
    return from(
      this.supabase.client.from(TABLE).insert(clean).select('*').single()
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return r.data as EcosystemSubmission;
      })
    );
  }

  list() {
    return from(
      this.supabase.client
        .from(TABLE)
        .select('*')
        .order('created_at', { ascending: false })
    ).pipe(
      map((r) => {
        if (r.error) throw r.error;
        return (r.data || []) as EcosystemSubmission[];
      })
    );
  }
}
