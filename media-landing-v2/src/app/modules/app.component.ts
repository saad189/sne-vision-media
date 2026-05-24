import { Component, OnInit } from '@angular/core';

import { LoadingService } from '../services/loading.service';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MODULES } from '../constants';
import { Module } from '../models';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    HeaderComponent,
    FooterComponent,
    BackToTopComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLoading = false;
  modules = MODULES;
  activeModule: any = null;
  activeSubmodule: any = null;
  sidenavOpen = false;
  hideChrome = false; // hide header/footer on specific routes (e.g., admin login)

  constructor(private loadingService: LoadingService, private router: Router) {
    this.loadingService.isLoading$.subscribe(
      (loading) => (this.isLoading = loading)
    );
  }

  title = 'SnE Vision Media';
  showFiller = false;
  showDeedSubMenu = false;

  toggleDeedSubMenu(): void {
    this.showDeedSubMenu = !this.showDeedSubMenu;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.checkCurrentRoute(event.url);
        this.evaluateChromeVisibility(event.url);
      });
  }

  checkCurrentRoute(url: string): void {
    const segments = url.split('/').filter((segment) => segment.length > 0);
    if (segments.length === 0) return;

    const path = segments[0];
    const subPath = segments[1] ? segments[1] : null;

    const activeModule = this.modules.find((mod) => mod.path === path);

    if (!activeModule) return;

    this.setActiveModuleByName(activeModule);
    this.setActiveSubmoduleByName(
      activeModule.subModules?.find((sub) => sub.path === subPath) ||
        activeModule.subModules?.[0]
    );
  }

  setActiveModuleByName(module: Module): void {
    this.activeModule = module;
    this.sidenavOpen = !!module.subModules && module.subModules.length > 0;
  }

  setActiveSubmoduleByName(subModule: Module | undefined): void {
    this.activeSubmodule = subModule || null;
  }

  navigateToModule(module: Module): void {
    if (module.subModules && module.subModules.length > 0) {
      this.activeModule = module;
      this.navigateToSubmodule(module.subModules[0]);
    } else if (!module.subModules) {
      this.displayComingSoon();
    } else {
      this.router.navigate([`/${module.path}`]);
      this.sidenavOpen = false;
    }
  }

  navigateToSubmodule(submodule: Module): void {
    this.activeSubmodule = submodule;
    this.sidenavOpen = true;
    this.router.navigate([`/${this.activeModule.path}/${submodule.path}`]);
  }

  displayComingSoon(): void {
    alert('Coming Soon!');
  }

  toggleSidenav(): void {
    this.sidenavOpen = !this.sidenavOpen;
  }

  /**
   * Determines whether to hide global chrome (header/footer) for full-screen experiences.
   * Currently hides on admin login route.
   */
  evaluateChromeVisibility(url: string): void {
    // Normalize URL (strip query/hash)
    const clean = url.split(/[?#]/)[0];
    // Match /admin-panel/login or /admin-panel
    this.hideChrome = /\/admin-panel(\/login)?$/.test(clean);
  }
}
