import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Treatment {
  title: string;
  details: string; // This is the content you requested
  icon: string;    
}

interface ExpertInfo {
  title: string;
  description: string;
  cta: string;
}

@Component({
  selector: 'app-tb-treatments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tb-treatments.component.html',
  styleUrls: ['./tb-treatments.component.scss'],
})
export class TbTreatmentsComponent {
  
  private iconBasePath = 'assets/icons/'; 

  treatments: Treatment[] = [
    {
      title: 'Abdominal TB',
      details: 'Tuberculosis of the gastrointestinal tract, peritoneum, or abdominal lymph nodes. Diagnosis requires sophisticated imaging and sometimes surgical intervention.',
      icon: this.iconBasePath + 'urology.webp', 
    },
    {
      title: 'Bone TB',
      details: 'Infection affecting the bones and joints, commonly the spine (Pott’s disease). Requires extended drug therapy and orthopaedic care to manage structural damage.',
      icon: this.iconBasePath + 'female-urology.webp',
    },
    {
      title: 'Brain TB (Meningitis)',
      details: 'A life-threatening form of tuberculosis affecting the brain and spinal cord lining. Immediate and aggressive treatment is crucial to prevent severe neurological sequelae.',
      icon: this.iconBasePath + 'laparoscopic.webp',
    },
    {
      title: 'Genito-Urinary TB',
      details: 'TB affecting the kidneys, bladder, ureters, or reproductive organs. Symptoms are often subtle, leading to late diagnosis and permanent organ damage if not treated promptly.',
      icon: this.iconBasePath + 'gastro.webp',
    },
    {
      title: 'Lymph Node TB (Scrofula)',
      details: 'The most common form of extra-pulmonary TB, characterized by painless swelling of lymph glands, usually in the neck. Treatment is primarily medicinal.',
      icon: this.iconBasePath + 'minimally-invasive.webp',
    },
    {
      title: 'Pleural TB',
      details: 'Infection causing inflammation and fluid accumulation (effusion) around the lungs. This condition often causes chest pain and shortness of breath, requiring fluid drainage and drug therapy.',
      icon: this.iconBasePath + 'nephrology.webp',
    },
    {
      title: 'Pulmonary TB',
      details: 'The primary and most infectious type, residing in the lungs. Our focus is on achieving rapid sputum conversion and completing the full course of therapy to ensure a permanent cure.',
      icon: this.iconBasePath + 'bariatric.webp',
    },
    {
      title: 'Skin TB (Lupus Vulgaris)',
      details: 'A chronic form of cutaneous tuberculosis that presents as red-brown patches or nodules. It is often a sign of prior infection and requires comprehensive systemic treatment.',
      icon: this.iconBasePath + 'robotic.webp',
    },
  ];

  expertSearchInfo: ExpertInfo = {
    title: 'Looking for an Expert',
    description:
      'TB consultation / Any TB information / Free Online Counselling. Book a slot with our specialists today.',
    cta: 'MAKE AN APPOINTMENT ->'
  };
}