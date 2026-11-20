import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../../services';
import { combineLatest, filter, firstValueFrom, take } from 'rxjs';
import { ToastrNotificationService } from '../../../services/toastr.service';

@Component({
    selector: 'app-admin-login',
    templateUrl: './admin-login.component.html',
    styleUrls: ['./admin-login.component.scss'],
    imports: [ReactiveFormsModule],
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
  private authSub?: { unsubscribe: () => void };

  ngOnInit() {
    // Look at the initial auth state once. Later emissions (token refresh, tab
    // focus, the login below) are ignored so they can't trigger extra redirects.
    this.authSub = combineLatest([
      this.supabase.authReady$,
      this.supabase.session$,
    ])
      .pipe(
        filter(([ready]) => ready),
        take(1)
      )
      .subscribe(([, session]) => {
        if (session) this.enterIfAdmin(false);
        else this.initializing = false; // show form
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
      .subscribe(({ error }) => {
        if (error) {
          // Generic on purpose: don't reveal whether the account exists.
          this.loading = false;
          this.error = 'Invalid email or password';
          this.toast.showError('Login Failed', this.error);
          return;
        }
        this.enterIfAdmin(true);
      });
  }

  /** Signed in: go to the dashboard if admin, otherwise sign out with a message. */
  private async enterIfAdmin(welcome: boolean) {
    if (await this.supabase.isAdmin()) {
      if (welcome) this.toast.showSuccess('Welcome', 'Login successful');
      this.router.navigate(['/admin', 'dashboard']);
      return;
    }
    await firstValueFrom(this.supabase.signOut()).catch(() => false);
    this.loading = false;
    this.initializing = false;
    this.error = 'This account does not have admin access';
    this.toast.showError('Access denied', this.error);
  }
}
