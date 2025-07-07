// Example within app.config.ts
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AnalyticsComponent } from './analytics.component';

export const routes: Routes = [
    { path: '', component: AnalyticsComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnalyticsRoutingModule { }
