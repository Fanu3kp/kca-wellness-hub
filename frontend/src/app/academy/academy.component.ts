import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { TrainingModule } from '../core/models/domain.model';
import { WellnessService } from '../core/services/wellness.service';

@Component({
  selector: 'app-academy',
  standalone: true,
  imports: [CommonModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './academy.component.html',
  styleUrl: './academy.component.scss'
})
export class AcademyComponent implements OnInit {
  readonly trainingPhoto = 'assets/guidance/Peer counselors and their training.jpeg';
  modules: TrainingModule[] = [];
  loading = false;
  error = '';

  constructor(readonly wellnessService: WellnessService) {}

  ngOnInit(): void {
    this.loadModules();
  }

  loadModules(): void {
    this.loading = true;
    this.error = '';
    this.wellnessService.loadTrainingModules().subscribe({
      next: (modules) => {
        this.modules = modules;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Training modules are temporarily unavailable.';
      }
    });
  }

  iconFor(module: TrainingModule): string {
    return module.completed ? 'check' : 'arrow';
  }
}
