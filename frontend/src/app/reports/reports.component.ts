import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { ButtonComponent } from '../shared/components/button/button.component';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [RouterLink, UiIconComponent, CardComponent, ButtonComponent],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

}