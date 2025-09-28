import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { MediaWorkFormComponent } from '../../components/media-work-form/media-work-form.component';
import { AdminAddMediaComponent } from './components/admin-add-media.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminLoginComponent } from './components/admin-login.component';

@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminAddMediaComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminPanelRoutingModule,
    MediaWorkFormComponent, // standalone form component
  ],
})
export class AdminPanelModule {}
