import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {

  // Form model
  contactForm = {
    name: '',
    email: '',
    mobile: '',
    hospital: 'Select Clinic',
    message: '',
  };

  // Dropdown options
  hospitals: string[] = ['Select Clinic', 'Lawrence Road', 'Mayur Vihar', 'Durgapuri', 'Uttam Nagar', 'Tigri'];

  // Web3Forms API key
  private WEB3FORMS_ACCESS_KEY = '282bc130-d161-4e24-9e93-8eeac1293408'; // <-- Replace with your actual key

  constructor() { }

  ngOnInit(): void {
    if (!this.contactForm.hospital) {
      this.contactForm.hospital = this.hospitals[0];
    }
  }

  // Form submission handler
  async onSubmit(): Promise<void> {
    // Basic validation
    if (!this.contactForm.name || !this.contactForm.mobile || this.contactForm.hospital === this.hospitals[0]) {
      alert('Please fill all required fields and select a clinic.');
      return;
    }

    // Prepare form data for Web3Forms
    const formData = new FormData();
    formData.append('access_key', this.WEB3FORMS_ACCESS_KEY);
    formData.append('name', this.contactForm.name);
    formData.append('email', this.contactForm.email);
    formData.append('mobile', this.contactForm.mobile);
    formData.append('clinic', this.contactForm.hospital);
    formData.append('message', this.contactForm.message);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! Your enquiry has been sent successfully.');
        this.resetForm();
      } else {
        alert('Oops! Something went wrong. Please try again later.');
        console.error(result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Unable to send form. Please try again later.');
    }
  }

  // Reset form fields
  private resetForm(): void {
    this.contactForm = {
      name: '',
      email: '',
      mobile: '',
      hospital: this.hospitals[0],
      message: '',
    };
  }

  // Existing placeholders
  openInternationalEnquiry(): void {
    console.log('Opening International Patient Enquiry');
    alert('International Patient Enquiry link clicked!');
  }

  openQuickEnquiry(): void {
    console.log('Opening Quick Enquiry');
    alert('Quick Enquiry link clicked!');
  }

  openChat(): void {
    console.log('Chatbot icon clicked. Simulating external chat API call...');
    alert('A live chat window would open here, triggered by an external script.');
  }
}
