import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { AsyncPipe,NgIf,NgFor } from '@angular/common';
import {SocialLinkService,SocialLinkPayload } from '../../core/services/social-link.service';
import {SocialLink,SocialPlatform,SOCIAL_PLATFORMS,SOCIAL_PLATFORM_LABELS } from '../../core/models/connect.model';
import {UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import {CardComponent } from '../../shared/components/card/card.component';
import {BadgeComponent } from '../../shared/components/badge/badge.component';
import {AlertComponent } from '../../shared/components/alert/alert.component';
import {ButtonComponent } from '../../shared/components/button/button.component';
import {LoadingComponent } from '../../shared/components/loading/loading.component';
import {ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-admin-social-links',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,RouterLink,AsyncPipe,NgIf,NgFor,UiIconComponent,CardComponent,BadgeComponent,AlertComponent,ButtonComponent,LoadingComponent,ModalComponent],
  templateUrl: './admin-social-links.component.html',
  styleUrl: './admin-social-links.component.scss'
})
export class AdminSocialLinksComponent implements OnInit {
  links: SocialLink[] = [];
  loading = false;
  error = '';
  submitting = false;
  showForm = false;
  editingId: number | string | null = null;
  platforms = SOCIAL_PLATFORMS;
  platformLabels = SOCIAL_PLATFORM_LABELS;

  form = this.fb.group({
    platform: ['facebook' as SocialPlatform, [Validators.required]],
    label: ['', [Validators.required,Validators.maxLength(80)]],
    url: ['', [Validators.required,Validators.pattern(/^https?:\/\//)]],
    sort_order: [0, [Validators.min(0)]],
    is_active: [true]
  });

  constructor(private readonly socialLinkService: SocialLinkService, private readonly fb:FormBuilder) {}

  ngOnInit(): void { this.loadLinks(); }

  get platformControl() { return this.form.get('platform'); }
  get labelControl() { return this.form.get('label'); }
  get urlControl() { return this.form.get('url'); }
  get sortOrderControl() { return this.form.get('sort_order'); }

  loadLinks(): void {
    this.loading = true;
    this.error = '';
    this.socialLinkService.getAll().subscribe({
      next: (links) => { this.links = links; this.loading = false; },
      error: () => { this.loading = false; this.error = 'Social links could not be loaded.'; }
    });
  }

  startCreate(): void {
    this.editingId = null;
    this.form.reset({ platform: 'facebook', label: '', url: '', sort_order: 0, is_active: true });
    this.showForm = true;
  }

  startEdit(link: SocialLink): void {
    this.editingId = link.id;
    this.form.setValue({
      platform: link.platform as SocialPlatform,
      label: link.label,
      url: link.url,
      sort_order: link.sort_order,
      is_active: link.is_active
    });
    this.showForm = true;
  }

  cancelForm(): void {
    this.showForm = false;
    this.editingId = null;
    this.form.reset({ platform: 'facebook', label: '', url: '', sort_order: 0, is_active: true });
  }

  saveLink(): void {
    if (this.form.invalid) return;
    this.submitting = true;
    this.error = '';
    const payload = this.form.value as SocialLinkPayload;

    const request = this.editingId
      ? this.socialLinkService.update(this.editingId, payload)
      : this.socialLinkService.create(payload);

    request.subscribe({
      next: (saved) => {
        if (this.editingId) {
          this.links = this.links.map((l) => (l.id === saved.id ? saved : l));
        } else {
          this.links = [saved, ...this.links];
        }
        this.submitting = false;
        this.cancelForm();
      },
      error: () => { this.submitting = false; this.error = 'Social link could not be saved.'; }
    });
  }

  toggleActive(link: SocialLink): void {
    this.socialLinkService.patch(link.id, { is_active: !link.is_active }).subscribe({
      next: (updated) => { link.is_active = updated.is_active; },
      error: () => { this.error = 'Could not update link status.'; }
    });
  }

  deleteLink(link: SocialLink): void {
    if (!confirm(`Delete "${link.label}"?`)) return;
    this.socialLinkService.delete(link.id).subscribe({
      next: () => { this.links = this.links.filter((l) => l.id !== link.id); },
      error: () => { this.error = 'Social link could not be deleted.'; }
    });
  }

  platformLabel(platform: string): string {
    return this.platformLabels[platform as SocialPlatform] ?? platform;
  }

  trackByLink(index: number, link: SocialLink): string {
    return String(link.id);
  }
}