import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { MobileNavComponent } from '../../shared/components/mobile-nav/mobile-nav.component';

@Component({
  selector: 'app-student-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MobileNavComponent],
  template: `
    <app-header />
    <main class="student-main"><router-outlet /></main>
    <app-mobile-nav />
  `,
  styles: [`
    .student-main { min-height: calc(100vh - 72px); padding-bottom: 5rem; }
    @media (max-width: 640px) { .student-main { min-height: calc(100vh - 64px); padding-bottom: 6rem; } }
  `]
})
export class StudentLayoutComponent {}
