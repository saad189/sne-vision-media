import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Category } from '../../../models';
import { CategoryService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';

@Component({
  selector: 'app-admin-categories-table',
  templateUrl: './admin-categories-table.component.html',
  imports: [FormsModule, RouterLink, DatePipe],
})
export class AdminCategoriesTableComponent implements OnInit {
  private categoriesSvc = inject(CategoryService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);

  rows: Category[] = [];
  loading = false;
  error: string | null = null;
  query = '';

  ngOnInit() {
    this.load();
  }

  get filtered(): Category[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.rows;
    return this.rows.filter((r) =>
      [r.name, r.slug, r.description].some((v) => v?.toLowerCase().includes(q))
    );
  }

  load() {
    this.loading = true;
    this.error = null;
    this.categoriesSvc.invalidateCache(); // the service caches the list; Refresh must refetch
    this.categoriesSvc.list().subscribe({
      next: (list) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || 'Could not load categories.';
        this.loading = false;
      },
    });
  }

  edit(row: Category) {
    this.router.navigate(['/admin/edit-category', row.id]);
  }

  delete(row: Category) {
    if (
      !confirm(
        `Delete category "${row.name}"? Media works using it will be left without a category.`
      )
    )
      return;
    this.categoriesSvc.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess('Deleted', row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e) => this.toast.showError('Delete failed', e.message || 'Error'),
    });
  }
}
