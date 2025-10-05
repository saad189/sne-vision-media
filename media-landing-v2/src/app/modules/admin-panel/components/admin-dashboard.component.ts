import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService, MediaWorkService } from '../../../services';
import { MediaWork } from '../../../models';

@Component({
  standalone: false,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  private router = inject(Router);
  private supabase = inject(SupabaseService);
  private media = inject(MediaWorkService);

  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  closeDropdown() {
    this.dropdownOpen = false;
  }

  goAdd() {
    this.router.navigate(['/admin/add-media']);
  }
  goAddCategory() {
    this.router.navigate(['/admin/add-category']);
  }
  goMediaWorks() {
    this.router.navigate(['/admin/media-works']);
  }
  goCategories() {
    this.router.navigate(['/admin/categories']);
  }
  goEcosystemSubmissions() {
    this.router.navigate(['/admin/ecosystem-submissions']);
  }
  goAddEvent() {
    this.router.navigate(['/admin/add-event']);
  }
  goEvents() {
    this.router.navigate(['/admin/events']);
  }
  logout() {
    this.supabase
      .signOut()
      .subscribe(() => this.router.navigate(['/admin/login']));
  }
}
