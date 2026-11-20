import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import {
  CategoryService,
  EcosystemService,
  EventService,
  MediaWorkService,
} from '../../../services';
import { EcosystemSubmission, MediaWork } from '../../../models';
import { Event } from '../../../models/event.interface';

interface Stat {
  label: string;
  link: string;
  /** null until loaded */
  value: number | null;
  sub: string;
}

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
})
export class AdminDashboardComponent implements OnInit {
  private media = inject(MediaWorkService);
  private events = inject(EventService);
  private categories = inject(CategoryService);
  private submissions = inject(EcosystemService);

  stats: Stat[] = [];

  ngOnInit() {
    this.addStat<MediaWork>(
      'Media works',
      '/admin/media-works',
      this.media.list(),
      (rows) => {
        const useCases = rows.filter((r) => r.type === 'use-cases').length;
        return `${rows.length - useCases} projects · ${useCases} use cases`;
      }
    );
    this.addStat<Event>('Events', '/admin/events', this.events.list(), (rows) => {
      const now = Date.now();
      const upcoming = rows.filter(
        (e) => e.starts_at && new Date(e.starts_at).getTime() > now
      ).length;
      return `${upcoming} upcoming`;
    });
    this.addStat(
      'Categories',
      '/admin/categories',
      this.categories.list(),
      () => ''
    );
    this.addStat<EcosystemSubmission>(
      'Submissions',
      '/admin/ecosystem-submissions',
      this.submissions.list(),
      (rows) =>
        rows.length
          ? `Latest on ${new Date(rows[0].created_at).toLocaleDateString(
              'en-GB',
              { day: 'numeric', month: 'short', year: 'numeric' }
            )}`
          : 'None yet'
    );
  }

  private addStat<T>(
    label: string,
    link: string,
    source: Observable<T[]>,
    describe: (rows: T[]) => string
  ) {
    const stat: Stat = { label, link, value: null, sub: '' };
    this.stats.push(stat);
    source.subscribe({
      next: (rows) => {
        stat.value = rows.length;
        stat.sub = describe(rows);
      },
      error: () => (stat.sub = 'Could not load'),
    });
  }
}
