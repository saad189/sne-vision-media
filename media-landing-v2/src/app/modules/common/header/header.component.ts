// header.component.ts
import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  /**
   * 'simple' for basic quote header, 'transparent' for main header
   */
  @Input() variant: 'simple' | 'transparent' = 'simple';
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }
}



