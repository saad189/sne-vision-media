import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../../guards';
import { AdminAddMediaComponent } from './components/admin-add-media.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login.component';
import { AdminAddCategoryComponent } from './components/admin-add-category.component';
import { AdminMediaWorksTableComponent } from './components/admin-media-works-table.component';
import { AdminCategoriesTableComponent } from './components/admin-categories-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: AdminLoginComponent },
  {
    path: 'dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'add-media',
    component: AdminAddMediaComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'add-category',
    component: AdminAddCategoryComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'media-works',
    component: AdminMediaWorksTableComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'categories',
    component: AdminCategoriesTableComponent,
    canActivate: [AuthGuard],
  },
  // Placeholder edit routes (components to be created)
  {
    path: 'edit-media/:id',
    component: AdminAddMediaComponent, // reuse form for now
    canActivate: [AuthGuard],
  },
  {
    path: 'edit-category/:id',
    component: AdminAddCategoryComponent, // would switch to dedicated edit component if needed
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminPanelRoutingModule {}
