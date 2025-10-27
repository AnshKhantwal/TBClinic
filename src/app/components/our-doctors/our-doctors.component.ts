import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
// FormsModule is no longer strictly needed but kept for general practice if other forms exist

interface Doctor {
  name: string;
  experience: string;
}

@Component({
  selector: 'app-our-doctors',
  standalone: true,
  imports: [CommonModule], // Removed FormsModule
  templateUrl: './our-doctors.component.html',
  styleUrls: ['./our-doctors.component.scss']
})
export class OurDoctorsComponent {
  
  // CMO Data for the Hero Section
  cmo: Doctor = {
    name: 'Dr. Sunita',
    experience: '20+ years',
  };

  // Sub-Doctors Data for the Grid
  subDoctors: Doctor[] = [
    { name: 'Dr. Deepak', experience: '12+ years' },
    { name: 'Dr. Pranav', experience: '13+ years' },
    { name: 'Dr. Diksha', experience: '7+ years' },
    { name: 'Dr. Vikas', experience: '4+ years' }
  ];

  // Removed all search-related signals and methods.
}