import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ElementRef,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { HeroSlide } from '../../models';

@Component({
  selector: 'app-hero-carousel',
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class HeroCarouselComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() slides: HeroSlide[] = [];
  @Input() autoPlayDelay = 6000;
  @Input() pauseOnHover = true;
  @Input() enableKeyboard = true;

  currentSlide = 0;
  private autoTimer: any;
  private observer?: IntersectionObserver;
  private hovered = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.startAutoplay();
  }

  ngAfterViewInit(): void {
    this.initLazyBackgrounds();
    if (this.enableKeyboard) {
      window.addEventListener('keydown', this.onKeyDown, { passive: true });
    }
  }

  ngOnDestroy() {
    this.clearAutoplay();
    if (this.observer) this.observer.disconnect();
    if (this.enableKeyboard) {
      window.removeEventListener('keydown', this.onKeyDown);
    }
  }

  onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') this.nextSlide();
    else if (e.key === 'ArrowLeft') this.prevSlide();
  };

  goToSlide(index: number) {
    this.currentSlide = (index + this.slides.length) % this.slides.length;
    this.restartAutoplay();
  }
  nextSlide() {
    this.goToSlide(this.currentSlide + 1);
  }
  prevSlide() {
    this.goToSlide(this.currentSlide - 1);
  }

  private startAutoplay() {
    if (!this.autoPlayDelay || this.autoPlayDelay <= 0) return;
    this.clearAutoplay();
    this.autoTimer = setInterval(() => {
      if (!this.hovered) this.nextSlide();
    }, this.autoPlayDelay);
  }
  private clearAutoplay() {
    if (this.autoTimer) clearInterval(this.autoTimer);
  }
  private restartAutoplay() {
    this.startAutoplay();
  }

  onMouseEnter() {
    if (this.pauseOnHover) this.hovered = true;
  }
  onMouseLeave() {
    if (this.pauseOnHover) this.hovered = false;
  }

  // Lazy load background images: waits until wrapper is intersecting ~150px
  private initLazyBackgrounds() {
    const slideEls: NodeListOf<HTMLElement> =
      this.host.nativeElement.querySelectorAll('.hero-slide[data-bg]');
    if (!('IntersectionObserver' in window)) {
      slideEls.forEach((el) => this.applyBg(el));
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            this.applyBg(el);
            this.observer?.unobserve(el);
          }
        });
      },
      { root: null, rootMargin: '150px', threshold: 0.01 }
    );
    slideEls.forEach((el) => this.observer?.observe(el));
  }
  private applyBg(el: HTMLElement) {
    const bg = el.getAttribute('data-bg');
    if (bg) {
      el.style.backgroundImage = `url(${bg})`;
      el.removeAttribute('data-bg');
    }
  }
}
