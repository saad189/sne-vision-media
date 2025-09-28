import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaWorkService } from '../../../services';
import { MediaWork } from '../../../models';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin-media-works-table',
  templateUrl: './admin-media-works-table.component.html',
  styleUrls: ['./admin-media-works-table.component.scss'],
  imports: [CommonModule],
})
export class AdminMediaWorksTableComponent {
  private media = inject(MediaWorkService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);

  rows: MediaWork[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    this.load();
  }

  trackById(_index: number, item: MediaWork) {
    return item.id;
  }

  load() {
    this.loading = true;
    this.media.list().subscribe({
      next: (list) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || 'Failed to load';
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
      error: (e) => {
        this.toast.showError('Delete Failed', e.message || 'Error');
      },
    });
  }
}
