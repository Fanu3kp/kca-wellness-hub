import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { SocialLinksComponent } from '../social-links/social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, UiIconComponent, SocialLinksComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
}