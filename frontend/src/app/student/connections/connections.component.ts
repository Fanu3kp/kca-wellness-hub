import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../../core/services/connect.service';
import { Connect } from '../../core/models/connect.model';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';
import { AlertComponent } from '../../shared/components/alert/alert.component';
import { LoadingComponent } from '../../shared/components/loading/loading.component';

@Component({
  selector: 'app-connections',
  standalone: true,
  imports: [UiIconComponent, CardComponent, BadgeComponent, AlertComponent, LoadingComponent],
  templateUrl: './connections.component.html',
  styleUrl: './connections.component.scss'
})
export class ConnectionsComponent implements OnInit {
  incoming: Connect[] = [];
  loading = false;
  error = '';

  constructor(private readonly connectService: ConnectService) {}

  ngOnInit(): void {
    this.loadIncoming();
  }

  loadIncoming(): void {
    this.loading = true;
    this.error = '';
    this.connectService.getIncoming().subscribe({
      next: (requests) => {
        this.incoming = requests;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Connection requests could not be loaded.';
      }
    });
  }

  accept(id: number | string): void {
    this.connectService.acceptConnect(id).subscribe({
      next: () => { this.incoming = this.incoming.filter((request) => request.id !== id); },
      error: () => { this.error = 'The connection request could not be accepted.'; }
    });
  }

  reject(id: number | string): void {
    this.connectService.rejectConnect(id).subscribe({
      next: () => { this.incoming = this.incoming.filter((request) => request.id !== id); },
      error: () => { this.error = 'The connection request could not be rejected.'; }
    });
  }

  initials(name: string): string {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }

  trackByConnection(index: number, request: Connect): string {
    return String(request.id);
  }
}
