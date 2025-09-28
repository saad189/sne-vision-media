import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';
import { Observable, combineLatest, filter, map, take } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private supabase: SupabaseService) {}

  canActivate(): boolean | UrlTree | Observable<boolean | UrlTree> {
    return combineLatest([
      this.supabase.authReady$,
      this.supabase.session$,
    ]).pipe(
      // Only continue once authReady is true
      filter(([ready]) => ready),
      take(1),
      map(([_, session]) => {
        if (session) return true;
        return this.router.parseUrl('/admin/login');
      })
    );
  }
}
