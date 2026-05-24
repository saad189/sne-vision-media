import { Component, EventEmitter, Input, Output } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  MediaWork,
  MediaWorkType,
  Category,
  MediaWorkStatus,
} from '../../models';
import { CategoryService, SupabaseService } from '../../services';
import { ToastrNotificationService } from '../../services/toastr.service';

@Component({
  selector: 'app-media-work-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './media-work-form.component.html',
  styleUrls: ['./media-work-form.component.scss'],
})
export class MediaWorkFormComponent {
  private fb = new FormBuilder();

  categories: Category[] = [];
  loadingCategories = false;
  categoryError: string | null = null;

  @Input() set value(v: Partial<MediaWork> | null) {
    if (!v) return;
    // Normalize incoming payload to match form controls
    const normalized: any = {
      name: v.name ?? '',
      title: v.title ?? '',
      description: v.description ?? '',
      summary: (v as any).summary ?? '',
      manuscriptUrl: v.manuscriptUrl ?? '',
      youtubeUrl: v.youtubeUrl ?? '',
      githubUrl: v.githubUrl ?? '',
      imageUrl: v.imageUrl ?? '',
      type: v.type ?? 'projects',
      status: (v as any).status ?? 'not_started',
      categoryId: v.categoryId ?? '',
    };
    // Patch only changed values to avoid triggering valueChanges storms
    this.form.patchValue(normalized, { emitEvent: false });
    // Reset dirty/pristine so UI reflects loaded state
    this.form.markAsPristine();
    this.form.updateValueAndValidity({ emitEvent: false });
    // Refresh signed URLs if paths exist
    if (normalized.manuscriptUrl) {
      this.refreshSignedUrl(normalized.manuscriptUrl);
    }
    if (normalized.imageUrl) {
      this.refreshImageSignedUrl(normalized.imageUrl);
    }
  }
  @Input() submitting: boolean = false;
  @Input() submitLabel: string = 'Save';

  @Output() save = new EventEmitter<Partial<MediaWork>>();

  form = this.fb.group({
    name: ['', Validators.required],
    title: [''],
    description: [''],
    summary: [''],
    manuscriptUrl: [''], // stores storage path (private)
    youtubeUrl: [''],
    githubUrl: [''],
    imageUrl: [''],
    type: ['projects' as MediaWorkType, Validators.required],
    status: ['not_started' as MediaWorkStatus],
    categoryId: [''], // optional selection
  });

  // Upload state
  uploadingManuscript = false;
  uploadProgress = 0; // simple optimistic progress (no native progress API in storage-js yet)
  manuscriptError: string | null = null;
  // Image upload state
  uploadingImage = false;
  imageUploadProgress = 0;
  imageError: string | null = null;

  // Supabase Storage bucket for manuscripts (PDF uploads)
  private readonly MANUSCRIPTS_BUCKET = 'VisionMediaBucket';
  manuscriptSignedUrl: string | null = null;
  private SIGNED_URL_TTL_SECONDS = 60 * 10; // 10 minutes
  // Reuse same bucket for images (adjust if separate bucket exists)
  private readonly IMAGES_BUCKET = this.MANUSCRIPTS_BUCKET;
  imageSignedUrl: string | null = null;

  constructor(
    private categoryService: CategoryService,
    private supabase: SupabaseService,
    private toast: ToastrNotificationService
  ) {
    this.loadCategories();
  }

  fileNameOf(path: string | null | undefined) {
    if (!path) return '';
    try {
      const parts = path.split('/');
      return parts[parts.length - 1];
    } catch {
      return path;
    }
  }

