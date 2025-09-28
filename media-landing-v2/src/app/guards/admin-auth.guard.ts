import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseService } from '../services';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate {
  constructor(private supabase: SupabaseService, private router: Router) {}

  canActivate() {
    if (this.supabase.currentSession) {
      return true;
    }
    this.router.navigate(['/admin/login']);
    return false;
  }
}
