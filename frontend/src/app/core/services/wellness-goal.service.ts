import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WellnessGoal } from '../models/domain.model';

@Injectable({ providedIn: 'root' })
export class WellnessGoalService {
  private readonly storageKey = 'kca_wellness_goals_v1';
  private readonly initialGoals: WellnessGoal[] = [
    { id: 'goal-breath', title: 'Pause for one quiet breath', category: 'Mind', targetDays: 7, completedDays: 2, streak: 2, completedDates: this.recentDates(2), createdAt: new Date().toISOString() },
    { id: 'goal-water', title: 'Drink water before each study block', category: 'Body', targetDays: 5, completedDays: 1, streak: 1, completedDates: this.recentDates(1), createdAt: new Date().toISOString() },
    { id: 'goal-connect', title: 'Check in with one classmate', category: 'Connection', targetDays: 4, completedDays: 0, streak: 0, completedDates: [], createdAt: new Date().toISOString() }
  ];
  private readonly goalsSource = new BehaviorSubject<WellnessGoal[]>(this.loadGoals());
  readonly goals$ = this.goalsSource.asObservable();

  get goals(): WellnessGoal[] {
    return this.goalsSource.value;
  }

  getSummary(goals: WellnessGoal[] = this.goals): { total: number; activeStreak: number; completedThisWeek: number; completionRate: number } {
    const completedThisWeek = goals.reduce((total, goal) => total + goal.completedDates.filter((date) => this.isRecent(date, 7)).length, 0);
    const targetTotal = goals.reduce((total, goal) => total + goal.targetDays, 0);
    const completedTotal = goals.reduce((total, goal) => total + goal.completedDays, 0);
    return {
      total: goals.length,
      activeStreak: Math.max(0, ...goals.map((goal) => goal.streak)),
      completedThisWeek,
      completionRate: targetTotal ? Math.min(100, Math.round((completedTotal / targetTotal) * 100)) : 0
    };
  }

  addGoal(title: string, category: WellnessGoal['category'], targetDays: number): void {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;
    const days = Math.max(1, Math.min(30, Math.round(targetDays || 7)));
    const goal: WellnessGoal = {
      id: `goal-${Date.now()}`,
      title: cleanTitle,
      category,
      targetDays: days,
      completedDays: 0,
      streak: 0,
      completedDates: [],
      createdAt: new Date().toISOString()
    };
    this.goalsSource.next([goal, ...this.goals]);
    this.persist();
  }

  completeGoal(id: string): void {
    const today = this.dateKey(new Date());
    this.goalsSource.next(this.goals.map((goal) => {
      if (goal.id !== id || goal.completedDates.includes(today)) return goal;
      const completedDates = [today, ...goal.completedDates];
      return { ...goal, completedDates, completedDays: goal.completedDays + 1, streak: this.calculateStreak(completedDates) };
    }));
    this.persist();
  }

  resetGoal(id: string): void {
    this.goalsSource.next(this.goals.map((goal) => goal.id === id ? { ...goal, completedDays: 0, streak: 0, completedDates: [] } : goal));
    this.persist();
  }

  removeGoal(id: string): void {
    this.goalsSource.next(this.goals.filter((goal) => goal.id !== id));
    this.persist();
  }

  private loadGoals(): WellnessGoal[] {
    if (typeof window === 'undefined') return [...this.initialGoals];
    try {
      const stored = window.localStorage.getItem(this.storageKey);
      if (!stored) return [...this.initialGoals];
      const parsed = JSON.parse(stored) as WellnessGoal[];
      return Array.isArray(parsed) && parsed.length ? parsed : [...this.initialGoals];
    } catch {
      return [...this.initialGoals];
    }
  }

  private persist(): void {
    if (typeof window === 'undefined') return;
    window.localStorage.setItem(this.storageKey, JSON.stringify(this.goals));
  }

  private calculateStreak(dates: string[]): number {
    const uniqueDates = Array.from(new Set(dates)).sort().reverse();
    let streak = 0;
    let cursor = new Date();
    cursor.setHours(0, 0, 0, 0);
    for (const date of uniqueDates) {
      const completed = new Date(`${date}T00:00:00`);
      const difference = Math.round((cursor.getTime() - completed.getTime()) / 86400000);
      if (difference === streak) streak += 1;
      else if (difference > streak) break;
    }
    return streak;
  }

  private recentDates(count: number): string[] {
    return Array.from({ length: count }, (_, index) => {
      const date = new Date();
      date.setDate(date.getDate() - index);
      return this.dateKey(date);
    });
  }

  private isRecent(date: string, days: number): boolean {
    const completed = new Date(`${date}T00:00:00`);
    const start = new Date();
    start.setDate(start.getDate() - days + 1);
    start.setHours(0, 0, 0, 0);
    completed.setHours(0, 0, 0, 0);
    return completed >= start;
  }

  private dateKey(date: Date): string {
    return date.toISOString().slice(0, 10);
  }
}
