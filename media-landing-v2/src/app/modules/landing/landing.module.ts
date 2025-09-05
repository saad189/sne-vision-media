import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UseCasesModule } from '../use-cases/use-cases.module';
import { ProjectsModule } from '../projects/projects.module';
import { CommunityModule } from '../community/community.module';
import { EventsComponent } from '../events/events.component';
import { EventsModule } from '../events/events.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    UseCasesModule,
    ReactiveFormsModule,
    FormsModule,
    ProjectsModule,
    CommunityModule,
    EventsModule,
  ],
})
export class LandingModule {}
