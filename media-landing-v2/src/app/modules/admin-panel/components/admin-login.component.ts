import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../services';
import { combineLatest } from 'rxjs';
import { ToastrNotificationService } from '../../../services/toastr.service';

@Component({
  standalone: false,
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss'],
})
export class AdminLoginComponent implements OnInit, OnDestroy {
  form;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private supabase: SupabaseService,
    private toast: ToastrNotificationService
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  loading = false;
  initializing = true; // wait for authReady
  error: string | null = null;
  private redirected = false;
  private authSub?: { unsubscribe: () => void };

  ngOnInit() {
    // Wait until Supabase auth initialization completes.
    // Previous implementation redirected on *any* session emission (including refresh on tab focus)
    // which caused unexpected navigations. Gate and unsubscribe after first redirect.
    this.authSub = combineLatest([
      this.supabase.authReady$,
      this.supabase.session$,
    ]).subscribe(([ready, session]) => {
      if (!ready) return;
      if (session) {
        if (!this.redirected && this.router.url.startsWith('/admin/login')) {
          this.redirected = true;
          this.router.navigate(['/admin', 'dashboard']);
          // Prevent further redirects on token refresh / tab focus
          this.authSub?.unsubscribe();
        }
      } else {
        this.initializing = false; // show form
      }
    });
  }

  ngOnDestroy() {
    this.authSub?.unsubscribe();
  }

  login() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const { email, password } = this.form.value;
    this.loading = true;
    this.error = null;
    this.supabase
      .signInWithPassword(email!, password!)
      .subscribe(({ data, error }) => {
        this.loading = false;
        if (error) {
          this.error = error.message;
          this.toast.showError(
            'Login Failed',
            this.error || 'Invalid credentials'
          );
          return;
        }
        this.toast.showSuccess('Welcome', 'Login successful');
        this.router.navigate(['/admin', 'dashboard']);
      });
  }
}
