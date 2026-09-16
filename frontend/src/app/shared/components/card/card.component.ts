import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  template: `
    <article [class.card-hover]="hoverable" [class.compact]="compact">
      <ng-content />
    </article>
  `,
  styles: [`
    article { background: #fff; border: 1px solid #dfeae7; border-radius: 18px; box-shadow: 0 8px 24px rgba(25,75,67,.06); padding: 1.25rem; }
    article.card-hover { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
    article.card-hover:hover { transform: translateY(-2px); border-color: #a8d5ca; box-shadow: 0 12px 28px rgba(25,75,67,.1); }
    article.compact { padding: 1rem; }
    @media (max-width: 640px) { article { border-radius: 15px; padding: 1rem; } }
  `]
})
export class CardComponent {
  @Input() hoverable = false;
  @Input() compact = false;
}
