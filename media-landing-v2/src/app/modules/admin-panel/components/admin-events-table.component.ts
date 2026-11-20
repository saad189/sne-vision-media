import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { EventService, SupabaseService } from '../../../services';
import { Event } from '../../../models/event.interface';
import { ToastrNotificationService } from '../../../services/toastr.service';

@Component({
  selector: 'app-admin-events-table',
  templateUrl: './admin-events-table.component.html',
  imports: [FormsModule, RouterLink, DatePipe],
})
export class AdminEventsTableComponent implements OnInit {
  private eventsService = inject(EventService);
  private supabase = inject(SupabaseService);
  private toast = inject(ToastrNotificationService);

  rows: Event[] = [];
  loading = false;
  error: string | null = null;
  query = '';

  ngOnInit() {
    this.load();
  }

  get filtered(): Event[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.rows;
    return this.rows.filter((r) =>
      [r.name, r.location, r.event_type?.name].some((v) =>
        v?.toLowerCase().includes(q)
      )
    );
  }

  imageUrl(row: Event): string | null {
    return this.supabase.imageUrl(row.image_url);
  }

  isUpcoming(row: Event): boolean {
    return !!row.starts_at && new Date(row.starts_at).getTime() > Date.now();
  }

  load() {
    this.loading = true;
    this.error = null;
    this.eventsService.list(true).subscribe({
      next: (list: Event[]) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e: any) => {
        this.error = e.message || 'Could not load events.';
        this.loading = false;
      },
    });
  }

  delete(row: Event) {
    if (!confirm(`Delete event "${row.name}"? This cannot be undone.`)) return;
    this.eventsService.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess('Deleted', row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e: any) => {
        this.toast.showError('Delete failed', e.message || 'Error');
      },
    });
  }
}
