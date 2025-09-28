import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseCasesComponent } from './use-cases.component';
import { UseCasesRoutingModule } from './use-cases-routing.module';
import { SnakeToWordsPipe } from '../../pipes';

@NgModule({
  declarations: [UseCasesComponent],
  imports: [CommonModule, UseCasesRoutingModule, SnakeToWordsPipe],
  exports: [UseCasesComponent],
})
export class UseCasesModule {}
