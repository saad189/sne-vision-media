import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcosystemService } from '../../../services';
import { EcosystemSubmission } from '../../../models';

@Component({
  standalone: true,
  selector: 'app-admin-ecosystem-submissions-table',
  templateUrl: './admin-ecosystem-submissions-table.component.html',
  styleUrls: ['./admin-ecosystem-submissions-table.component.scss'],
  imports: [CommonModule],
})
export class AdminEcosystemSubmissionsTableComponent {
  private eco = inject(EcosystemService);

  rows: EcosystemSubmission[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    this.load();
  }

  trackById(_idx: number, item: EcosystemSubmission) {
    return item.id;
  }

  load() {
    this.loading = true;
    this.eco.list().subscribe({
      next: (list: EcosystemSubmission[]) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e: any) => {
        this.error = e.message || 'Failed to load';
        this.loading = false;
      },
    });
  }
}
