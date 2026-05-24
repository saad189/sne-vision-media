import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { MediaWorkFormComponent } from '../../components/media-work-form/media-work-form.component';
import { AdminAddMediaComponent } from './components/admin-add-media.component';
import { AdminDashboardComponent } from './components/admin-dashboard.component';
import { AdminAddEventComponent } from './components/admin-add-event.component';
import { AdminLoginComponent } from './components/admin-login.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AdminPanelRoutingModule,
        MediaWorkFormComponent,
        AdminLoginComponent,
        AdminDashboardComponent,
        AdminAddMediaComponent,
        AdminAddEventComponent,
    ],
})
export class AdminPanelModule {}
