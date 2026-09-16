import { Component, Input, OnInit } from '@angular/core';
import { UiIconComponent } from '../ui-icon/ui-icon.component';
import { WellnessService } from '../../../core/services/wellness.service';
import { SOCIAL_PLATFORM_LABELS } from '../../../core/models/connect.model';

interface SocialLink {
  id: string;
  platform: string;
  label: string;
  url: string;
}

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [UiIconComponent],
  templateUrl: './social-links.component.html',
  styleUrl: './social-links.component.scss'
})
export class SocialLinksComponent implements OnInit {
  @Input() variant: 'list' | 'cards' = 'list';
  links: SocialLink[] = this.wellnessService.socialLinks;
  loading = false;

  constructor(private readonly wellnessService: WellnessService) {}

  ngOnInit(): void {
    this.loading = true;
    this.wellnessService.loadSocialLinks().subscribe({
      next: (links) => {
        this.links = links;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  platformLabel(platform: string): string {
    return SOCIAL_PLATFORM_LABELS[platform as keyof typeof SOCIAL_PLATFORM_LABELS] ?? platform;
  }
}
