import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BarChartSeries {
  label: string;
  value: number;
  color?: string;
}

@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="bar-chart" [style.--bar-height]="barHeight">
      <svg [attr.viewBox]="viewBox" width="100%" [attr.height]="height">
        <g class="bars">
          @for (item of series; track item.label) {
            <g class="bar-row">
              <rect
                [attr.x]="0"
                [attr.y]="barY($index)"
                [attr.width]="barWidth(item, maxValue)"
                [attr.height]="barHeight"
                [attr.fill]="item.color ?? defaultColor"
                rx="4"
              />
              <text
                class="bar-value"
                [attr.x]="valueX(item, maxValue)"
                [attr.y]="barY($index) + barHeight / 2 + 4"
                [attr.fill]="item.color ?? defaultColor"
              >{{ item.value }}</text>
            </g>
          }
        </g>
        <g class="labels">
          @for (item of series; track item.label) {
            <text
              class="bar-label"
              [attr.x]="0"
              [attr.y]="barY($index) + barHeight / 2 + 4"
            >{{ item.label }}</text>
          }
        </g>
      </svg>
      @if (legend) {
        <div class="chart-legend">
          @for (item of series; track item.label) {
            <span class="legend-item">
              <span class="legend-swatch" [style.background]="item.color ?? defaultColor"></span>
              {{ item.label }}
            </span>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .bar-chart { display: flex; flex-direction: column; gap: .75rem; }
    svg { width: 100%; height: auto; }
    .bars { overflow: visible; }
    .bar-row { display: flex; align-items: center; }
    .bar-value { font-size: .72rem; font-weight: 700; dominant-baseline: middle; }
    .bar-label { font-size: .68rem; font-weight: 600; fill: var(--muted); dominant-baseline: middle; }
    .chart-legend { display: flex; flex-wrap: wrap; gap: .75rem; }
    .legend-item { align-items: center; display: flex; font-size: .68rem; gap: .35rem; }
    .legend-swatch { border-radius: 4px; display: block; height: 10px; width: 10px; }
  `]
})
export class BarChartComponent implements OnChanges {
  @Input() series: BarChartSeries[] = [];
  @Input() height = 220;
  @Input() legend = false;
  @Input() defaultColor = '#1B2C57';

  private padding = 40;
  private gap = 12;

  get maxValue(): number {
    return Math.max(...this.series.map((s) => s.value), 0) || 1;
  }

  get viewBox(): string {
    const labelWidth = this.padding;
    const labelArea = labelWidth + 10;
    const barAreaHeight = this.series.length * this.barHeight + Math.max(0, (this.series.length - 1) * this.gap);
    const totalHeight = 32 + barAreaHeight + 16;
    const totalWidth = labelArea + Math.max(...this.series.map((s) => this.barWidth(s, this.maxValue))) + 60;
    return `0 0 ${Math.round(totalWidth)} ${Math.round(totalHeight)}`;
  }

  get barHeight(): number {
    return 18;
  }

  barY(index: number): number {
    return 16 + index * (this.barHeight + this.gap);
  }

  barWidth(item: BarChartSeries, maxVal: number): number {
    if (maxVal === 0) return 0;
    const ratio = item.value / maxVal;
    return Math.max(ratio * 300, 2);
  }

  valueX(item: BarChartSeries, maxVal: number): number {
    return this.barWidth(item, maxVal) + this.padding + 8;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['series']) {
      // recalculate
    }
  }
}
