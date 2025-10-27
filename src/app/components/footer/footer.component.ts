import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface LinkItem {
  name: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(private router: Router) {}

  keyResources: LinkItem[] = [
    { name: 'Contact Us', url: '/contact-us' },
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'What We Treat', url: '/tb-treatments' }
  ];

  clinicHours = [
  { days: 'Monday – Saturday', hours: '09:30AM – 05:00PM' },
  { days: 'Sunday', hours: 'Closed' }
];

  networkOfCare2: LinkItem[] = [
    { name: 'Lawrence Road', url: 'https://www.google.com/maps?ll=28.690205,77.29584&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=856987733078719854' },
    { name: 'Mayur Vihar', url: 'https://www.google.com/maps?ll=28.688618,77.158352&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=16236777036885547770' },
    { name: 'Durgapuri', url: 'https://www.google.com/maps?ll=28.690205,77.29584&z=16&t=m&hl=en&gl=IN&mapclient=embed&cid=856987733078719854' },
    { name: 'Uttam Nagar', url: 'https://www.google.com/maps/place/TB+Clinic/@28.6070875,77.2952148,17z/data=!4m6!3m5!1s0x390ce5001a143a87:0xb8b2668120a206af!8m2!3d28.6063338!4d77.296749!16s%2Fg%2F11vyh_mzt8?hl=en&entry=ttu&g_ep=EgoyMDI1MTAyMi4wIKXMDSoASAFQAw%3D%3D' },
    { name: 'Tigri  ', url: 'https://www.google.com/maps/search/?api=1&query=A+block+111,+112,+113+Ground+floor+bank+road+jj+colony+tigri+new+delhi+110080+near+sheetla+mata+mandir' },
  ];

  socialMedia = [
    { icon: 'fa-facebook-f', url: '#' },
    { icon: 'fa-instagram', url: '#' },
    { icon: 'fa-linkedin-in', url: '#' },
    { icon: 'fa-youtube', url: '#' }
  ];

  // Navigate using Angular Router
  navigate(link: LinkItem) {
    if (link.url !== '#') {
      this.router.navigate([link.url]);
    }
  }
}
