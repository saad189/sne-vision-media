import { Component, inject } from '@angular/core';
import { MediaWorkService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { Router } from '@angular/router';
import { MediaWorkFormComponent } from '../../../components/media-work-form/media-work-form.component';

@Component({
    selector: 'app-admin-add-media',
    templateUrl: './admin-add-media.component.html',
    styleUrls: ['./admin-add-media.component.scss'],
    imports: [MediaWorkFormComponent],
})
export class AdminAddMediaComponent {
  private mediaService = inject(MediaWorkService);
  private router = inject(Router);
  private toast = inject(ToastrNotificationService);

  submitting = false;
  error: string | null = null;

  create(payload: any) {
    this.submitting = true;
    this.error = null;
    this.mediaService.create(payload).subscribe({
      next: (created) => {
        this.submitting = false;
        this.toast.showSuccess('Created', `Media Work '${created.name}' saved`);
        this.router.navigate(['/admin/dashboard']);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || 'Failed';
        this.toast.showError('Create Failed', this.error || 'Unknown error');
      },
    });
  }
}
