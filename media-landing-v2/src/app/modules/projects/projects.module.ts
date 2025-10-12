import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SnakeToWordsPipe } from '../../pipes';
import { MediaWorksSharedModule } from '../../components/media-works-detailed-view/media-works-shared.module';

@NgModule({
  declarations: [ProjectsComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    SnakeToWordsPipe,
    MediaWorksSharedModule,
  ],
  exports: [ProjectsComponent],
})
export class ProjectsModule {}
