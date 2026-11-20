import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { SupabaseService } from '../services/supabase.service';
import { Observable, combineLatest, filter, from, map, of, switchMap, take } from 'rxjs';

/** Admin routes: requires a session AND membership in public.admins. */
@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private supabase: SupabaseService) {}

  canActivate(): Observable<boolean | UrlTree> {
    return combineLatest([
      this.supabase.authReady$,
      this.supabase.session$,
    ]).pipe(
      // Only continue once authReady is true
      filter(([ready]) => ready),
      take(1),
      // isAdmin() is cached per access token and resolves false on any error (fail closed)
      switchMap(([, session]) => (session ? from(this.supabase.isAdmin()) : of(false))),
      map((admin) => admin || this.router.parseUrl('/admin/login'))
    );
  }
}
