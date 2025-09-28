import { Component, inject } from '@angular/core';
import { MediaWorkService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-admin-add-media',
  templateUrl: './admin-add-media.component.html',
  styleUrls: ['./admin-add-media.component.scss'],
})
export class AdminAddMediaComponent {
  private mediaService = inject(MediaWorkService);
  private router = inject(Router);

  submitting = false;
  error: string | null = null;

  create(payload: any) {
    this.submitting = true;
    this.error = null;
    this.mediaService.create(payload).subscribe({
      next: () => {
        this.submitting = false;
        this.router.navigate(['/admin']);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || 'Failed';
      },
    });
  }
}
