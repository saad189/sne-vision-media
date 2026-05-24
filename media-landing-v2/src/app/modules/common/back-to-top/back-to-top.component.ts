import { Component, HostListener, signal } from '@angular/core';


@Component({
  selector: 'app-back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss'],
})
export class BackToTopComponent {
  visible = signal(false);
  private threshold = 400; // px scroll before showing button

  @HostListener('window:scroll')
  onScroll() {
    this.visible.set(window.pageYOffset > this.threshold);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
