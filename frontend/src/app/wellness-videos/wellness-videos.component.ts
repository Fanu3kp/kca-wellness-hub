import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';

interface WellnessVideo {
  id: string;
  title: string;
  description: string;
  duration: string;
  category: string;
  tone: 'teal' | 'purple' | 'orange' | 'neutral';
}

@Component({
  selector: 'app-wellness-videos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './wellness-videos.component.html',
  styleUrl: './wellness-videos.component.scss'
})
export class WellnessVideosComponent {
  videos: WellnessVideo[] = [
    { id: 'wv1', title: 'Managing Academic Pressure', description: '5 strategies for a balanced study life', duration: '3:45', category: 'Academic wellbeing', tone: 'teal' },
    { id: 'wv2', title: 'Breathing for Calm', description: 'A 2-minute guided breathing exercise', duration: '2:10', category: 'Mental wellness', tone: 'purple' },
    { id: 'wv3', title: 'Building Friendships', description: 'Practical tips for meaningful connections', duration: '4:20', category: 'Relationships', tone: 'orange' },
    { id: 'wv4', title: 'Sleep Hygiene Basics', description: 'Simple routines for better rest', duration: '3:15', category: 'Sleep', tone: 'teal' },
    { id: 'wv5', title: 'Career After KCA', description: 'Exploring your next steps with confidence', duration: '5:00', category: 'Career', tone: 'orange' },
    { id: 'wv6', title: 'When to Seek Help', description: 'Knowing when to talk to someone professional', duration: '2:50', category: 'Mental wellness', tone: 'purple' }
  ];

  categories = ['All', 'Mental wellness', 'Academic wellbeing', 'Stress management', 'Relationships', 'Career', 'Sleep'];
  selectedCategory = 'All';
}
