import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  inject,
  signal,
} from '@angular/core';
import { SupabaseService } from '../../../services';
import { environment } from '../../../environments/environment';

let nextId = 0;

const CANCELLED = 'cancelled';

/**
 * File picker that uploads straight to Supabase Storage and shows real progress.
 * storage-js has no progress callback, so the upload goes through XMLHttpRequest.
 * `path` is the storage path of the uploaded file; '' means no file.
 */
// ponytail: replaced or removed files stay in storage (deleting them here would
// break the saved record if the form is then cancelled). Clean up on save if
// storage ever grows enough to matter.
@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
})
export class FileUploadComponent implements OnChanges, OnDestroy {
  private supabase = inject(SupabaseService);

  @Input({ required: true }) bucket!: string;
  /** Folder inside the bucket, e.g. `images`. */
  @Input({ required: true }) folder!: string;
  @Input() label = 'File';
  @Input() hint = '';
  /** Same syntax as the `accept` attribute, e.g. `image/*` or `application/pdf`. */
  @Input() accept = '*/*';
  @Input() maxBytes = 5 * 1024 * 1024;
  /** `image` shows a thumbnail; `file` shows a name and an Open link. */
  @Input() kind: 'image' | 'file' = 'file';
  @Input() path = '';
  @Output() pathChange = new EventEmitter<string>();
  /** True while an upload is running, so the form can hold its Save button. */
  @Output() busyChange = new EventEmitter<boolean>();

  readonly inputId = `file-upload-${nextId++}`;

  uploading = signal(false);
  percent = signal(0);
  loaded = signal(0);
  total = signal(0);
  fileName = signal('');
  error = signal<string | null>(null);
  dragging = signal(false);
  /** Signed link for a private file (kind `file`). */
  fileUrl = signal<string | null>(null);

  // Object URL of the file just picked, so an image previews without a round trip.
  private local = signal<{ path: string; url: string } | null>(null);
  private xhr?: XMLHttpRequest;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['path']) this.refreshFileUrl();
  }

  ngOnDestroy() {
    this.xhr?.abort();
    this.clearLocal();
  }

  previewUrl(): string | null {
    if (this.kind !== 'image' || !this.path) return null;
    const local = this.local();
    return local?.path === this.path
      ? local.url
      : this.supabase.imageUrl(this.path);
  }

  displayName(): string {
    return this.fileName() || this.path.split('/').pop() || '';
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.pick(input.files?.[0]);
    input.value = ''; // let the same file be picked again after an error
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragging.set(false);
    this.pick(event.dataTransfer?.files?.[0]);
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragging.set(true);
  }

  cancel() {
    this.xhr?.abort();
  }

  remove() {
    this.clearLocal();
    this.fileName.set('');
    this.error.set(null);
    this.pathChange.emit((this.path = ''));
    this.fileUrl.set(null);
  }

  formatBytes(bytes: number): string {
    return bytes < 1024 * 1024
      ? `${Math.round(bytes / 1024)} KB`
      : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  }

  private async pick(file: File | undefined) {
    if (!file || this.uploading()) return;
    const problem = this.validate(file);
    this.error.set(problem);
    if (problem) return;

    const safeName = file.name.replace(/[^a-zA-Z0-9_.-]+/g, '_');
    const path = `${this.folder}/${Date.now()}_${safeName}`;
    this.fileName.set(file.name);
    this.total.set(file.size);
    this.loaded.set(0);
    this.percent.set(0);
    this.setBusy(true);
    try {
      await this.send(path, file);
      this.clearLocal();
      if (this.kind === 'image') {
        this.local.set({ path, url: URL.createObjectURL(file) });
      }
      this.pathChange.emit((this.path = path));
      this.refreshFileUrl();
    } catch (e: any) {
      this.fileName.set('');
      if (e?.message !== CANCELLED) {
        this.error.set(e?.message || 'Upload failed. Please try again.');
      }
    } finally {
      this.setBusy(false);
    }
  }

  private validate(file: File): string | null {
    const allowed = this.accept.split(',').map((a) => a.trim());
    const typeOk = allowed.some(
      (a) =>
        a === '*/*' ||
        (a.endsWith('/*')
          ? file.type.startsWith(a.slice(0, -1))
          : file.type === a)
    );
    if (!typeOk) {
      return this.kind === 'image'
        ? 'That file is not an image.'
        : 'That file type is not allowed here.';
    }
    if (file.size > this.maxBytes) {
      return `That file is ${this.formatBytes(file.size)}; the limit is ${this.formatBytes(this.maxBytes)}.`;
    }
    return null;
  }

  private async send(path: string, file: File): Promise<void> {
    const { data } = await this.supabase.client.auth.getSession();
    const token = data.session?.access_token;
    if (!token) {
      throw new Error('Your session has expired. Log in again to upload.');
    }
    const encodedPath = path.split('/').map(encodeURIComponent).join('/');
    const url = `${environment.supabaseUrl}/storage/v1/object/${this.bucket}/${encodedPath}`;

    return new Promise<void>((resolve, reject) => {
      const xhr = (this.xhr = new XMLHttpRequest());
      xhr.open('POST', url);
      xhr.setRequestHeader('Authorization', `Bearer ${token}`);
      xhr.setRequestHeader('apikey', environment.supabaseAnonKey);
      xhr.setRequestHeader('x-upsert', 'true');
      xhr.setRequestHeader(
        'Content-Type',
        file.type || 'application/octet-stream'
      );
      xhr.upload.onprogress = (e) => {
        if (!e.lengthComputable) return;
        this.loaded.set(e.loaded);
        this.total.set(e.total);
        this.percent.set(Math.round((e.loaded / e.total) * 100));
      };
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) return resolve();
        let message = `Upload failed (${xhr.status}).`;
        try {
          message = JSON.parse(xhr.responseText).message || message;
        } catch {
          /* keep the generic message */
        }
        // Storage reports a refused upload as a row-level-security error.
        if (/row-level security|unauthorized/i.test(message)) {
          message =
            'You do not have permission to upload. Log in again as an admin.';
        }
        reject(new Error(message));
      };
      xhr.onerror = () =>
        reject(new Error('Network error. Check your connection and try again.'));
      xhr.onabort = () => reject(new Error(CANCELLED));
      xhr.send(file);
    });
  }

  private async refreshFileUrl() {
    this.fileUrl.set(null);
    const path = this.path;
    if (this.kind !== 'file' || !path) return;
    const { data } = await this.supabase.client.storage
      .from(this.bucket)
      .createSignedUrl(path, 60 * 60);
    if (path === this.path) this.fileUrl.set(data?.signedUrl ?? null);
  }

  private setBusy(busy: boolean) {
    this.uploading.set(busy);
    this.busyChange.emit(busy);
  }

  private clearLocal() {
    const local = this.local();
    if (local) URL.revokeObjectURL(local.url);
    this.local.set(null);
  }
}
