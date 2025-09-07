import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TestimonialItem } from '../../models/testimonial.interface';
import { EventTile } from '../../models/event.interface';
import { UseCaseItem } from '../../models/use-case.interface';
import { ProjectItem } from '../../models/project.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: false,
})
export class LandingComponent {
  categories: string[] = [
    'All',
    'Transportation',
    'Finance',
    'Development',
    'Education',
    'Policy',
    'Laws',
    'Social Experiments',
    'Technology',
  ];

  selectedCategory: string = this.categories[0];

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }

  events: EventTile[] = [
    {
      id: 'e1',
      title: 'AI & Systems in University Lab',
      date: 'Sept, 2025',
      type: 'Seminar',
    },
    {
      id: 'e2',
      title: 'Event Karachi, Pakistan',
      date: 'Nov, 2025',
      type: 'Meetup',
    },
    { id: 'e3', title: 'Tech Expo Lahore', date: 'Jan, 2026', type: 'Expo' },
  ];

  ecosystemForm: FormGroup;
  formSubmitted = false;

  constructor(private fb: FormBuilder) {
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
    if (this.ecosystemForm.invalid) return;
    const payload = this.ecosystemForm.value;
    // Placeholder for API integration
    console.log('Ecosystem form submission', payload);
    this.ecosystemForm.reset();
    this.formSubmitted = false;
  }
}
