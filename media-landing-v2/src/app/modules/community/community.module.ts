import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunityRoutingModule } from './community-routing.module';
import { CommunityComponent } from './community.component';

@NgModule({
    imports: [CommonModule, CommunityRoutingModule, CommunityComponent],
    exports: [CommunityComponent],
})
export class CommunityModule {}
