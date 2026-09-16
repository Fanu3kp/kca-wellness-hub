import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `
    <button [type]="type" [class.button-primary]="variant === 'primary'" [class.button-secondary]="variant === 'secondary'" [class.button-quiet]="variant === 'quiet'" [class.button-danger]="variant === 'danger'" [class.button-block]="block" [disabled]="disabled" [attr.aria-label]="ariaLabel">
      <ng-content />
    </button>
  `,
  styles: [`
    button { border: 0; border-radius: 12px; cursor: pointer; display: inline-flex; align-items: center; justify-content: center; gap: .5rem; font: inherit; font-weight: 700; min-height: 44px; padding: .7rem 1rem; transition: transform .15s ease, box-shadow .15s ease, background .15s ease; }
    button:hover:not(:disabled) { transform: translateY(-1px); }
    button:disabled { cursor: not-allowed; opacity: .55; }
    .button-primary { background: #147d64; color: white; box-shadow: 0 6px 16px rgba(20,125,100,.18); }
    .button-secondary { background: #e8f5f1; color: #145c4d; }
    .button-quiet { background: transparent; color: #375b55; box-shadow: inset 0 0 0 1px #c9ddd8; }
    .button-danger { background: #fff0ed; color: #a33a2d; }
    .button-block { width: 100%; }
    @media (max-width: 640px) { button { width: 100%; min-height: 48px; } }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'quiet' | 'danger' = 'primary';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() block = false;
  @Input() disabled = false;
  @Input() ariaLabel = '';
}
