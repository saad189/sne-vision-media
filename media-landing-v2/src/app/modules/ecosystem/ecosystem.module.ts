import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EcosystemComponent } from './ecosystem.component';

@NgModule({
    declarations: [EcosystemComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [EcosystemComponent]
})
export class EcosystemModule { }
