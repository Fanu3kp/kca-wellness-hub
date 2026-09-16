import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../core/services/campus.service';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';

@Component({
  selector: 'app-campus-selection',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './campus-selection.component.html',
  styleUrl: './campus-selection.component.scss'
})
export class CampusSelectionComponent {
  readonly campuses = this.campusService.getCampuses();
  readonly selectedCampus$ = this.campusService.selectedCampus$;

  constructor(readonly campusService: CampusService) {}

  select(id: string): void {
    const campus = this.campusService.getCampus(id);
    if (campus) this.campusService.selectCampus(campus);
  }
}
