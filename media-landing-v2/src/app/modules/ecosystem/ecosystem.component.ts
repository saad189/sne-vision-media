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
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      designation: [''],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
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
