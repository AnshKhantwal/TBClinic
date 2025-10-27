import { Component } from '@angular/core';

// 💡 Import ALL reusable components here
import { HeroCarouselComponent } from '../hero-carousel/hero-carousel.component';
// import { StatsComponent } from '../stats/case-studies-and-blogs.component';
// import { VideoCardComponent } from '../video-card/video-card.component';
import { NetworkComponent } from '../network/network.component';
import { PatientStoriesComponent } from '../patient-stories/patient-stories.component';
import { SpecialtiesCeComponent } from '../specialties-ce/specialties-ce.component';
// Note: You might have other components to include here

@Component({
  selector: 'app-home',
  standalone: true,
  // List all components used in the template here
  imports: [
    HeroCarouselComponent,
    // StatsComponent,
    // VideoCardComponent,
    NetworkComponent,
    PatientStoriesComponent,
    SpecialtiesCeComponent,
    // Add any others
  ], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}