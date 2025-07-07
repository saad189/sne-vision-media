import { Routes } from '@angular/router';
// import { AuthGuard } from '../guards';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'analytics',
    loadChildren: () =>
      import('./analytics/analytics.module').then((m) => m.AnalyticsModule),
    // canActivate: [AuthGuard],
  },
];
