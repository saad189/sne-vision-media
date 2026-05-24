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
    // IMPORTANT: Avoid chaining .select() after insert unless you have a SELECT policy.
    // A postgrest select following insert triggers a read which will fail if only an INSERT policy exists.
    // Using returning option (default) we can still get the inserted row if RLS allows the insert.
    return from(this.supabase.client.from(TABLE).insert(clean)).pipe(
      map((r) => {
        if (r.error) throw r.error;
        const row = Array.isArray(r.data) ? r.data[0] : r.data;
        return row as unknown as EcosystemSubmission;
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
