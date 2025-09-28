import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SnakeToWordsPipe } from '../../pipes';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [CommonModule, ProjectsRoutingModule, SnakeToWordsPipe],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
