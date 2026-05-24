
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, FormsModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
  subscribed = false;
  address = 'Lahore, Pakistan'
  email = 'snevisionmedia@gmail.com'
  phone = '+92 300 1024411'
  subscribe() {
    // Placeholder subscription logic; integrate with backend/email service later
    this.subscribed = true;
    setTimeout(() => (this.subscribed = false), 4000);
  }
}
