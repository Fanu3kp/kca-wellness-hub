import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CampusChallenge } from '../models/domain.model';
import { CampusService } from './campus.service';

@Injectable({ providedIn: 'root' })
export class ChallengeService {
  private readonly storageKey = 'kca_campus_challenges_v1';
  private readonly challengeData: CampusChallenge[] = [
    { id: 'challenge-breath', title: 'Seven-day breath reset', description: 'Pause for one quiet minute before your first class each day.', campusId: '1', participants: 28, daysLeft: 5, category: 'Mind', tone: 'calm' },
    { id: 'challenge-walk', title: 'Campus step circle', description: 'Take a 15-minute walk with a classmate and share one good moment.', campusId: '1', participants: 41, daysLeft: 3, category: 'Body', tone: 'peer' },
    { id: 'challenge-focus', title: 'Focus without multitasking', description: 'Protect one 45-minute study block and write down what helped.', campusId: '1', participants: 35, daysLeft: 6, category: 'Study', tone: 'professional' },
    { id: 'challenge-town-breath', title: 'Town campus calm break', description: 'Meet a peer for a short breathing reset between lectures.', campusId: '2', participants: 22, daysLeft: 4, category: 'Mind', tone: 'calm' },
    { id: 'challenge-town-connect', title: 'One kind message', description: 'Send one encouraging message to someone in your course community.', campusId: '2', participants: 31, daysLeft: 2, category: 'Connection', tone: 'peer' },
    { id: 'challenge-kitengela-walk', title: 'Kitengela wellbeing walk', description: 'Walk the campus path and notice three things that help you feel grounded.', campusId: '3', participants: 19, daysLeft: 5, category: 'Body', tone: 'calm' },
    { id: 'challenge-kitengela-study', title: 'Gentle study restart', description: 'Choose one small academic task and finish it before the day ends.', campusId: '3', participants: 26, daysLeft: 3, category: 'Study', tone: 'professional' }
  ];
  private readonly joinedSource = new BehaviorSubject<string[]>(this.loadJoined());
  private readonly challengesSource = new BehaviorSubject<CampusChallenge[]>(this.challengeData);
  readonly joinedIds$ = this.joinedSource.asObservable();
  readonly challenges$ = this.challengesSource.asObservable();
  readonly campusChallenges$ = combineLatest([this.challengesSource, this.campusService.selectedCampus$]).pipe(
    map(([challenges, campus]) => challenges.filter((challenge) => challenge.campusId === campus.id))
  );

  constructor(private readonly campusService: CampusService) {}

  get joinedIds(): string[] {
    return this.joinedSource.value;
  }

  isJoined(id: string): boolean {
    return this.joinedIds.includes(id);
  }

  participantCount(challenge: CampusChallenge): number {
    return challenge.participants + (this.isJoined(challenge.id) ? 1 : 0);
  }

  joinChallenge(id: string): void {
    if (this.isJoined(id)) return;
    this.joinedSource.next([...this.joinedIds, id]);
    this.persist();
  }

  leaveChallenge(id: string): void {
    this.joinedSource.next(this.joinedIds.filter((joinedId) => joinedId !== id));
    this.persist();
  }

  private loadJoined(): string[] {
    if (typeof window === 'undefined') return [];
    try {
      const stored = window.localStorage.getItem(this.storageKey);
      const parsed = stored ? JSON.parse(stored) : [];
      return Array.isArray(parsed) ? parsed.filter((id): id is string => typeof id === 'string') : [];
    } catch {
      return [];
    }
  }

  private persist(): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.joinedIds));
  }
}
