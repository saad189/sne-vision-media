import { Component } from '@angular/core';
import { TestimonialItem } from '../../models/testimonial.interface';

@Component({
  selector: 'app-community',
  standalone: false,
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent {
  testimonials: TestimonialItem[] = [
    {
      id: 't1',
      quote:
        'Collaborating with SNE has accelerated cross-industry problem solving and widened our innovation lens.',
      author: 'Dr. Ayesha Malik, Lead Systems Architect',
      date: 'Sept, 2025',
    },
    {
      id: 't2',
      quote:
        'We are building safety and efficiency tools that can scale nationally—this community enables rapid iteration.',
      author: 'Jamal Hassan, AI Engineer',
      date: 'Nov, 2025',
    },
    {
      id: 't3',
      quote:
        'It is a new era of open collaboration—policy, engineering & data coming together to solve real constraints.',
      author: 'Farah Zuberi, Civic Planner',
      date: 'Dec, 2025',
    },
    {
      id: 't4',
      quote:
        'Our validation pipeline for infrastructure simulations improved drastically through shared research assets.',
      author: 'Engr. Marwan Syed, Transport Modeling Lead',
      date: 'Jan, 2026',
    },
    {
      id: 't5',
      quote:
        'The open experimentation culture has shortened feedback loops in regulatory technology prototyping.',
      author: 'Ammar Iqbal, Policy Technologist',
      date: 'Feb, 2026',
    },
    {
      id: 't6',
      quote:
        'Seeing multidisciplinary teams iterate on national-scale challenges is inspiring and pragmatic.',
      author: 'Sarah Khan, Systems Researcher',
      date: 'Mar, 2026',
    },
  ];

  trackTestimonial = (_: number, t: TestimonialItem) => t.id;
}
