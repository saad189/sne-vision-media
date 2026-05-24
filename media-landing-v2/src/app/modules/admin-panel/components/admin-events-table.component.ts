import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventService } from '../../../services/event.service';
import { Event } from '../../../models/event.interface';
import { EventTypeService } from '../../../services/event-type.service';
import { ToastrNotificationService } from '../../../services/toastr.service';

@Component({
  standalone: true,
  selector: 'app-admin-events-table',
  templateUrl: './admin-events-table.component.html',
  styleUrls: ['./admin-events-table.component.scss'],
  imports: [CommonModule],
})
export class AdminEventsTableComponent {
  private eventsService = inject(EventService);
  private eventTypeService = inject(EventTypeService);
  private toast = inject(ToastrNotificationService);

  rows: Event[] = [];
  loading = false;
  error: string | null = null;

  typeMap = new Map<string, string>();

  ngOnInit() {
    // Preload types so we can display names even if join missing
    this.eventTypeService.list().subscribe({
      next: (types: any[]) => {
        types.forEach((t) => this.typeMap.set(t.id, t.name));
        this.load();
      },
      error: () => this.load(), // still load events
    });
  }

  trackById(_index: number, item: Event) {
    return item.id;
  }

  load() {
    this.loading = true;
    this.eventsService.list().subscribe({
      next: (list: Event[]) => {
        // If some rows lack embedded event_type, try to patch it from typeMap
        this.rows = list.map((e: Event) => {
          if (
            !e.event_type &&
            e.event_type_id &&
            this.typeMap.has(e.event_type_id)
          ) {
            return {
              ...e,
              event_type: {
                id: e.event_type_id,
                name: this.typeMap.get(e.event_type_id)!,
                slug: '',
                description: null,
                created_at: '',
                updated_at: '',
              } as any,
            };
          }
          return e;
        });
        this.loading = false;
      },
      error: (e: any) => {
        this.error = e.message || 'Failed to load';
        this.loading = false;
      },
    });
  }

  delete(row: Event) {
    if (!confirm(`Delete event "${row.name}"? This cannot be undone.`)) return;
    this.eventsService.remove(row.id).subscribe({
      next: () => {
        this.toast.showSuccess('Deleted', row.name);
        this.rows = this.rows.filter((r) => r.id !== row.id);
      },
      error: (e: any) => {
        this.toast.showError('Delete Failed', e.message || 'Error');
      },
    });
  }
}
