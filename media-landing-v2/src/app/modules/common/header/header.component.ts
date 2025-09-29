// header.component.ts
import { CommonModule } from '@angular/common';
import {
  Component,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupabaseService } from '../../../services/supabase.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  /**
   * 'simple' for basic quote header, 'transparent' for main header
   */
  @Input() variant: 'simple' | 'transparent' = 'simple';
  isScrolled = false;
  userName: string | undefined = undefined;

  private subscription = new Subscription();

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.pageYOffset > 50;
  }

  constructor(private supabase: SupabaseService) {}

  ngOnInit(): void {
    // Wait for auth readiness then get current session user
    const sub = this.supabase.authReady$.subscribe((ready: boolean) => {
      if (ready) {
        this.loadUserFromSession();
      }
    });
    this.subscription.add(sub);

    // Also subscribe to session changes
    const sub2 = this.supabase.session$.subscribe(() => {
      this.loadUserFromSession();
    });
    this.subscription.add(sub2);
  }

  private loadUserFromSession() {
    const session = this.supabase.currentSession;
    // Supabase user metadata may contain name fields; fallback to email
    const user = session?.user;
    if (!user) {
      this.userName = undefined;
      return;
    }

    this.userName = user.email;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
