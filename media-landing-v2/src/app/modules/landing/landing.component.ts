import { Component } from '@angular/core';
import { EventTile } from '../../models/event.interface';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  standalone: false,
})
export class LandingComponent {
  heroSlides = [
    {
      image:
        'https://images.unsplash.com/photo-1522199710521-72d69614c702?q=80&w=1200&auto=format&fit=crop',
      headline: 'Welcome to a New Era',
      sub: 'Advancing education, innovation & intelligence for the next generation.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop',
      headline: 'Collaborate & Build',
      sub: 'Join hands to experiment, research and deploy transformative solutions.',
    },
    {
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
      headline: 'Empower Youth',
      sub: 'Creating a skilled, self-driven generation through real world problem solving.',
    },
  ];


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

  constructor() { }
}
