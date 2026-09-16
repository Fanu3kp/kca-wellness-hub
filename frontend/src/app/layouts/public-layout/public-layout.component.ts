import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { FooterComponent } from '../../shared/components/footer/footer.component';

@Component({
  selector: 'app-public-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <app-header />
    <main class="public-main"><router-outlet /></main>
    <app-footer />
  `,
  styles: [`
    .public-main { min-height: 55vh; }
  `]
})
export class PublicLayoutComponent {}
