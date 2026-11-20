
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  year = new Date().getFullYear();
  address = 'Lahore, Pakistan'
  email = 'snevisionmedia@gmail.com'
  phone = '+92 300 1024411'
}
