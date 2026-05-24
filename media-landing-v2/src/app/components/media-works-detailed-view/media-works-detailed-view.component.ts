import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MediaWork } from '../../models';
import { Subscription } from 'rxjs';
import { DatePipe } from '@angular/common';
import { SnakeToWordsPipe } from '../../pipes/snake-to-words.pipe';

@Component({
    selector: 'app-media-works-detailed-view',
    templateUrl: './media-works-detailed-view.component.html',
    styleUrls: ['./media-works-detailed-view.component.scss'],
    imports: [
        RouterLink,
        DatePipe,
        SnakeToWordsPipe,
    ],
})
export class MediaWorksDetailedViewComponent implements OnInit, OnDestroy {
  mediaWork: MediaWork | null = null;
  loading = true;
  error: string | null = null;
  private sub?: Subscription;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Data provided by resolver under key 'mediaWork'
    this.sub = this.route.data.subscribe({
      next: (data) => {
        this.mediaWork = data['mediaWork'] || null;
        this.loading = false;
      },
      error: (e) => {
        console.error('[MediaWorksDetailedViewComponent] route data error', e);
        this.error = 'Failed to load details';
        this.loading = false;
      },
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
