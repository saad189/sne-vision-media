import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { CategoryService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';

import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-admin-add-category',
  templateUrl: './admin-add-category.component.html',
  styleUrls: ['./admin-add-category.component.scss'],
  imports: [ReactiveFormsModule],
})
export class AdminAddCategoryComponent {
  private fb = inject(FormBuilder);
  private categories = inject(CategoryService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);

  submitting = false;
  error: string | null = null;

  form = this.fb.group({
    name: ['', [Validators.required, Validators.maxLength(120)]],
    description: ['', [Validators.maxLength(500)]],
  });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;
    this.error = null;
    const value = this.form.value;
    this.categories
      .create({ name: value.name!, description: value.description || null })
      .subscribe({
        next: (cat) => {
          this.submitting = false;
          this.toast.showSuccess('Category Created', cat.name);
          this.router.navigate(['/admin/dashboard']);
        },
        error: (e) => {
          this.submitting = false;
          this.error = e.message || 'Failed';
          this.toast.showError('Create Failed', this.error || 'Error');
        },
      });
  }
}
