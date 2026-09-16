import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';

@Component({
  selector: 'app-urgent-help',
  standalone: true,
  imports: [RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './urgent-help.component.html',
  styleUrl: './urgent-help.component.scss'
})
export class UrgentHelpComponent {}
