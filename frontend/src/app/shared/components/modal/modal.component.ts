import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UiIconComponent } from '../ui-icon/ui-icon.component';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [UiIconComponent],
  template: `
    @if (open) {
      <div class="backdrop" (click)="closed.emit()">
        <section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" (click)="$event.stopPropagation()">
          <header><h2 id="modal-title">{{ title }}</h2><button type="button" aria-label="Close dialog" (click)="closed.emit()"><app-ui-icon name="close" /></button></header>
          <ng-content />
        </section>
      </div>
    }
  `,
  styles: [`
    .backdrop { align-items: center; background: rgba(10,32,29,.52); display: flex; inset: 0; justify-content: center; padding: 1rem; position: fixed; z-index: 50; }
    .modal { background: #fff; border-radius: 20px; box-shadow: 0 24px 70px rgba(5,30,27,.25); max-height: min(720px, calc(100vh - 2rem)); max-width: 560px; overflow: auto; padding: 1.25rem; width: 100%; }
    header { align-items: center; display: flex; justify-content: space-between; margin-bottom: 1rem; }
    h2 { font-size: 1.2rem; margin: 0; }
    button { align-items: center; background: #eef4f2; border: 0; border-radius: 50%; color: #375b55; cursor: pointer; display: flex; height: 38px; justify-content: center; width: 38px; }
    @media (max-width: 640px) { .modal { border-radius: 18px 18px 0 0; bottom: 0; max-height: 88vh; padding: 1rem; position: fixed; top: auto; } }
  `]
})
export class ModalComponent {
  @Input() open = false;
  @Input() title = '';
  @Output() closed = new EventEmitter<void>();
}
