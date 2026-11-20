import { Routes } from '@angular/router';
import { AuthGuard } from '../../guards';
import { AdminLayoutComponent } from './admin-layout.component';
import { AdminLoginComponent } from './components/admin-login.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminMediaWorksTableComponent } from './components/admin-media-works-table.component';
import { AdminAddMediaComponent } from './components/admin-add-media.component';
import { AdminEditMediaComponent } from './components/admin-edit-media.component';
import { AdminCategoriesTableComponent } from './components/admin-categories-table.component';
import { AdminAddCategoryComponent } from './components/admin-add-category.component';
import { AdminEditCategoryComponent } from './components/admin-edit-category.component';
import { AdminEventsTableComponent } from './components/admin-events-table.component';
import { AdminAddEventComponent } from './components/admin-add-event.component';
import { AdminEcosystemSubmissionsTableComponent } from './components/admin-ecosystem-submissions-table.component';

export const ADMIN_ROUTES: Routes = [
  { path: 'login', component: AdminLoginComponent },
  {
    // Everything behind the login shares one layout and one guard.
    path: '',
    component: AdminLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'media-works', component: AdminMediaWorksTableComponent },
      { path: 'add-media', component: AdminAddMediaComponent },
      { path: 'edit-media/:id', component: AdminEditMediaComponent },
      { path: 'categories', component: AdminCategoriesTableComponent },
      { path: 'add-category', component: AdminAddCategoryComponent },
      { path: 'edit-category/:id', component: AdminEditCategoryComponent },
      { path: 'events', component: AdminEventsTableComponent },
      { path: 'add-event', component: AdminAddEventComponent },
      {
        path: 'ecosystem-submissions',
        component: AdminEcosystemSubmissionsTableComponent,
      },
    ],
  },
];
