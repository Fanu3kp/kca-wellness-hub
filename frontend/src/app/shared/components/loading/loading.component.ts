import { Component } from '@angular/core';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [UiIconComponent],
  template: `<div class="loading" role="status"><span class="spinner"></span><span>{{ label }}</span></div>`,
  styles: [`
    .loading { align-items: center; color: #52635f; display: flex; gap: .6rem; justify-content: center; padding: 1rem; }
    .spinner { animation: spin .8s linear infinite; border: 3px solid #d7e9e4; border-radius: 50%; border-top-color: #147d64; height: 1.1rem; width: 1.1rem; }
    @keyframes spin { to { transform: rotate(360deg); } }
  `]
})
export class LoadingComponent {
  label = 'Loading';
}
