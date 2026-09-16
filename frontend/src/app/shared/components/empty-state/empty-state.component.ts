import { Component, Input } from '@angular/core';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [UiIconComponent],
  template: `<div class="empty"><app-ui-icon [name]="icon" /><h3>{{ title }}</h3><p>{{ message }}</p><ng-content /></div>`,
  styles: [`
    .empty { align-items: center; background: #f5faf8; border: 1px dashed #c9ddd8; border-radius: 16px; color: #52635f; display: flex; flex-direction: column; justify-content: center; min-height: 190px; padding: 1.5rem; text-align: center; }
    .empty svg { color: #147d64; height: 2rem; margin-bottom: .7rem; width: 2rem; }
    h3 { color: #294d46; margin: 0 0 .35rem; }
    p { line-height: 1.5; margin: 0; }
  `]
})
export class EmptyStateComponent {
  @Input() icon = 'sparkles';
  @Input() title = 'Nothing here yet';
  @Input() message = 'Check back soon for new updates.';
}
