import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  // Interface for clarity; could be moved to a shared models folder if reused elsewhere
  teamMembers: TeamMember[] = [
    {
      image: 'assets/images/team/f1.png',
      name: 'M. Saad Ahmed',
      role: 'Co-Founder & CEO',
      quote: 'Driving innovation and shaping the future of visionary media.',
    },
    {
      image: 'assets/images/team/f2.png',
      name: 'M. Fahad Nasir',
      role: 'Co-Founder',
      quote: 'Building scalable technology that empowers creative minds.',
    },
    {
      image: 'assets/images/team/e1.png',
      name: 'Aroob Fatima',
      role: 'Research Analyst',
      quote: '',
    },
  ];
}

interface TeamMember {
  image: string;
  name: string;
  role: string;
  quote: string;
}
