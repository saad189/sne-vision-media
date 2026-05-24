import { Component, OnInit } from '@angular/core';
import { Event } from '../../models/event.interface';
import { EventService } from '../../services/event.service';
import { HeroSlideItem } from '../../models';
import { HeroListService } from '../../services/hero-slide.service';
import { HeroCarouselComponent } from '../../components/hero-carousel/hero-carousel.component';
import { UseCasesComponent } from '../use-cases/use-cases.component';
import { ProjectsComponent } from '../projects/projects.component';
import { CommunityComponent } from '../community/community.component';
import { EventsComponent } from '../events/events.component';
import { EcosystemComponent } from '../ecosystem/ecosystem.component';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [
        HeroCarouselComponent,
        UseCasesComponent,
        ProjectsComponent,
        CommunityComponent,
        EventsComponent,
        EcosystemComponent,
    ],
})
export class LandingComponent implements OnInit {
  heroSlides: HeroSlideItem[] = [];
  heroLoading = false;
  heroError?: string;

  events: Event[] = [];
  eventsLoading = false;
  eventsError?: string;

  constructor(
    private eventService: EventService,
    private heroList: HeroListService
  ) {}

  ngOnInit(): void {
    this.loadEvents();
    this.loadHeroSlides();
  }

  private loadEvents() {
    this.eventsLoading = true;
    this.eventService.list().subscribe({
      next: (list: Event[]) => {
        this.events = list.slice(0, 3); // show first few on landing
        this.eventsLoading = false;
      },
      error: (err: any) => {
        this.eventsError = err?.message || 'Failed to load events';
        this.eventsLoading = false;
      },
    });
  }

  private loadHeroSlides() {
    this.heroLoading = true;
    this.heroList.listWithSigned().subscribe({
      next: (slides: HeroSlideItem[]) => {
        this.heroSlides = slides;
        this.heroLoading = false;
      },
      error: (err: any) => {
        this.heroError = err?.message || 'Failed to load hero slides';
        this.heroLoading = false;
      },
    });
  }
}
