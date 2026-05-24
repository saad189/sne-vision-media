import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { ProjectsRoutingModule } from './projects-routing.module';
import { SnakeToWordsPipe } from '../../pipes';


@NgModule({
    imports: [
    CommonModule,
    ProjectsRoutingModule,
    SnakeToWordsPipe,
    ProjectsComponent,
],
    exports: [ProjectsComponent],
})
export class ProjectsModule {}
