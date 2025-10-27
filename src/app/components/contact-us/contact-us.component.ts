import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us', // Changed selector from 'app-root' to follow convention
  imports: [
    CommonModule, 
    FormsModule   
  ],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  standalone: true // Kept as standalone for modern Angular best practice
})
export class ContactUsComponent implements OnInit { // Changed class name from 'App'

  // Model for the contact form
  contactForm = {
    name: '',
    email: '',
    mobile: '',
    hospital: 'Select Clinic', // Set default for select dropdown
    message: '',
  };

  // Example list of hospitals for the dropdown
  hospitals: string[] = ['Select Clinic', 'Lawrence Road', 'Mayur Vihar', 'Durgapuri', 'Uttam Nagar', 'Tigri'];

  constructor() { }

  ngOnInit(): void {
    // Ensure the initial hospital selection is respected if needed
    if (!this.contactForm.hospital) {
        this.contactForm.hospital = this.hospitals[0];
    }
  }

  // Method to handle form submission
  onSubmit(): void {
    console.log('Form Submitted!', this.contactForm);
    // Note: In a real application, you would also get and validate the reCAPTCHA token here.
    alert('Thank you for your enquiry! (Form submission simulated)');
    
    // Reset the form
    this.contactForm = {
      name: '',
      email: '',
      mobile: '',
      hospital: this.hospitals[0],
      message: '',
    };
  }

  // Placeholder for the "International Patient Enquiry" button
  openInternationalEnquiry(): void {
    console.log('Opening International Patient Enquiry');
    alert('International Patient Enquiry link clicked!');
  }

  // Placeholder for the "Quick Enquiry" button
  openQuickEnquiry(): void {
    console.log('Opening Quick Enquiry');
    alert('Quick Enquiry link clicked!');
  }

  // Placeholder for the floating chat/help button
  openChat(): void {
    console.log('Chatbot icon clicked. Simulating external chat API call...');
    // In a real app, you would call the external chat service API here, e.g., Tawk_API.toggle();
    alert('A live chat window would open here, triggered by an external script.');
  }
}
