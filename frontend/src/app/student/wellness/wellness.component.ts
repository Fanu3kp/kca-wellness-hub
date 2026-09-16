import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

interface Activity { icon: string; title: string; detail: string; tone: 'teal' | 'purple' | 'orange'; time?: string; }
interface MoodOption { value: string; label: string; emoji: string; tone: 'teal' | 'purple' | 'orange'; }

@Component({
  selector: 'app-wellness',
  standalone: true,
  imports: [FormsModule, RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './wellness.component.html',
  styleUrl: './wellness.component.scss'
})
export class WellnessComponent {
  breathing = false;
  breathingLabel = 'Start breathing';
  reflection = '';
  showMoodCheckIn = false;
  selectedMood: string = '';
  moods: MoodOption[] = [
    { value: 'calm', label: 'Calm', emoji: '😌', tone: 'teal' },
    { value: 'happy', label: 'Happy', emoji: '😊', tone: 'teal' },
    { value: 'tired', label: 'Tired', emoji: '😴', tone: 'purple' },
    { value: 'anxious', label: 'Anxious', emoji: '😟', tone: 'purple' },
    { value: 'frustrated', label: 'Frustrated', emoji: '😤', tone: 'orange' },
    { value: 'sad', label: 'Sad', emoji: '😢', tone: 'orange' }
  ];
  activities: Activity[] = [
    { icon: 'heart', title: 'Mood check-in', detail: 'Today · Calm', tone: 'teal', time: 'Today' },
    { icon: 'moon', title: 'Quiet Space', detail: 'Yesterday · 4 minutes', tone: 'purple', time: 'Yesterday' },
    { icon: 'book', title: 'Resource completed', detail: 'Academic pressure guide', tone: 'orange', time: '2 days ago' }
  ];
  moodFollowUp = '';

  constructor() {}

  toggleBreathing(): void {
    this.breathing = !this.breathing;
    this.breathingLabel = this.breathing ? 'Pause breathing' : 'Start breathing';
  }

  selectMood(value: string): void {
    this.selectedMood = value;
    const mood = this.moods.find((m) => m.value === value);
    const now = new Date();
    const timeStr = now.toLocaleDateString('en-KE', { hour: '2-digit', minute: '2-digit' });
    this.activities.unshift({ icon: 'heart', title: `Mood check-in · ${mood?.label ?? value}`, detail: `${timeStr} · ${mood?.emoji ?? ''}`, tone: mood?.tone ?? 'teal', time: 'Just now' });
    this.showMoodCheckIn = false;
    this.moodFollowUp = `Thank you. Your mood check-in — ${mood?.label ?? value} — has been recorded. Try a Quiet Space break if you need a moment.`;
  }

  dismissFollowUp(): void {
    this.moodFollowUp = '';
  }
}
