import { Component, OnInit, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EcosystemService } from '../../../services';
import { EcosystemSubmission } from '../../../models';

@Component({
  selector: 'app-admin-ecosystem-submissions-table',
  templateUrl: './admin-ecosystem-submissions-table.component.html',
  imports: [FormsModule, DatePipe],
})
export class AdminEcosystemSubmissionsTableComponent implements OnInit {
  private eco = inject(EcosystemService);

  rows: EcosystemSubmission[] = [];
  loading = false;
  error: string | null = null;
  query = '';
  /** ids of rows whose full message is shown */
  expanded = new Set<string>();

  ngOnInit() {
    this.load();
  }

  get filtered(): EcosystemSubmission[] {
    const q = this.query.trim().toLowerCase();
    if (!q) return this.rows;
    return this.rows.filter((r) =>
      [r.name, r.email, r.phone, r.designation, r.message].some((v) =>
        v?.toLowerCase().includes(q)
      )
    );
  }

  toggle(id: string) {
    if (!this.expanded.delete(id)) this.expanded.add(id);
  }

  load() {
    this.loading = true;
    this.error = null;
    this.eco.list().subscribe({
      next: (list: EcosystemSubmission[]) => {
        this.rows = list;
        this.loading = false;
      },
      error: (e: any) => {
        this.error = e.message || 'Could not load submissions.';
        this.loading = false;
      },
    });
  }
}
