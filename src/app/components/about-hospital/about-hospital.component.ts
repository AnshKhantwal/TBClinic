import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Stat {
  icon: string;
  value: string;
  label: string;
}

@Component({
  selector: 'app-about-hospital',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-hospital.component.html',
  styleUrls: ['./about-hospital.component.scss']
})
export class AboutHospitalComponent {
  stats: Stat[] = [
    { icon: 'assets/icons/check.png', value: '750000+', label: 'Successful Procedures' },
    { icon: 'assets/icons/bed.png', value: '650+', label: 'Patient Beds' },
    { icon: 'assets/icons/experience.png', value: '38+', label: 'Year Of Expertise' },
    { icon: 'assets/icons/staff.png', value: '1300+', label: 'Healthcare Professionals' },
    { icon: 'assets/icons/location.png', value: '17', label: 'Centres Across India' }
  ];
}
