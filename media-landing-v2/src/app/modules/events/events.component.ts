import { Component, OnInit } from '@angular/core';
import { EventTile } from '../../models/event.interface';

@Component({
  selector: 'app-events',
  standalone: false,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
