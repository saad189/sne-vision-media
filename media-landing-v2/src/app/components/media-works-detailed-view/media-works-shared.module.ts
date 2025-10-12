import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MediaWorksDetailedViewComponent } from './media-works-detailed-view.component';
import { SnakeToWordsPipe } from '../../pipes';

@NgModule({
  declarations: [MediaWorksDetailedViewComponent],
  imports: [CommonModule, RouterModule, SnakeToWordsPipe],
  exports: [MediaWorksDetailedViewComponent],
})
export class MediaWorksSharedModule {}
