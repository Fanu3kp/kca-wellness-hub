import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../../../core/services/campus.service';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-campus-selector',
  standalone: true,
  imports: [AsyncPipe, UiIconComponent],
  templateUrl: './campus-selector.component.html',
  styleUrl: './campus-selector.component.scss'
})
export class CampusSelectorComponent {
  @Input() open = false;
  @Output() closed = new EventEmitter<void>();
  readonly campuses$ = this.campusService.loadCampuses();
  readonly selectedCampus$ = this.campusService.selectedCampus$;

  constructor(readonly campusService: CampusService) {}

  select(id: string): void {
    const campus = this.campusService.getCampus(id);
    if (campus) {
      this.campusService.selectCampus(campus);
    }
    this.closed.emit();
  }
}
