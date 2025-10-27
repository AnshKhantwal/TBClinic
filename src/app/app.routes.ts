import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomeComponent } from './components/home/home.component'; // Assuming you have a HomeComponent
import { OurDoctorsComponent} from './components/our-doctors/our-doctors.component';
import { FaqComponent } from './components/faq/faq.component';
import { NewsletterListComponent } from './components/newsletter-list/newsletter-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './components/privacy/PrivacyPolicyComponent';
// import { StatsComponent } from './components/stats/case-studies-and-blogs.component';
import { TbTreatmentsComponent } from './components/tb-treatments/tb-treatments.component';

export const routes: Routes = [
  // 1. Root Path: Load the main landing page component
  { path: '', component: HomeComponent }, 
  
  // 2. About Path: Load the About Us component when clicked
  { path: 'about-us', component: AboutUsComponent },

  // 3. Our-doctors Path: Load Our-doctors component when clicked
  { path: 'our-doctors', component: OurDoctorsComponent },

  // 3. FAQ Path: Load FAQ component when clicked
  { path: 'faq', component: FaqComponent },

  // 3. FAQ Path: Load FAQ component when clicked
  { path: 'newsletter-list', component: NewsletterListComponent },

  { path: 'contact-us', component: ContactUsComponent },

  { path: 'privacy', component: PrivacyPolicyComponent },

  { path: 'our-doctors', component: OurDoctorsComponent },

  { path: 'tb-treatments', component: TbTreatmentsComponent }


  
  // Optional: Wildcard route for 404
  // { path: '**', component: NotFoundComponent } 
];