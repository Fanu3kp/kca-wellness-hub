import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface PieSegment {
  label: string;
  value: number;
  color: string;
}

interface SegmentWithAngle extends PieSegment {
  startAngle: number;
  endAngle: number;
  midAngle: number;
}

@Component({
  selector: 'app-pie-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="pie-chart">
      <svg [attr.viewBox]="viewBox" width="100%" [attr.height]="displayHeight">
        <g class="slices">
          @for (seg of segmentsWithAngles; track seg.label) {
            @if (seg.value > 0) {
              <path
                [attr.d]="arcPath(seg)"
                [attr.fill]="seg.color"
              />
              <text
                class="segment-label"
                [attr.x]="labelX(seg)"
                [attr.y]="labelY(seg)"
              >{{ seg.label }}: {{ percentage(seg.value, totalValue) }}%</text>
            }
          }
        </g>
        <g class="pie-center" [attr.transform]="'translate(' + centerX + ',' + centerY + ')'">
          <text class="center-value">{{ totalValue }}</text>
          <text class="center-label">Total</text>
        </g>
      </svg>
      <div class="chart-legend">
        @for (seg of segments; track seg.label) {
          <span class="legend-item">
            <span class="legend-swatch" [style.background]="seg.color"></span>
            {{ seg.label }} ({{ percentage(seg.value, totalValue) }}%)
          </span>
        }
      </div>
    </div>
  `,
  styles: [`
    .pie-chart { display: flex; flex-direction: column; align-items: center; gap: 1rem; }
    svg { width: 100%; height: auto; }
    .slices path { stroke: #fff; stroke-width: 2; cursor: pointer; transition: opacity .15s ease, transform .15s ease; }
    .slices path:hover { opacity: .8; transform: scale(1.03); }
    .segment-label { font-size: .62rem; font-weight: 700; pointer-events: none; text-anchor: middle; dominant-baseline: middle; fill: #fff; paint-order: stroke; stroke: #fff; stroke-width: 3; }
    .pie-center text { text-anchor: middle; dominant-baseline: middle; }
    .center-value { font-size: 1.4rem; font-weight: 800; fill: var(--ink); }
    .center-label { font-size: .65rem; font-weight: 600; fill: var(--muted); }
    .chart-legend { display: flex; flex-wrap: wrap; gap: .75rem; justify-content: center; }
    .legend-item { align-items: center; display: flex; font-size: .68rem; gap: .35rem; }
    .legend-swatch { border-radius: 4px; display: block; height: 10px; width: 10px; }
  `]
})
export class PieChartComponent {
  @Input() segments: PieSegment[] = [];
  @Input() size = 180;
  @Input() innerRadius = 0;

  private computedAngles: SegmentWithAngle[] = [];
  private total = 0;

  get totalValue(): number {
    return this.segments.reduce((sum, s) => sum + s.value, 0) || 1;
  }

  get segmentsWithAngles(): SegmentWithAngle[] {
    this.recompute();
    return this.computedAngles;
  }

  private recompute(): void {
    this.total = this.totalValue;
    this.computedAngles = [];
    let cumulative = 0;
    for (const seg of this.segments) {
      if (seg.value <= 0) {
        this.computedAngles.push({ ...seg, startAngle: 0, endAngle: 0, midAngle: 0 });
        continue;
      }
      const startAngle = (cumulative / this.total) * 2 * Math.PI - Math.PI / 2;
      const endAngle = ((cumulative + seg.value) / this.total) * 2 * Math.PI - Math.PI / 2;
      const midAngle = (startAngle + endAngle) / 2;
      this.computedAngles.push({ ...seg, startAngle, endAngle, midAngle });
      cumulative += seg.value;
    }
  }

  get centerX(): number { return this.size / 2 + 20; }
  get centerY(): number { return this.size / 2 + 20; }
  get radiusValue(): number {
    if (this.innerRadius > 0) return this.size / 2 - this.innerRadius / 2;
    return this.size / 2 - 10;
  }
  get displayHeight(): number { return this.size + 40; }
  get viewBox(): string {
    const s = this.size + 40;
    return `0 0 ${s} ${s}`;
  }

  percentage(value: number, total: number): number {
    if (total === 0) return 0;
    return Math.round((value / total) * 100);
  }

  private polarToCartesian(cx: number, cy: number, r: number, angle: number): { x: number; y: number } {
    return { x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle) };
  }

  arcPath(seg: SegmentWithAngle): string {
    const cx = this.centerX;
    const cy = this.centerY;
    const r = this.radiusValue;
    const x1 = cx + r * Math.cos(seg.startAngle);
    const y1 = cy + r * Math.sin(seg.startAngle);
    const x2 = cx + r * Math.cos(seg.endAngle);
    const y2 = cy + r * Math.sin(seg.endAngle);
    const largeArc = seg.endAngle - seg.startAngle > Math.PI ? 1 : 0;

    if (this.innerRadius > 0) {
      const ir = r - this.innerRadius;
      const ix1 = cx + ir * Math.cos(seg.endAngle);
      const iy1 = cy + ir * Math.sin(seg.endAngle);
      const ix2 = cx + ir * Math.cos(seg.startAngle);
      const iy2 = cy + ir * Math.sin(seg.startAngle);
      return `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${ir} ${ir} 0 ${largeArc} 0 ${ix2} ${iy2} Z`;
    }

    return `M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} Z`;
  }

  labelX(seg: SegmentWithAngle): number {
    const cx = this.centerX;
    const cy = this.centerY;
    const distance = this.radiusValue + 12;
    return cx + distance * Math.cos(seg.midAngle);
  }

  labelY(seg: SegmentWithAngle): number {
    const cx = this.centerX;
    const cy = this.centerY;
    const distance = this.radiusValue + 12;
    return cy + distance * Math.sin(seg.midAngle);
  }
}
