import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface LineChartPoint {
  label: string;
  value: number;
}

export interface LineChartSeries {
  name: string;
  data: LineChartPoint[];
  color: string;
}

@Component({
  selector: 'app-line-chart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="line-chart">
      <svg [attr.viewBox]="viewBox" width="100%" [attr.height]="height">
        <g class="grid-lines">
          @for (g of gridLines; track g.value) {
            <line
              [attr.x1]="marginLeft"
              [attr.y1]="yFor(g.value)"
              [attr.x2]="width - marginRight"
              [attr.y2]="yFor(g.value)"
            />
            <text class="grid-label" [attr.x]="marginLeft - 8" [attr.y]="yFor(g.value) + 4">{{ g.label }}</text>
          }
        </g>
        @for (series of chartSeries; track series.name) {
          <polyline
            class="line"
            [attr.fill]="series.color"
            [attr.stroke]="series.color"
            [attr.points]="pointsFor(series.data)"
          />
        }
        <g class="x-labels">
          @for (point of allLabels; track point) {
            <text
              class="axis-label"
              [attr.x]="xFor(point.index)"
              [attr.y]="height - marginRight + 18"
            >{{ point.label }}</text>
          }
        </g>
      </svg>
      <div class="chart-legend">
        @for (series of chartSeries; track series.name) {
          <span class="legend-item">
            <span class="legend-swatch" [style.background]="series.color"></span>
            {{ series.name }}
          </span>
        }
      </div>
    </div>
  `,
  styles: [`
    .line-chart { display: flex; flex-direction: column; gap: .75rem; }
    svg { width: 100%; height: auto; }
    .grid-lines line { stroke: #e0ddd0; stroke-width: 1; }
    .grid-label { font-size: .64rem; fill: var(--muted); text-anchor: end; }
    .axis-label { font-size: .64rem; fill: var(--muted); text-anchor: middle; }
    .line { fill: none; fill-opacity: .1; stroke-width: 3; stroke-linejoin: round; stroke-linecap: round; }
    polyline { transition: stroke .2s ease; }
    .chart-legend { display: flex; flex-wrap: wrap; gap: .75rem; }
    .legend-item { align-items: center; display: flex; font-size: .68rem; gap: .35rem; }
    .legend-swatch { border-radius: 4px; display: block; height: 10px; width: 10px; }
  `]
})
export class LineChartComponent {
  @Input() series: LineChartSeries[] = [];
  @Input() height = 200;
  @Input() gridLinesCount = 4;

  readonly marginLeft = 50;
  readonly marginRight = 30;

  get chartSeries(): LineChartSeries[] {
    return this.series.filter((s) => s.data.length > 0);
  }

  get allLabels(): { label: string; index: number }[] {
    const first = this.chartSeries[0];
    if (!first) return [];
    return first.data.map((point, index) => ({ label: point.label, index }));
  }

  get width(): number {
    return 600;
  }

  get viewBox(): string {
    const h = this.height + 40;
    return `0 0 ${this.width} ${h}`;
  }

  get maxValue(): number {
    const all = this.chartSeries.flatMap((s) => s.data.map((d) => d.value));
    return Math.max(...all, 0) || 1;
  }

  get minValue(): number {
    const all = this.chartSeries.flatMap((s) => s.data.map((d) => d.value));
    return Math.min(...all, 0);
  }

  get gridLines(): { label: string; value: number }[] {
    const min = this.minValue;
    const max = this.maxValue;
    const range = max - min || 1;
    const result: { label: string; value: number }[] = [];
    for (let i = 0; i <= this.gridLinesCount; i++) {
      const val = min + (range * i) / this.gridLinesCount;
      result.push({ label: Math.round(val).toString(), value: val });
    }
    return result;
  }

  yFor(value: number): number {
    const min = this.minValue;
    const max = this.maxValue;
    const range = max - min || 1;
    const ratio = (value - min) / range;
    return this.height - this.marginRight - ratio * (this.height - this.marginLeft - this.marginRight);
  }

  xFor(index: number): number {
    const points = this.allLabels.length;
    if (points <= 1) return this.marginLeft;
    const step = (this.width - this.marginLeft - this.marginRight) / (points - 1);
    return this.marginLeft + index * step;
  }

  pointsFor(data: LineChartPoint[]): string {
    return data
      .map((point, index) => `${this.xFor(index)},${this.yFor(point.value)}`)
      .join(' ');
  }
}
