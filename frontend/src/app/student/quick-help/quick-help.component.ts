import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { WellnessService } from '../../core/services/wellness.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-quick-help',
  standalone: true,
  imports: [RouterLink, FormsModule, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './quick-help.component.html',
  styleUrl: './quick-help.component.scss'
})
export class QuickHelpComponent {
  concerns = ['Stress', 'Anxiety/worry', 'Academic pressure', 'Relationships', 'Family issues', 'Financial challenges', 'Career guidance', 'Friendship/social issues', 'Sleep/wellbeing', 'General support', "I don't know what I need", 'Urgent help'];
  selectedConcern = '';
  unsureStep = 0;
  unsureAnswers: Record<number, string> = {};
  readonly unsureQuestions = [
    'What would feel most helpful in this moment?',
    'How much time and energy do you have right now?',
    'Would you prefer to talk, read, or take a quiet pause?'
  ];
  readonly unsureOptions: Record<number, string[]> = [
    ['Someone to listen', 'Professional support', 'A practical resource', 'A quiet pause'],
    ['I have a few minutes', 'I have some time today', 'I need something immediate'],
    ['Talk with someone', 'Read or watch', 'Do a calming activity']
  ];

  constructor(readonly wellnessService: WellnessService, private readonly router: Router) {}

  selectConcern(concern: string): void {
    this.selectedConcern = concern;
    this.unsureStep = 0;
  }

  get recommendations() {
    return this.wellnessService.recommend(this.selectedConcern);
  }

  answer(value: string): void {
    this.unsureAnswers[this.unsureStep] = value;
    if (this.unsureStep < this.unsureQuestions.length - 1) {
      this.unsureStep++;
    }
  }

  back(): void {
    if (this.unsureStep > 0) this.unsureStep--;
  }

  finish(): void {
    const answers = Object.values(this.unsureAnswers).join(' ').toLowerCase();
    let route = '/student/resources';
    if (answers.includes('immediate') || answers.includes('urgent') || answers.includes('danger')) { route = '/student/urgent-help'; }
    else if (answers.includes('professional')) { route = '/student/appointments'; }
    else if (answers.includes('listen') || answers.includes('talk')) { route = '/student/peer-counselors'; }
    else if (answers.includes('quiet') || answers.includes('calming')) { route = '/student/wellness'; }
    this.router.navigate([route]);
  }
}
