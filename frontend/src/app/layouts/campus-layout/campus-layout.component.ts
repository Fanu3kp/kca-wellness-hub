import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CampusService } from '../../core/services/campus.service';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { Campus } from '../../core/models/domain.model';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-campus-layout',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, UiIconComponent, BadgeComponent],
  templateUrl: './campus-layout.component.html',
  styleUrl: './campus-layout.component.scss'
})
export class CampusLayoutComponent implements OnInit {
  campus: Campus | null = null;
  currentPath = '';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    readonly campusService: CampusService
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.parent?.data?.['campusSlug'] ?? this.route.snapshot.data?.['campusSlug'];
    if (slug) {
      const campus = this.campusService.getCampusBySlug(slug as string);
      if (campus) {
        this.campusService.selectCampus(campus);
        this.campus = campus;
      }
    }
    this.currentPath = this.router.url;
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.currentPath = this.router.url;
    });
  }

  isActive(path: string): boolean {
    return this.currentPath.includes(path);
  }
}
