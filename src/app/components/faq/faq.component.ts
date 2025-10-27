import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; // Needed for *ngFor and *ngIf

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  
  // State to track which item is currently open (stores the ID)
  // Initializes to 1, as the first item is open by default in the image
  openItemId = signal<number>(1); 

  // Dummy Data for Kidney Stone FAQs (based on the image content)
  faqs: FaqItem[] = [
    {
      id: 1,
      question: 'What Causes Kidney Stones?',
      answer: 'The basic cause of kidney stone occurrence is unknown, but wrong food habits and inadequate fluid intake are to be blamed. Other conditions such as urinary tract infection, gout, arthritis, hypercalciuria (increased calcium levels in urine), enlarged prostate, thyroid disorder, etc are also known to cause urinary stones.'
    },
    {
      id: 2,
      question: 'What Are The Symptoms Of Kidney Stones?',
      answer: 'Symptoms typically include severe pain (colic) in the side and back, below the ribs. This pain often radiates to the lower abdomen and groin. Other symptoms include nausea, vomiting, blood in urine, and frequent, painful urination.'
    },
    {
      id: 3,
      question: 'Who Have Greater Tendency Towards Kidney Stones?',
      answer: 'Individuals with a family history of stones, those who consume high protein and salt diets, and people with conditions like hyperparathyroidism or urinary tract infections are more prone to developing kidney stones.'
    },
    {
      id: 4,
      question: 'Why Do Stones Form?',
      answer: 'Stones form when your urine contains more crystal-forming substances (like calcium, oxalate, and uric acid) than the fluid in your urine can dilute. This often results from inadequate water intake, leading to highly concentrated urine.'
    },
  {
    id: 5,
    question: 'How Are Kidney Stones Diagnosed?',
    answer: 'Kidney stones are usually diagnosed using imaging tests like ultrasound, X-ray, or CT scans. Urine and blood tests can also help identify the type of stone and possible underlying causes.'
  },
  {
    id: 6,
    question: 'Can Kidney Stones Be Prevented?',
    answer: 'Yes. Staying well-hydrated, reducing salt and protein intake, and following a balanced diet with fruits and vegetables can reduce the risk. Your doctor may also prescribe medications if you are prone to recurrent stones.'
  },
  {
    id: 7,
    question: 'What Types of Kidney Stones Are There?',
    answer: 'The most common types are calcium stones (oxalate or phosphate), uric acid stones, struvite stones (often due to infections), and cystine stones (rare genetic condition). Each type may require a different approach to treatment and prevention.'
  },
  {
    id: 8,
    question: 'When Is Surgery Needed For Kidney Stones?',
    answer: 'Surgery is usually needed when stones are too large to pass naturally, cause severe pain, or block urine flow. Common procedures include lithotripsy (breaking stones with shock waves), ureteroscopy, and percutaneous nephrolithotomy.'
  },
  {
    id: 9,
    question: 'Are Kidney Stones Painful?',
    answer: 'Yes. Passing a kidney stone can cause excruciating pain, often described as one of the strongest types of pain. The pain typically starts in the back or side and can radiate to the lower abdomen and groin.'
  },
  {
    id: 10,
    question: 'How Long Does It Take To Pass A Kidney Stone?',
    answer: 'The time varies depending on stone size and location. Small stones may pass within a few days to a couple of weeks, while larger stones may require medical intervention to remove.'
  },
  {
    id: 11,
    question: 'Can Children Get Kidney Stones?',
    answer: 'Yes, although it is less common. Children with metabolic disorders, urinary tract abnormalities, or dehydration may develop kidney stones. Symptoms and treatment are similar to adults.'
  },
  {
    id: 12,
    question: 'Do Certain Foods Cause Kidney Stones?',
    answer: 'High-oxalate foods (like spinach and nuts), excessive salt, and very high protein intake can increase the risk. Staying hydrated and moderating these foods can help prevent stone formation.'
  },
  {
    id: 13,
    question: 'Is There Any Risk Of Kidney Damage?',
    answer: 'If stones block urine flow for a prolonged period, they can cause kidney infection or damage. Timely treatment usually prevents long-term complications.'
  },
  {
    id: 14,
    question: 'Can Kidney Stones Recur?',
    answer: 'Yes. People who have had kidney stones are at higher risk of recurrence. Following dietary advice, staying hydrated, and sometimes taking preventive medications can reduce the risk.'
  }
  ];

  toggleAnswer(itemId: number): void {
    // If the clicked item is already open, close it (set to 0 or null).
    // Otherwise, open the clicked item.
    this.openItemId.update(currentId => currentId === itemId ? 0 : itemId);
  }
}
