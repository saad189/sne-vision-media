import { Component, OnInit } from '@angular/core';
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
  heroLoading = true;
  heroError?: string;

  constructor(private heroList: HeroListService) {}

  ngOnInit(): void {
    this.loadHeroSlides();
  }

  private loadHeroSlides() {
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
