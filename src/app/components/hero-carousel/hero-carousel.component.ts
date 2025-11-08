import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface LeadForm {
  name: string;
  mobile: string;
  email: string;
  clinic: string;
}

@Component({
  selector: 'app-hero-carousel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-carousel.component.html',
  styleUrls: ['./hero-carousel.component.scss']
})
export class HeroCarouselComponent implements OnInit {

  staticBackgroundUrl: string = 'assets/Doctor.jpeg';
  hospitals: string[] = ['Select Clinic (Nearest Metro)', 'Lawrence Road (Keshavuram, Red Line)', 'Mayur Vihar (Mayur Vihar Pocket-I, Pink Line)', 'Durgapuri (Shahdra, Red Line)', 'Uttam Nagar (Nawada, Blue Line)', 'Tigri (Saket, Yellow Line)'];

  formData: LeadForm = {
    name: '',
    mobile: '',
    email: '',
    clinic: this.hospitals[0]
  };

  constructor() {}

  ngOnInit(): void {}

  async onSubmitForm(): Promise<void> {
    const isClinicSelected = this.formData.clinic !== this.hospitals[0];

    if (!this.formData.name || !this.formData.mobile || !isClinicSelected) {
      alert('⚠️ Please fill in Name, Mobile, and select a Clinic.');
      return;
    }

    const formData = new FormData();
    formData.append('access_key', '282bc130-d161-4e24-9e93-8eeac1293408');
    formData.append('subject', `New Consultation Request - ${this.formData.name}`);
    formData.append('from_name', 'Sugar Clinic Website');
    formData.append('name', this.formData.name);
    formData.append('email', this.formData.email);
    formData.append('mobile', this.formData.mobile);
    formData.append('hospital', this.formData.clinic);
    formData.append('message', 'Callback request via Hero Carousel Form');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();
      if (result.success) {
        alert('✅ Thank you! We will call you back soon.');
        this.formData = { name: '', mobile: '', email: '', clinic: this.hospitals[0] };
      } else {
        alert('❌ Failed to send your request. Please try again.');
      }
    } catch (error) {
      console.error('Error sending form:', error);
      alert('❌ Network error. Please try again later.');
    }
  }
}