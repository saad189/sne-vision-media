import { Component, OnInit } from '@angular/core';
import { TestimonialItem } from '../../models/testimonial.interface';
import { TopMindsService } from '../../services/top-minds.service';
import { TopMind } from '../../models';

@Component({
  selector: 'app-community',
  standalone: false,
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  testimonials: TestimonialItem[] = [];
  loading = false;
  error?: string;

  constructor(private topMinds: TopMindsService) {}

  ngOnInit(): void {
    this.fetchTestimonials();
  }

  private fetchTestimonials() {
    this.loading = true;
    this.topMinds.listWithSigned().subscribe({
      next: (items: TopMind[]) => {
        this.testimonials = (items || [])
          .filter((tm) => !!tm.quote) // only those with quotes
          .map<TestimonialItem>((tm) => ({
            id: tm.id,
            quote: tm.quote || '',
            date: tm.quote_date || undefined,
            author: tm.name,
            role: tm.title || tm.field || undefined,
          }));
        this.loading = false;
      },
      error: (err: any) => {
        this.error = err?.message || 'Failed to load testimonials';
        this.loading = false;
      },
    });
  }

  trackTestimonial = (_: number, t: TestimonialItem) => t.id;
}
