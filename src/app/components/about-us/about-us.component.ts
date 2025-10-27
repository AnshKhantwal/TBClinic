import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // CRITICAL for *ngFor
// import { AwardsComponent } from '../awards/awards.component'; 
// import { AboutHospitalComponent } from '../about-hospital/about-hospital.component'; 

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule, 
    // AwardsComponent, 
    // Add any other components used in about-us.component.html
  ], 
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  // Data for the Red Stats Banner
  stats = [
    { value: '22 Lakhs', label: 'Total TB Patients per year in India', icon: 'fas fa-check-circle' },
    { value: '03 Lakhs', label: 'Total Deaths Due to TB per year in India. One TB Patients dies every 90 seconds in India', icon: 'fas fa-award' },
    { value: '22 Lakhs', label: 'Sputum positive Patients per year', icon: 'fas fa-globe' }
  ];

  // Data for the Our Story Section
  story = {
    title: 'Our Story',
    content: `
        <p>We are a multidisciplinary team of dedicated medical professionals specializing in TB treatment and integrated healing practices. MEDCROSS is founded on the collective **Vision, Aspirations, and Hopes** of these professionals, driven by a commitment to eradicate tuberculosis as a major public health threat.</p>
        
        <h3>Core Objectives:</h3>
        <ul>
            <li>Contain the Spread: To implement the latest treatment practices and innovative strategies to control TB.</li>
            <li>Prioritize Prevention: To dedicate resources and research to prevention—an essential step we are committed to mastering.</li>
            <li>Reduce Burden: To contain the loss of man-days and channelize morbidity to reduce the financial strain (drain on the exchequer) caused by TB sickness.</li>
            <li>Empower Patients: To empower individuals at risk with positive health strategies, ensuring they never fall into the grip of this life-threatening disease.</li>
        </ul>
        
        <h3>Our Integrated Approach to Well-being:</h3>
        <p>The well-being of TB patients is our first priority. We look forward to health-related tie-ups with different systems to ensure holistic recovery and sustained health. Key focus areas include:</p>
        
        <ul>
            <li>Nutritional Support: Developing affordable, protein-rich supplements (e.g., cheap biscuits).</li>
            <li>Holistic Healing: Integrating natural herbs and exploring new healing foods alongside conventional medicine.</li>
            <li>Patient Resilience: Encouraging emotional empowerment and mental well-being.</li>
            <li>Immunity Building: Promoting immunity supporting practices.</li>
            <li>Clinical Excellence: Delivering state-of-the-art treatments fully compliant with WHO guidelines.</li>
        </ul>
        
        <p>We are keen to foster extensive collaboration at multiple levels with all key players in the TB field—from researchers and NGOs to government agencies—to strengthen the global fight against tuberculosis.</p>
    `,
    imageUrl: 'assets/doctor-patient.webp ' // Placeholder path for your image
}

  // Data for the 'Values' Section (placeholder, complete this later)
  values = [
    { 
      title: 'EXCELLENCE', 
      description: 'We are dedicated to establishing the gold standard in tuberculosis healthcare. Our commitment to excellence encompasses every critical stage, from rapid, accurate diagnosis to comprehensive, long-term patient support. Our core goal is to consistently exceed expectations through specialized protocols and by upholding the highest professional and ethical standards in modern TB medicine.',
      icon: 'fas fa-handshake' // Icon for Excellence/Standard
    },
    { 
      title: 'QUALITY CARE', 
      description: 'We strive for excellence across the entire spectrum of tuberculosis healthcare—from precise diagnosis and advanced MDR/XDR treatment protocols to unwavering patient support. Our goal is to consistently exceed expectations by strictly adhering to the highest specialized TB professional and medical standards, ensuring optimal safety and improved long-term patient outcomes.',
      icon: 'fas fa-heartbeat' // Icon for Quality Care
    },
    { 
      title: 'EMPATHY', 
      description: 'We firmly believe in treating every patient battling TB with unwavering compassion, understanding, and respect. By actively listening to our patients unique concerns and needs throughout their complex treatment, we immediately foster trust and build the strong, supportive relationships critical for a successful and complete healing journey.',
      icon: 'fas fa-hands-helping' // Icon for Empathy/Helping Hand
    },
    { 
      title: 'INNOVATION', 
      description: 'We wholeheartedly embrace advanced technologies and continually seek innovative solutions engineered to radically improve TB healthcare practices. Our fierce commitment to innovation ensures we stay ahead, offering the latest and most effective diagnostic tools and treatment regimens available, including specialized care for drug-resistant cases.',
      icon: 'fas fa-lightbulb' // Icon for Innovation
    }
  ];

  testimonials = [
  { 
    quote: 'I kept feeling that I will never get well even during treatment as I used to have headaches, pain in legs, lots of nausea, but it was all so well taken care of by the doctors and counselling personnel ,that I gradually came out of it a winner.', 
    name: 'Naureen', 
    title: 'Maujpur in East Delhi' 
  },
  { 
    quote: 'I am a housewife who had duties of my 5 children and an ill husband to attend to, with no helping hand, all this was such a strain and on top of that one day I was diagnosed with TB, a situation where my life fell apart. I lost hope that I will not get well then who will take care of my family, I even thought of suicide, but thanks to TB clinic.in ,I have not only got well but feel much stronger than before.', 
    name: 'Mrs. Kiran', 
    title: 'Shahdara, Delhi' 
  },
  { 
    quote: 'Dr Sunita mam is very good  and humble doctor. The staff of clinic is very cooperative and good Best dr in durgapri ..', 
    name: 'Prashant Gaur', 
    title: 'Former Patient' 
  }
];

  constructor() { }

  ngOnInit(): void { }
}
