import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
  // Eager: the home page is the entry point, so lazy-loading it only left the
  // outlet blank (header + footer alone) while its chunk downloaded.
  { path: '', component: LandingComponent, pathMatch: 'full' },
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
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
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin-panel/admin.routes').then((m) => m.ADMIN_ROUTES),
  },
];
