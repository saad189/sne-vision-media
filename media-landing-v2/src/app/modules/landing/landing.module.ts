import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { LandingRoutingModule } from './landing-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UseCasesModule } from '../use-cases/use-cases.module';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    UseCasesModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class LandingModule {}
