import { Component, ViewEncapsulation, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { SupabaseService } from '../../services';

interface NavItem {
  path: string;
  label: string;
  /** Route prefixes that count as this section (list, add and edit pages). */
  match: string[];
}

@Component({
  selector: 'app-admin-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './admin-layout.component.html',
  // One stylesheet for the whole admin area, scoped under `.admin`.
  styleUrl: './admin.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AdminLayoutComponent {
  private supabase = inject(SupabaseService);
  private router = inject(Router);

  email = this.supabase.currentSession?.user?.email ?? '';

  nav: NavItem[] = [
    { path: 'dashboard', label: 'Dashboard', match: ['dashboard'] },
    {
      path: 'media-works',
      label: 'Media Works',
      match: ['media-works', 'add-media', 'edit-media'],
    },
    {
      path: 'categories',
      label: 'Categories',
      match: ['categories', 'add-category', 'edit-category'],
    },
    { path: 'events', label: 'Events', match: ['events', 'add-event'] },
    {
      path: 'ecosystem-submissions',
      label: 'Submissions',
      match: ['ecosystem-submissions'],
    },
  ];

  isActive(item: NavItem): boolean {
    return item.match.some((m) => this.router.url.startsWith(`/admin/${m}`));
  }

  logout() {
    this.supabase
      .signOut()
      .subscribe(() => this.router.navigate(['/admin/login']));
  }
}
