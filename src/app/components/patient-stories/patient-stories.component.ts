import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
// Removed VideoCardComponent since we are building testimonial cards inline

interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

@Component({
  selector: 'app-patient-stories',
  standalone: true,
  templateUrl: './patient-stories.component.html',
  styleUrls: ['./patient-stories.component.scss'],
  imports: [CommonModule]
})
export class PatientStoriesComponent implements OnInit, OnDestroy {
  
  testimonials: Testimonial[] = [
    { 
      quote: 'Best clinic for tb patients in delhi, my condition is totaly weak for last 2 year and. Started treatement in this clinic in 20 days my health is more better.', 
      name: 'Sheetal Gautam', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I am Arti, it has been one month since I started taking treatment for TB and I am better now, thank you mam.', 
      name: 'Aarti Jaiswal', 
      title: 'Former Patient' 
    },
    { 
      quote: 'My treatment is going on at Durgapuri Meddcross clinic and I have become well after taking my treatment. Whoever has any problem should come to Meddcross clinic and get it checked. Thank you Meddcross team.', 
      name: 'Sonu Reshma', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Two members of our family are undergoing treatment at Medcross Clinic and they have been cured, thank you.', 
      name: 'Himanshi Govind', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Best treatment is given in Medcross clinic. I am tired of getting treatment here. Thank you Medcross team.', 
      name: 'Lalit Koli', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I am very happy that my daughter Tapasya got treatment from Medcross TB clinic. Her TB treatment is complete today. She is completely fine. I would suggest that you get TB treatment from Medcross clinic only. Dr. Sunita Rani here is very supportive and I would also like to thank her team.', 
      name: 'Inderjeet yadav', 
      title: 'Former Patient' 
    },
    { 
      quote: 'I got a lot of relief after taking treatment from Med Cross clinic and I would suggest this to everyone, if anyone wants to take treatment for TB then they should go to Med Cross clinic, thank you mam.', 
      name: 'Deepanshu Shrivastav', 
      title: 'Former Patient' 
    },
    { 
      quote: 'Medcrosss TB clinic they give very good treatment to those persons who suffering fromm TB and theyy also take a full possibility of our patient!!', 
      name: 'KHUSHII', 
      title: 'Former Patient' 
    }
  ];

  currentSlideIndex: number = 0;
  private autoScrollInterval: any;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.startAutoScroll();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser && this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
    }
  }

  /** Starts the carousel auto-scroll functionality. */
  startAutoScroll(): void {
    this.autoScrollInterval = setInterval(() => {
      this.nextSlide();
    }, 4000); // Scrolls every 4 seconds
  }

  /** Clears the auto-scroll interval (used when user interacts). */
  resetAutoScroll(): void {
    if (this.isBrowser && this.autoScrollInterval) {
      clearInterval(this.autoScrollInterval);
      this.startAutoScroll(); // Restart timer after interaction
    }
  }

  /** Navigates to the next testimonial. */
  nextSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.testimonials.length;
    this.resetAutoScroll();
  }

  /** Navigates to the previous testimonial. */
  prevSlide(): void {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.testimonials.length) % this.testimonials.length;
    this.resetAutoScroll();
  }
}