  private loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.loadingCategories = false;
      },
      error: (e) => {
        console.error('[MediaWorkForm] categories load error', e);
        this.categoryError = 'Failed to load categories';
        this.loadingCategories = false;
      },
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value as Partial<MediaWork>);
    } else {
      this.form.markAllAsTouched();
    }
  }

  async onManuscriptFileSelected(evt: Event) {
    const input = evt.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    this.manuscriptError = null;
    if (file.type !== 'application/pdf') {
      this.manuscriptError = 'Only PDF files are allowed';
      input.value = '';
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      // 15MB limit
      this.manuscriptError = 'File exceeds 15MB limit';
      input.value = '';
      return;
    }
    this.uploadingManuscript = true;
    this.uploadProgress = 5;
    try {
      const path = this.buildManuscriptPath(file.name);
      const { error: upErr } = await this.supabase.client.storage
        .from(this.MANUSCRIPTS_BUCKET)
        .upload(path, file, { upsert: true, contentType: 'application/pdf' });
      if (upErr) throw upErr;
      this.uploadProgress = 85;
      this.form.patchValue({ manuscriptUrl: path });
      await this.refreshSignedUrl(path);
      this.uploadProgress = 100;
      this.toast.showSuccess(
        'Manuscript Uploaded',
        'PDF successfully uploaded'
      );
    } catch (e: any) {
      console.error('[MediaWorkForm] upload error', e);
      this.manuscriptError = e?.message || 'Upload failed';
      this.toast.showError(
        'Upload Failed',
        this.manuscriptError || 'Unknown error'
      );
    } finally {
      setTimeout(() => (this.uploadingManuscript = false), 300);
      setTimeout(() => (this.uploadProgress = 0), 800);
    }
  }

  async removeManuscript() {
    const path = this.form.get('manuscriptUrl')?.value;
    if (!path) return;
    try {
      const { error } = await this.supabase.client.storage
        .from(this.MANUSCRIPTS_BUCKET)
        .remove([path]);
      if (error) throw error;
      this.form.patchValue({ manuscriptUrl: '' });
      this.manuscriptSignedUrl = null;
      this.toast.showInfo('Removed', 'Manuscript deleted');
    } catch (e: any) {
      this.toast.showError(
        'Remove Failed',
        e?.message || 'Error removing file'
      );
    }
  }

  async onImageFileSelected(evt: Event) {
    const input = evt.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;
    const file = input.files[0];
    this.imageError = null;
    if (!file.type.startsWith('image/')) {
      this.imageError = 'Only image files are allowed';
      input.value = '';
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.imageError = 'Image exceeds 5MB limit';
      input.value = '';
      return;
    }
    this.uploadingImage = true;
    this.imageUploadProgress = 10;
    try {
      const path = this.buildImagePath(file.name);
      const { error: upErr } = await this.supabase.client.storage
        .from(this.IMAGES_BUCKET)
        .upload(path, file, { upsert: true, contentType: file.type });
      if (upErr) throw upErr;
      this.imageUploadProgress = 85;
      this.form.patchValue({ imageUrl: path });
      await this.refreshImageSignedUrl(path);
      this.imageUploadProgress = 100;
      this.toast.showSuccess('Image Uploaded', 'Image successfully uploaded');
    } catch (e: any) {
      console.error('[MediaWorkForm] image upload error', e);
      this.imageError = e?.message || 'Upload failed';
      this.toast.showError('Upload Failed', this.imageError || 'Unknown error');
    } finally {
      setTimeout(() => (this.uploadingImage = false), 300);
      setTimeout(() => (this.imageUploadProgress = 0), 800);
    }
  }

  async removeImage() {
    const path = this.form.get('imageUrl')?.value;
    if (!path) return;
    try {
      const { error } = await this.supabase.client.storage
        .from(this.IMAGES_BUCKET)
        .remove([path]);
      if (error) throw error;
      this.form.patchValue({ imageUrl: '' });
      this.imageSignedUrl = null;
      this.toast.showInfo('Removed', 'Image deleted');
    } catch (e: any) {
      this.toast.showError(
        'Remove Failed',
        e?.message || 'Error removing image file'
      );
    }
  }

  private buildManuscriptPath(originalName: string) {
    const safe = originalName.replace(/[^a-zA-Z0-9_.-]+/g, '_');
    const ts = Date.now();
    // Always nest under manuscripts/ for organization, fallback name slug
    const base = (this.form.get('name')?.value || 'untitled')
      .toString()
      .replace(/[^a-zA-Z0-9_-]+/g, '_')
      .toLowerCase();
    return `manuscripts/${base}/${ts}_${safe}`;
  }

  private buildImagePath(originalName: string) {
    const safe = originalName.replace(/[^a-zA-Z0-9_.-]+/g, '_');
    const ts = Date.now();
    const base = (this.form.get('name')?.value || 'untitled')
      .toString()
      .replace(/[^a-zA-Z0-9_-]+/g, '_')
      .toLowerCase();
    return `images/${base}/${ts}_${safe}`;
  }

  private async refreshSignedUrl(path: string) {
    try {
      const { data, error } = await this.supabase.client.storage
        .from(this.MANUSCRIPTS_BUCKET)
        .createSignedUrl(path, this.SIGNED_URL_TTL_SECONDS);
      if (error) throw error;
      this.manuscriptSignedUrl = data?.signedUrl || null;
      if (this.manuscriptSignedUrl) {
        setTimeout(
          () => this.refreshSignedUrl(path),
          (this.SIGNED_URL_TTL_SECONDS - 30) * 1000
        );
      }
    } catch (e) {
      console.warn('[MediaWorkForm] failed to refresh signed URL', e);
      this.manuscriptSignedUrl = null;
    }
  }

  private async refreshImageSignedUrl(path: string) {
    try {
      const { data, error } = await this.supabase.client.storage
        .from(this.IMAGES_BUCKET)
        .createSignedUrl(path, this.SIGNED_URL_TTL_SECONDS);
      if (error) throw error;
      this.imageSignedUrl = data?.signedUrl || null;
      if (this.imageSignedUrl) {
        setTimeout(
          () => this.refreshImageSignedUrl(path),
          (this.SIGNED_URL_TTL_SECONDS - 30) * 1000
        );
      }
    } catch (e) {
      console.warn('[MediaWorkForm] failed to refresh image signed URL', e);
      this.imageSignedUrl = null;
    }
  }
}
