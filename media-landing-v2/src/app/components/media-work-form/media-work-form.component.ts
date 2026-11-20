import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  MediaWork,
  MediaWorkType,
  Category,
  MediaWorkStatus,
} from '../../models';
import { CategoryService } from '../../services';
import {
  IMAGES_BUCKET,
  MANUSCRIPTS_BUCKET,
  MAX_IMAGE_BYTES,
  MAX_MANUSCRIPT_BYTES,
} from '../../constants/storage.constants';
import { FileUploadComponent } from '../../modules/admin-panel/components/file-upload.component';

const URL_PATTERN = /^https?:\/\/\S+$/i;

@Component({
  selector: 'app-media-work-form',
  imports: [ReactiveFormsModule, RouterLink, FileUploadComponent],
  templateUrl: './media-work-form.component.html',
})
export class MediaWorkFormComponent {
  private fb = new FormBuilder();

  readonly imagesBucket = IMAGES_BUCKET;
  readonly manuscriptsBucket = MANUSCRIPTS_BUCKET;
  readonly maxImageBytes = MAX_IMAGE_BYTES;
  readonly maxManuscriptBytes = MAX_MANUSCRIPT_BYTES;

  categories: Category[] = [];
  loadingCategories = false;
  categoryError: string | null = null;

  // Save waits while either file is still uploading.
  imageBusy = false;
  manuscriptBusy = false;

  @Input() set value(v: Partial<MediaWork> | null) {
    if (!v) return;
    this.form.patchValue(
      {
        name: v.name ?? '',
        title: v.title ?? '',
        description: v.description ?? '',
        summary: v.summary ?? '',
        manuscriptUrl: v.manuscriptUrl ?? '',
        youtubeUrl: v.youtubeUrl ?? '',
        githubUrl: v.githubUrl ?? '',
        imageUrl: v.imageUrl ?? '',
        type: v.type ?? 'projects',
        status: v.status ?? 'not_started',
        categoryId: v.categoryId ?? '',
      },
      { emitEvent: false }
    );
    this.form.markAsPristine();
  }
  @Input() submitting = false;
  @Input() submitLabel = 'Save';

  @Output() save = new EventEmitter<Partial<MediaWork>>();

  form = this.fb.group({
    name: ['', Validators.required],
    title: [''],
    description: [''],
    summary: ['', Validators.maxLength(280)],
    manuscriptUrl: [''], // storage path in the private bucket
    youtubeUrl: ['', Validators.pattern(URL_PATTERN)],
    githubUrl: ['', Validators.pattern(URL_PATTERN)],
    imageUrl: [''], // storage path in the public bucket
    type: ['projects' as MediaWorkType, Validators.required],
    status: ['not_started' as MediaWorkStatus],
    categoryId: [''],
  });

  constructor(private categoryService: CategoryService) {
    this.loadCategories();
  }

  invalid(control: string): boolean {
    const c = this.form.get(control);
    return !!c && c.invalid && c.touched;
  }

  setPath(control: 'imageUrl' | 'manuscriptUrl', path: string) {
    this.form.patchValue({ [control]: path });
    this.form.markAsDirty();
  }

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value as Partial<MediaWork>);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private loadCategories() {
    this.loadingCategories = true;
    this.categoryService.list().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.loadingCategories = false;
      },
      error: () => {
        this.categoryError = 'Could not load categories.';
        this.loadingCategories = false;
      },
    });
  }
}
