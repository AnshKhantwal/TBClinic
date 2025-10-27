// src/app/components/header/header.component.ts

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  constructor() {}

  // Method to handle book appointment button click
  onBookAppointment(): void {
    console.log('Book Appointment clicked');
    // Add your routing or modal logic here
    // Example: this.router.navigate(['/book-appointment']);
  }

  // Method to handle helpline click (for mobile devices)
  onHelplineClick(): void {
    window.location.href = 'tel:+919810026456';
  }

  // Method to handle navigation clicks
  onNavigate(item: string): void {
    console.log('Navigating to:', item);
    // Add your routing logic here
  }
}