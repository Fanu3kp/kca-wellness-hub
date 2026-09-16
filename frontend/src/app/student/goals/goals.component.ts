import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

interface PurposeItem {
  id: string;
  eyebrow: string;
  title: string;
  text: string;
  icon: string;
  tone: 'teal' | 'purple';
}

interface CounsellingArea {
  title: string;
  subtitle: string;
  icon: string;
  tone: 'teal' | 'purple';
  goals: string[];
}

@Component({
  selector: 'app-goals',
  standalone: true,
  imports: [RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.scss'
})
export class GoalsComponent {
  readonly purpose: PurposeItem[] = [
    { id: 'vision', eyebrow: 'VISION', title: 'A university where every student can thrive', text: 'We envision a KCA community where students feel safe, respected, supported and confident to seek help early.', icon: 'sparkles', tone: 'teal' },
    { id: 'mission', eyebrow: 'MISSION', title: 'Accessible support at every step', text: 'We provide approachable peer listening, professional guidance and counselling, practical education and clear referrals across all campuses.', icon: 'compass', tone: 'purple' }
  ];

  readonly counsellingAreas: CounsellingArea[] = [
    {
      title: 'Peer Counselling',
      subtitle: 'Student-to-student listening, encouragement and referral',
      icon: 'users',
      tone: 'teal',
      goals: [
        'Create safe, confidential and non-judgemental spaces for students to be heard.',
        'Promote early help-seeking and reduce stigma around mental health and wellbeing.',
        'Equip peer counsellors with listening, boundary and referral skills.',
        'Connect students with professional support when their needs require it.'
      ]
    },
    {
      title: 'Guidance & Counselling',
      subtitle: 'Professional, confidential care and care coordination',
      icon: 'heart',
      tone: 'purple',
      goals: [
        'Provide confidential professional counselling for emotional, academic and personal concerns.',
        'Support students with practical guidance, coping strategies and care coordination.',
        'Offer timely referrals and follow-up pathways to trusted internal and external services.',
        'Build a resilient, inclusive campus culture through awareness and prevention programmes.'
      ]
    }
  ];
}
