import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
// import { AuthGuard } from '../guards';

export const routes: Routes = [
  // Eager: the home page is the entry point, so lazy-loading it only left the
  // outlet blank (header + footer alone) while its chunk downloaded.
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
    // canActivate: [AuthGuard],
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  // {
  //   path: 'community',
  //   loadChildren: () =>
  //     import('./community/community.module').then((m) => m.CommunityModule),
  // },
  // {
  //   path: 'projects',
  //   loadChildren: () =>
  //     import('./projects/projects.module').then((m) => m.ProjectsModule),
  // },
  // {
  //   path: 'use-cases',
  //   loadChildren: () =>
  //     import('./use-cases/use-cases.module').then((m) => m.UseCasesModule),
  // },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
  },
  {
    path: 'use-cases',
    loadChildren: () =>
      import('./use-cases/use-cases.module').then((m) => m.UseCasesModule),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-panel/admin-panel.module').then(
        (m) => m.AdminPanelModule
      ),
  },
];
