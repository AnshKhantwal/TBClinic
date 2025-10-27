// src/app/components/hero-carousel/hero-carousel.component.ts

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Required for ngModel

interface LeadForm {
  name: string;
  mobile: string;
  email: string;
  clinic: string; // NEW: Mandatory clinic selection field
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {

  // Static background image URL
  staticBackgroundUrl: string = 'assets/Doctor.jpeg';

  // NEW: Hospital locations array for the dropdown
  hospitals: string[] = ['Select Clinic', 'Lawrence Road', 'Mayur Vihar', 'Durgapuri', 'Uttam Nagar', 'Tigri'];

  // Form data model
  formData: LeadForm = {
    name: '',
    mobile: '',
    email: '',
    clinic: this.hospitals[0] // Initialize to 'Select Clinic'
  };

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  onSubmitForm(): void {
    const isClinicSelected = this.formData.clinic !== this.hospitals[0];

    if (!this.formData.name || !this.formData.mobile || !isClinicSelected) {
      // Validation check for Name, Mobile, and Clinic selection
      console.error('Validation Error: Please fill in Name, 10-digit Mobile Number, and select a Clinic.');
      return;
    }

    console.log('Callback Requested:', this.formData);

    // TODO: Implement actual data submission logic here

    // Clear form after successful submission
    this.formData = {
      name: '',
      mobile: '',
      email: '',
      clinic: this.hospitals[0]
    };

    // Add success message UI feedback here
    console.log('Thank you! Your request has been sent.');
  }
}
