import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { MediaWorksDetailedViewComponent } from '../../components/media-works-detailed-view/media-works-detailed-view.component';
import { MediaWorkDetailedResolver } from '../../resolvers';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  {
    path: ':id',
    component: MediaWorksDetailedViewComponent,
    resolve: { mediaWork: MediaWorkDetailedResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectsRoutingModule {}
