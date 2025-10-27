import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Speciality {
  name: string;
  icon: string;
}

@Component({
  selector: 'app-specialties-ce',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialties-ce.component.html',
  styleUrls: ['./specialties-ce.component.scss']
})
export class SpecialtiesCeComponent {
  specialties: Speciality[] = [
    { name: 'ABDOMINAL TB', icon: 'assets/icons/urology.webp' },
    { name: 'BONE TB', icon: 'assets/icons/female-urology.webp' },
    { name: 'BRAIN TB', icon: 'assets/icons/laparoscopic.webp' },
    { name: 'GENITO-URINARY TB', icon: 'assets/icons/gastro.webp' },
    { name: 'LYMPH NODE TB', icon: 'assets/icons/minimally-invasive.webp' },
    { name: 'PLEURAL TB', icon: 'assets/icons/nephrology.webp' },
    { name: 'PULMONARY TB', icon: 'assets/icons/bariatric.webp' },
    { name: 'SKIN TB', icon: 'assets/icons/robotic.webp' },
  ];

  expertSearchInfo = {
    title: 'Looking for an Expert',
    description:
      'TB consultation/Any Tb information/Free Online Counseling',
    cta: 'MAKE AN APPOINTMENT ->'
  };
}
