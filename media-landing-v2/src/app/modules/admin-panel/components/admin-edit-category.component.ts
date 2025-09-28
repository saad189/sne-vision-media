import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { Category } from '../../../models';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-admin-edit-category',
  templateUrl: './admin-edit-category.component.html',
  styleUrls: ['./admin-edit-category.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AdminEditCategoryComponent {
  private route = inject(ActivatedRoute);
  private categories = inject(CategoryService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  loading = true;
  submitting = false;
  error: string | null = null;
  category: Category | null = null;
  id: string | null = null;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    description: ['', [Validators.maxLength(500)]],
  });

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.error = 'Missing id parameter';
      this.loading = false;
      return;
    }
    this.categories.getById(this.id).subscribe({
      next: (cat: Category) => {
        this.category = cat;
        this.form.patchValue({
          name: cat.name,
          description: cat.description || '',
        });
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || 'Failed to load category';
        this.loading = false;
      },
    });
  }

  submit() {
    if (!this.id) return;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = null;
    const value = this.form.value;
    this.categories
      .update(this.id, {
        name: value.name || undefined,
        description: value.description ?? undefined,
      })
      .subscribe({
        next: (cat) => {
          this.submitting = false;
          this.toast.showSuccess('Category Updated', cat.name);
          this.router.navigate(['/admin/categories']);
        },
        error: (e) => {
          this.submitting = false;
          this.error = e.message || 'Failed';
          this.toast.showError('Update Failed', this.error || 'Error');
        },
      });
  }
}
