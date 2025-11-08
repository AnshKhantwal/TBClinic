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
    { name: 'Dr. Deepak', experience: '' },
    { name: 'Dr. Pranav', experience: '' },
    { name: 'Dr. Diksha', experience: '' },
    { name: 'Dr. Vikas', experience: '' }
  ];

  // Removed all search-related signals and methods.
}