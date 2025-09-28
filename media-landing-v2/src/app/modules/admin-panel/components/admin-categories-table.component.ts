import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../models';
import { CategoryService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin-categories-table',
  templateUrl: './admin-categories-table.component.html',
  styleUrls: ['./admin-categories-table.component.scss'],
  imports: [CommonModule],
})
export class AdminCategoriesTableComponent {
  private categoriesSvc = inject(CategoryService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);

  rows: Category[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    this.load();
  }

  trackById(_idx: number, item: Category) {
    return item.id;
  }

  load() {
    this.loading = true;
    this.categoriesSvc.list().subscribe({
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

  edit(row: Category) {
    this.router.navigate(['/admin/edit-category', row.id]);
  }

  delete(row: Category) {
    if (
      !confirm(
        `Delete category "${row.name}"? Media works referencing it will have a null category.`
      )
    )
      return;
    this.categoriesSvc.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess('Deleted', row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e) => this.toast.showError('Delete Failed', e.message || 'Error'),
    });
  }
}
