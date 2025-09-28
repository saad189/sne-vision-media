import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MediaWork, MediaWorkType } from '../../models';

@Component({
  selector: 'app-media-work-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './media-work-form.component.html',
  styleUrls: ['./media-work-form.component.scss'],
})
export class MediaWorkFormComponent {
  private fb = new FormBuilder();

  @Input() set value(v: Partial<MediaWork> | null) {
    if (v) {
      this.form.patchValue(v);
    }
  }
  @Input() submitting: boolean = false;
  @Input() submitLabel: string = 'Save';

  @Output() save = new EventEmitter<Partial<MediaWork>>();

  form = this.fb.group({
    name: ['', Validators.required],
    title: [''],
    description: [''],
    manuscriptUrl: [''],
    youtubeUrl: [''],
    githubUrl: [''],
    imageUrl: [''],
    type: ['projects' as MediaWorkType, Validators.required],
  });

  onSubmit() {
    if (this.form.valid) {
      this.save.emit(this.form.value as Partial<MediaWork>);
    } else {
      this.form.markAllAsTouched();
    }
  }
}
