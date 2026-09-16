import { Component, Input } from '@angular/core';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-alert',
  standalone: true,
  imports: [UiIconComponent],
  template: `<div [class]="'alert alert-' + tone" role="status"><app-ui-icon [name]="icon" /><div><strong>{{ title }}</strong><p>{{ message }}</p></div></div>`,
  styles: [`
    .alert { align-items: flex-start; border-radius: 14px; display: flex; gap: .75rem; padding: .9rem 1rem; }
    .alert svg { margin-top: .1rem; }
    .alert p { font-size: .9rem; line-height: 1.45; margin: .2rem 0 0; }
    .alert-calm { background: #eaf7f2; color: #145c4d; }
    .alert-professional { background: #eaf1fb; color: #315583; }
    .alert-urgent { background: #fff0ed; color: #96362b; }
  `]
})
export class AlertComponent {
  @Input() tone: 'calm' | 'professional' | 'urgent' = 'calm';
  @Input() title = '';
  @Input() message = '';
  @Input() icon = 'heart';
}
