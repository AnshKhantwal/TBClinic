import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Newsletter {
  monthYear: string;
  title?: string; // Optional title for specific events like 'World Patient Safety Day 2025'
  imageUrl: string; // Placeholder for the actual image path
}

@Component({
  selector: 'app-newsletter-list',
  imports: [CommonModule],
  templateUrl: './newsletter-list.component.html',
  styleUrls: ['./newsletter-list.component.scss']
})
export class NewsletterListComponent implements OnInit {

  // Data representing the newsletters shown in the image
  newsletters: Newsletter[] = [
    {
      monthYear: 'September 2025', // Assuming this is the current one
      imageUrl: 'assets/newsletter-image.jpg' // Use a generic or actual path
    },
    {
      monthYear: 'August 2025',
      imageUrl: 'assets/newsletter-image.jpg'
    },
    {
      monthYear: 'July 2025',
      imageUrl: 'assets/newsletter-image.jpg'
    },
    // Add more entries to demonstrate the 3-per-row layout
    {
      monthYear: 'June 2025',
      imageUrl: 'assets/newsletter-image.jpg'
    },
    {
      monthYear: 'May 2025',
      imageUrl: 'assets/newsletter-image.jpg'
    },
    {
      monthYear: 'April 2025',
      imageUrl: 'assets/newsletter-image.jpg'
    },
  ];
  shareNewsletter(newsletter: any) {
    // implement sharing logic here
    console.log('Sharing newsletter:', newsletter);
  }
  constructor() { }

  ngOnInit(): void { }

  // Simple function to handle the button click
  viewNewsletter(newsletter: Newsletter): void {
    console.log(`Viewing newsletter for: ${newsletter.monthYear}`);
    // Add navigation logic here, e.g., using Router
  }
}