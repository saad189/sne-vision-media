// header.component.ts

import {
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * 'simple' for basic quote header, 'transparent' for main header
   */
  @Input() variant: 'simple' | 'transparent' = 'simple';
  menuOpen = false;

  readonly links: { label: string; path: string; fragment?: string }[] = [
    { label: 'Use Cases', path: '/', fragment: 'use-cases' },
    { label: 'Projects', path: '/', fragment: 'projects' },
    { label: 'Community', path: '/', fragment: 'community' },
    { label: 'Events', path: '/', fragment: 'events' },
    { label: 'About Us', path: '/about' },
  ];

  @ViewChild('menuBtn') menuBtn?: ElementRef<HTMLButtonElement>;

  @HostListener('document:keydown.escape')
  onEscape() {
    if (!this.menuOpen) return;
    this.menuOpen = false;
    this.menuBtn?.nativeElement.focus();
  }
}
