import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { EcosystemService } from '../../services/ecosystem.service';
import { ToastrNotificationService } from '../../services/toastr.service';

@Component({
    selector: 'app-ecosystem',
    templateUrl: './ecosystem.component.html',
    styleUrls: ['./ecosystem.component.scss'],
    imports: [ReactiveFormsModule],
})
export class EcosystemComponent {
  ecosystemForm: FormGroup;
  formSubmitted = false;
  submitting = false;

  constructor(
    private fb: FormBuilder,
    private ecosystemService: EcosystemService,
    private toastr: ToastrNotificationService
  ) {
    this.ecosystemForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(254)]],
      phone: ['', [Validators.maxLength(40)]],
      designation: ['', [Validators.maxLength(120)]],
      message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(5000)]],
    });
  }

  private static readonly labels: Record<string, string> = {
    name: 'Name',
    email: 'Email',
    phone: 'Phone',
    designation: 'Designation',
    message: 'Message',
  };

  /** Human-readable error for a field, shown only after a submit attempt. */
  errorFor(field: string): string | null {
    const errors = this.ecosystemForm.get(field)?.errors;
    if (!this.formSubmitted || !errors) return null;
    const label = EcosystemComponent.labels[field] ?? field;
    if (errors['required']) return `${label} is required.`;
    if (errors['email']) return 'Enter a valid email address.';
    if (errors['minlength'])
      return `${label} must be at least ${errors['minlength'].requiredLength} characters.`;
    if (errors['maxlength'])
      return `${label} must be at most ${errors['maxlength'].requiredLength} characters.`;
    return `${label} is invalid.`;
  }

  submitEcosystem() {
    this.formSubmitted = true;
    if (this.ecosystemForm.invalid || this.submitting) return;
    const payload = this.ecosystemForm.value;
    this.submitting = true;
    this.ecosystemService.submit(payload).subscribe({
      next: () => {
        this.toastr.showSuccess('Submitted', 'Your message has been received.');
        this.ecosystemForm.reset();
        this.formSubmitted = false;
        this.submitting = false;
      },
      error: (err) => {
        console.error('[EcosystemComponent] submission error', err);
        this.toastr.showError('Error', 'Failed to submit. Please try again.');
        this.submitting = false;
      },
    });
  }
}
