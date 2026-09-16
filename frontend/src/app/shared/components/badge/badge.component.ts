import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge',
  standalone: true,
  template: `<span [class]="'badge badge-' + tone"><ng-content /></span>`,
  styles: [`
    .badge { align-items: center; border-radius: 999px; display: inline-flex; font-size: .72rem; font-weight: 800; gap: .3rem; letter-spacing: .01em; line-height: 1; padding: .42rem .62rem; text-transform: uppercase; white-space: nowrap; }
    .badge-calm { background: #e9f7f2; color: #146b58; }
    .badge-peer { background: #f0edfb; color: #6748a8; }
    .badge-professional { background: #e8f1ff; color: #315c9d; }
    .badge-urgent { background: #fff0ed; color: #a33a2d; }
    .badge-neutral { background: #eef2f1; color: #52635f; }
  `]
})
export class BadgeComponent {
  @Input() tone: 'calm' | 'peer' | 'professional' | 'urgent' | 'neutral' = 'neutral';
}
