import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MediaWorkService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { MediaWork } from '../../../models';
import { MediaWorkFormComponent } from '../../../components/media-work-form/media-work-form.component';


@Component({
  standalone: true,
  selector: 'app-admin-edit-media',
  templateUrl: './admin-edit-media.component.html',
  styleUrls: ['./admin-edit-media.component.scss'],
  imports: [MediaWorkFormComponent],
})
export class AdminEditMediaComponent {
  private route = inject(ActivatedRoute);
  private mediaService = inject(MediaWorkService);
  private toast = inject(ToastrNotificationService);
  private router = inject(Router);

  loading = true;
  submitting = false;
  error: string | null = null;
  media: MediaWork | null = null;
  id: string | null = null;

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (!this.id) {
      this.error = 'Missing id parameter';
      this.loading = false;
      return;
    }
    this.mediaService.getById(this.id).subscribe({
      next: (m) => {
        this.media = m;
        this.loading = false;
      },
      error: (e) => {
        this.error = e.message || 'Failed to load media work';
        this.loading = false;
      },
    });
  }

  update(patch: Partial<MediaWork>) {
    if (!this.id) return;
    this.submitting = true;
    this.error = null;
    this.mediaService.update(this.id, patch).subscribe({
      next: (updated) => {
        this.submitting = false;
        this.media = updated;
        this.toast.showSuccess('Updated', `Media Work '${updated.name}' saved`);
        this.router.navigate(['/admin/media-works']);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || 'Update failed';
        this.toast.showError('Update Failed', this.error || 'Unknown error');
      },
    });
  }
}
