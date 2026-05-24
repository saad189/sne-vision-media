import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UseCasesComponent } from './use-cases.component';
import { UseCasesRoutingModule } from './use-cases-routing.module';
import { SnakeToWordsPipe } from '../../pipes';


@NgModule({
    imports: [
    CommonModule,
    UseCasesRoutingModule,
    SnakeToWordsPipe,
    UseCasesComponent,
],
    exports: [UseCasesComponent],
})
export class UseCasesModule {}
