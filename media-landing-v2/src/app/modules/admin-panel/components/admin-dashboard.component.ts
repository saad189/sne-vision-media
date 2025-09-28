import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../services';

@Component({
  standalone: false,
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent {
  private router = inject(Router);
  private supabase = inject(SupabaseService);

  goAdd() {
    this.router.navigate(['/admin/add-media']);
  }
  logout() {
    this.supabase
      .signOut()
      .subscribe(() => this.router.navigate(['/admin/login']));
  }
}
