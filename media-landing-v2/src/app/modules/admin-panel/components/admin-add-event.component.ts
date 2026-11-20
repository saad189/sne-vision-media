import { Component, OnInit, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventService, EventTypeService } from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { EventInput, EventType } from '../../../models/event.interface';
import {
  IMAGES_BUCKET,
  MAX_IMAGE_BYTES,
} from '../../../constants/storage.constants';
import { FileUploadComponent } from './file-upload.component';

@Component({
  selector: 'app-admin-add-event',
  templateUrl: './admin-add-event.component.html',
  imports: [FormsModule, RouterLink, FileUploadComponent],
})
export class AdminAddEventComponent implements OnInit {
  private eventsService = inject(EventService);
  private eventTypeService = inject(EventTypeService);
  private router = inject(Router);
  private toast = inject(ToastrNotificationService);

  readonly imagesBucket = IMAGES_BUCKET;
  readonly maxImageBytes = MAX_IMAGE_BYTES;

  submitting = false;
  /** Save waits while the image is still uploading. */
  uploading = false;
  error: string | null = null;
  eventTypes: EventType[] = [];
  loadingTypes = false;

  model: Partial<EventInput> = {
    name: '',
    description: '',
    location: '',
    event_type_id: '',
    starts_at: '',
    ends_at: '',
    image_url: '',
  };

  ngOnInit() {
    this.loadingTypes = true;
    this.eventTypeService.list().subscribe({
      next: (list: EventType[]) => {
        this.eventTypes = list;
        this.loadingTypes = false;
      },
      error: () => (this.loadingTypes = false),
    });
  }

  create() {
    if (!this.model.name || !this.model.event_type_id) {
      this.error = 'Name and event type are required.';
      return;
    }
    this.submitting = true;
    this.error = null;
    this.eventsService.create(this.model as EventInput).subscribe({
      next: (created) => {
        this.submitting = false;
        this.toast.showSuccess('Created', `Event '${created.name}' saved`);
        this.router.navigate(['/admin/events']);
      },
      error: (e) => {
        this.submitting = false;
        this.error = e.message || 'Could not save the event.';
        this.toast.showError('Create failed', this.error || 'Unknown error');
      },
    });
  }
}
