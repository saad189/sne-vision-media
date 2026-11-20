import { Component, inject } from '@angular/core';
import {
  EventService,
  EventTypeService,
  SupabaseService,
} from '../../../services';
import { ToastrNotificationService } from '../../../services/toastr.service';
import { Router, RouterLink } from '@angular/router';
import { EventInput, EventType } from '../../../models/event.interface';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {
  IMAGES_BUCKET,
  MAX_IMAGE_BYTES,
  SIGNED_URL_TTL_SECONDS,
} from '../../../constants/storage.constants';

@Component({
    selector: 'app-admin-add-event',
    templateUrl: './admin-add-event.component.html',
    styleUrls: ['./admin-add-event.component.scss'],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        RouterLink,
    ],
})
export class AdminAddEventComponent {
  private eventsService = inject(EventService);
  private eventTypeService = inject(EventTypeService);
  private supabase = inject(SupabaseService);
  private router = inject(Router);
  private toast = inject(ToastrNotificationService);

  submitting = false;
  error: string | null = null;
  eventTypes: EventType[] = [];
  loadingTypes = false;
  typesError: string | null = null;

  model: Partial<EventInput> = {
    name: '',
    description: '',
    location: '',
    event_type_id: '',
    starts_at: '',
    ends_at: '',
    image_url: '',
  };

  // Image upload state
  uploadingImage = false;
  imageUploadProgress = 0;
  imageError: string | null = null;
  imageSignedUrl: string | null = null; // optional preview if we decide to sign after upload

  ngOnInit() {
    this.loadEventTypes();
  }

  loadEventTypes() {
    this.loadingTypes = true;
    this.typesError = null;
    this.eventTypeService.list().subscribe({
      next: (list: EventType[]) => {
        this.eventTypes = list;
        this.loadingTypes = false;
      },
      error: (e: any) => {
        this.loadingTypes = false;
        this.typesError = e?.message || 'Failed to load types';
        console.error('Failed loading event types', e);
      },
    });
  }

  create() {
    if (!this.model.name || !this.model.event_type_id) {
      this.error = 'Name and Event Type are required';
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
        this.error = e.message || 'Failed';
        this.toast.showError('Create Failed', this.error || 'Unknown error');
      },
    });
  }

  onImageFileSelected(ev: Event) {
    const input = ev.target as HTMLInputElement | null;
    if (!input?.files || !input.files.length) return;
    const file = input.files[0];
    this.imageError = null;
    if (!file.type.startsWith('image/')) {
      this.imageError = 'Only image files are allowed';
      input.value = '';
      return;
    }
    if (file.size > MAX_IMAGE_BYTES) {
      this.imageError = 'Image exceeds 5MB limit';
      input.value = '';
      return;
    }
    this.uploadingImage = true;
    this.imageUploadProgress = 10;
    const path = this.buildImagePath(file.name);
    this.supabase.client.storage
      .from(IMAGES_BUCKET)
      .upload(path, file, { upsert: true, contentType: file.type })
      .then(async ({ error }) => {
        if (error) throw error;
        this.imageUploadProgress = 85;
        this.model.image_url = path;
        await this.refreshImageSignedUrl(path);
        this.imageUploadProgress = 100;
        this.toast.showSuccess('Image Uploaded', 'Image successfully uploaded');
      })
      .catch((e: any) => {
        console.error('[AddEvent] image upload error', e);
        this.imageError = e?.message || 'Upload failed';
        this.toast.showError(
          'Upload Failed',
          this.imageError || 'Unknown error'
        );
      })
      .finally(() => {
        setTimeout(() => (this.uploadingImage = false), 300);
        setTimeout(() => (this.imageUploadProgress = 0), 800);
      });
  }

  removeImage() {
    const current = this.model.image_url;
    if (!current) return;
    this.supabase.client.storage
      .from(IMAGES_BUCKET)
      .remove([current])
      .then(({ error }: any) => {
        if (error) throw error;
        this.model.image_url = '';
        this.imageSignedUrl = null;
        this.toast.showInfo('Removed', 'Image deleted');
      })
      .catch((e: any) => {
        this.toast.showError(
          'Remove Failed',
          e?.message || 'Error removing image'
        );
      });
  }

  private buildImagePath(originalName: string) {
    const safe = originalName.replace(/[^a-zA-Z0-9_.-]+/g, '_');
    const ts = Date.now();
    return `events/${ts}_${safe}`;
  }

  private async refreshImageSignedUrl(path: string) {
    try {
      const { data, error } = await this.supabase.client.storage
        .from(IMAGES_BUCKET)
        .createSignedUrl(path, SIGNED_URL_TTL_SECONDS);
      if (error) throw error;
      this.imageSignedUrl = data?.signedUrl || null;
    } catch (e) {
      console.warn('[AddEvent] signed URL error', e);
      this.imageSignedUrl = null;
    }
  }
}
