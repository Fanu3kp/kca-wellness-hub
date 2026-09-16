import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { CampusService } from '../../core/services/campus.service';
import { ChallengeService } from '../../core/services/challenge.service';
import { CampusChallenge } from '../../core/models/domain.model';
import { UiIconComponent } from '../../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../../shared/components/card/card.component';
import { BadgeComponent } from '../../shared/components/badge/badge.component';

@Component({
  selector: 'app-challenges',
  standalone: true,
  imports: [RouterLink, AsyncPipe, UiIconComponent, CardComponent, BadgeComponent],
  templateUrl: './challenges.component.html',
  styleUrl: './challenges.component.scss'
})
export class ChallengesComponent {
  readonly campus$ = this.campusService.selectedCampus$;
  readonly challenges$ = this.challengeService.campusChallenges$;
  readonly joinedIds$ = this.challengeService.joinedIds$;
  activeFilter: 'all' | 'joined' = 'all';

  constructor(
    readonly campusService: CampusService,
    readonly challengeService: ChallengeService
  ) {}

  filterChallenges(challenges: CampusChallenge[]): CampusChallenge[] {
    return this.activeFilter === 'joined' ? challenges.filter((challenge) => this.challengeService.isJoined(challenge.id)) : challenges;
  }

  joinOrLeave(challenge: CampusChallenge): void {
    this.challengeService.isJoined(challenge.id) ? this.challengeService.leaveChallenge(challenge.id) : this.challengeService.joinChallenge(challenge.id);
  }

  progress(challenge: CampusChallenge): number {
    return this.challengeService.isJoined(challenge.id) ? 68 : 0;
  }
}
