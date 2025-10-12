import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseCasesComponent } from './use-cases.component';
import { UseCasesRoutingModule } from './use-cases-routing.module';
import { SnakeToWordsPipe } from '../../pipes';
import { MediaWorksSharedModule } from '../../components/media-works-detailed-view/media-works-shared.module';

@NgModule({
  declarations: [UseCasesComponent],
  imports: [
    CommonModule,
    UseCasesRoutingModule,
    SnakeToWordsPipe,
    MediaWorksSharedModule,
  ],
  exports: [UseCasesComponent],
})
export class UseCasesModule {}
