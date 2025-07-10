import { Routes } from '@angular/router';
// import { AuthGuard } from '../guards';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingModule),
    pathMatch: 'full',
  },
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
  {
    path: 'community',
    loadChildren: () =>
      import('./community/community.module').then((m) => m.CommunityModule),
  },
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
];
