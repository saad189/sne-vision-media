import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.interface';
import { EventService } from '../../services/event.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.scss'],
    imports: [DatePipe],
})
export class EventsComponent implements OnInit {
  events: Event[] = [];
  loading = false;
  error?: string;

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.fetch();
  }

  private fetch() {
    this.loading = true;
    this.eventService.listWithSigned().subscribe({
      next: (list: Event[]) => {
        this.events = list;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = err?.message || 'Failed to load events';
        this.loading = false;
      },
    });
  }

  /** Image URLs that failed to load; those tiles fall back to the name placeholder. */
  failedImages = new Set<string | null | undefined>();
}
