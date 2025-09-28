import { Component, OnInit } from '@angular/core';
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
export class AdminLoginComponent implements OnInit {
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

  ngOnInit() {
    // Wait until Supabase auth initialization completes
    combineLatest([this.supabase.authReady$, this.supabase.session$]).subscribe(
      ([ready, session]) => {
        if (!ready) return;
        if (session) {
          this.router.navigate(['/admin', 'dashboard']);
        } else {
          this.initializing = false; // show form
        }
      }
    );
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
