import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { MediaWorkService, SupabaseService } from '../../../services';
import { MediaWork } from '../../../models';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { SnakeToWordsPipe } from '../../../pipes';

@Component({
  selector: 'app-admin-media-works-table',
  templateUrl: './admin-media-works-table.component.html',
  imports: [FormsModule, RouterLink, DatePipe, SnakeToWordsPipe],
})
export class AdminMediaWorksTableComponent implements OnInit {
  private media = inject(MediaWorkService);
  private supabase = inject(SupabaseService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);

  rows: MediaWork[] = [];
  loading = false;
  error: string | null = null;
  query = '';

  ngOnInit() {
    this.load();
  }

  get filtered(): MediaWork[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.rows;
    return this.rows.filter((r) =>
      [r.name, r.title, r.summary, r.categoryName].some((v) =>
        v?.toLowerCase().includes(q)
      )
    );
  }

  imageUrl(row: MediaWork): string | null {
    return this.supabase.imageUrl(row.imageUrl);
  }

  load() {
    this.loading = true;
    this.error = null;
    this.media.invalidateCache(); // the service caches the list; Refresh must refetch
    this.media.list().subscribe({
      next: (list: MediaWork[]) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e: any) => {
        this.error = e.message || 'Could not load media works.';
        this.loading = false;
      },
    });
  }

  edit(row: MediaWork) {
    this.router.navigate(['/admin/edit-media', row.id]);
  }

  delete(row: MediaWork) {
    if (!confirm(`Delete media work "${row.name}"? This cannot be undone.`))
      return;
    this.media.remove(row.id).subscribe({
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
