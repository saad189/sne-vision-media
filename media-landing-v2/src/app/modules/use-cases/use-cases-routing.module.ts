import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UseCasesComponent } from './use-cases.component';
import { MediaWorksDetailedViewComponent } from '../../components/media-works-detailed-view/media-works-detailed-view.component';
import { MediaWorkDetailedResolver } from '../../resolvers';

const routes: Routes = [
  { path: '', component: UseCasesComponent },
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
export class UseCasesRoutingModule {}
