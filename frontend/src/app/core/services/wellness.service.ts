import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { Appointment, AppointmentOption, EventItem, SupportPathway, TrainingModule, WellnessResource } from '../models/domain.model';
import { ApiService } from './api.service';

interface ApiCollection<T> {
  data: T[] | { data: T[] };
}

interface ApiWellnessResource {
  id: number | string;
  title: string;
  category?: string | null;
  summary?: string | null;
  body?: string | null;
  url?: string | null;
  campus?: { id: number | string; name: string; code: string } | null;
  published_at?: string | null;
}

interface ApiEvent {
  id: number | string;
  title: string;
  description?: string | null;
  starts_at: string;
  ends_at: string;
  location?: string | null;
  external_url?: string | null;
  campus?: { id: number | string; name: string; code: string } | null;
}

interface ApiTrainingModule {
  id: number | string;
  title: string;
  description?: string | null;
  duration_minutes?: number | null;
  level?: string | null;
  content_url?: string | null;
}

interface ApiBookingProvider {
  id: number | string;
  name: string;
  mode: 'main' | 'virtual';
  external_booking_url: string;
  photo_url?: string | null;
  campus?: { id: number | string; name: string; code: string } | null;
}

interface ApiPeerCounselor {
  id: number | string;
  name: string;
  email: string;
  campus?: { id: number | string; name: string; code: string } | null;
  profile?: { campus_id?: number | string } | null;
}

interface ApiSocialLink {
  id: number | string;
  platform: string;
  label: string;
  url: string;
}

@Injectable({ providedIn: 'root' })
export class WellnessService {
  readonly pathways: SupportPathway[] = [
    { id: 'peer', label: 'Talk to a peer counselor', description: 'Student-to-student listening, encouragement and referral.', icon: 'users', route: '/student/peer-counselors', tone: 'peer' },
    { id: 'professional', label: 'Professional counselling', description: 'Private support from trained Guidance & Counselling staff.', icon: 'heart', route: '/student/appointments', tone: 'professional' },
    { id: 'resource', label: 'Explore a wellness resource', description: 'Short, practical guides you can use at your own pace.', icon: 'book', route: '/student/resources', tone: 'calm' },
    { id: 'quiet', label: 'Take a quiet space break', description: 'A guided breathing or grounding activity.', icon: 'sparkles', route: '/wellness-videos', tone: 'calm' },
    { id: 'urgent', label: 'Urgent help', description: 'Find immediate support contacts and next steps.', icon: 'alert', route: '/student/urgent-help', tone: 'urgent' }
  ];

  readonly talkToSomeonePathways: SupportPathway[] = [
    { id: 'available-peer', label: 'Available Peer Counselor', description: 'Start with a trained student listener who is available now.', icon: 'users', route: '/student/peer-counselors', queryParams: { available: true }, tone: 'peer' },
    { id: 'professional-counselling', label: 'Professional Counselling', description: 'Continue to confidential support from Guidance & Counselling staff.', icon: 'heart', route: '/student/appointments', tone: 'professional' },
    { id: 'wellness-resources', label: 'Wellness Resources', description: 'Use practical guides and activities at your own pace.', icon: 'book', route: '/student/resources', tone: 'calm' },
    { id: 'virtual-support', label: 'Virtual Support', description: 'Connect to approved online support from anywhere.', icon: 'video', route: '/virtual-support', tone: 'calm' },
    { id: 'urgent-help', label: 'Urgent Help', description: 'If safety or immediate support is needed, use urgent help now.', icon: 'alert', route: '/student/urgent-help', tone: 'urgent' }
  ];

  readonly resources: WellnessResource[] = [
    { id: 'r1', title: 'Managing academic pressure', category: 'Academic wellbeing', summary: 'Small steps for planning, focus and asking for help.', duration: '5 min read', format: 'article' },
    { id: 'r2', title: 'A calm breathing reset', category: 'Stress management', summary: 'A short guided practice for a busy day.', duration: '3 min audio', format: 'audio' },
    { id: 'r3', title: 'Building supportive friendships', category: 'Relationships', summary: 'Practical ways to communicate and set boundaries.', duration: '6 min read', format: 'article' },
    { id: 'r4', title: 'Sleep and student wellbeing', category: 'Sleep', summary: 'Simple routines to support rest and recovery.', duration: '4 min read', format: 'article' },
    { id: 'r5', title: 'Career clarity check-in', category: 'Career', summary: 'Questions to help you explore your next step.', duration: '5 min activity', format: 'article' },
    { id: 'r6', title: 'Understanding peer counselling', category: 'Peer counselling', summary: 'What peer support is, and when to seek professional help.', duration: '4 min read', format: 'article' }
  ];

  readonly appointmentOptions: AppointmentOption[] = [
    { id: 'belinda', counsellor: 'Belinda', campus: 'Main Campus or Virtual', modes: ['Physical', 'Virtual'], availability: 'Mon–Fri, 09:00–16:00 EAT', bookingUrl: 'https://example.com/kca-wellness/belinda', photoUrl: 'assets/guidance-counselling/Belinda.jpeg' },
    { id: 'emily', counsellor: 'Emily', campus: 'Main Campus or Virtual', modes: ['Physical', 'Virtual'], availability: 'Mon–Fri, 09:00–16:00 EAT', bookingUrl: 'https://example.com/kca-wellness/emily', photoUrl: 'assets/guidance-counselling/Emily.jpeg' },
    { id: 'tasha', counsellor: 'Tasha', campus: 'Town Campus or Virtual', modes: ['Physical', 'Virtual'], availability: 'Mon–Fri, 09:00–16:00 EAT', bookingUrl: 'https://example.com/kca-wellness/tasha', photoUrl: 'assets/guidance-counselling/Tasha.jpeg' }
  ];

  readonly trainingModules: TrainingModule[] = [
    { id: 'm1', title: 'Introduction to Peer Counselling', description: 'Foundations of peer support: listening, boundaries, and referral.', duration: '20 min', completed: false },
    { id: 'm2', title: 'Communication Skills', description: 'Effective verbal and non-verbal communication for supportive conversations.', duration: '25 min', completed: false },
    { id: 'm3', title: 'Active Listening', description: 'Deep listening techniques that validate and support without diagnosing.', duration: '30 min', completed: true },
    { id: 'm4', title: 'Ethics & Confidentiality', description: 'Privacy, ethical boundaries, and when confidentiality has limits.', duration: '25 min', completed: true },
    { id: 'm5', title: 'Referral & Escalation', description: 'How and when to refer students to professional support.', duration: '20 min', completed: false },
    { id: 'm6', title: 'Crisis Response', description: 'Recognizing and responding to crisis situations safely.', duration: '35 min', completed: false },
    { id: 'm7', title: 'Professional Boundaries', description: 'Maintaining appropriate boundaries in peer support relationships.', duration: '25 min', completed: false },
    { id: 'm8', title: 'Student Wellness', description: 'Understanding student wellbeing challenges and protective factors.', duration: '30 min', completed: false }
  ];
  readonly socialLinks: Array<{ id: string; platform: string; label: string; url: string }> = [
    { id: 'facebook', platform: 'facebook', label: 'Facebook', url: 'https://www.facebook.com/kcawellnesshub' },
    { id: 'instagram', platform: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/kca.wellness.hub' },
    { id: 'tiktok', platform: 'tiktok', label: 'TikTok', url: 'https://www.tiktok.com/@kcawellnesshub' },
    { id: 'linkedin', platform: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/company/kca-wellness-hub' },
    { id: 'x', platform: 'x', label: 'X', url: 'https://x.com/kcawellnesshub' },
    { id: 'youtube', platform: 'youtube', label: 'YouTube', url: 'https://www.youtube.com/@kcawellnesshub' },
    { id: 'whatsapp', platform: 'whatsapp', label: 'WhatsApp', url: 'https://wa.me/254700000000' }
  ];

  private readonly counsellorPhotos: Record<string, string> = {
    belinda: 'assets/guidance-counselling/Belinda.jpeg',
    emily: 'assets/guidance-counselling/Emily.jpeg',
    tasha: 'assets/guidance-counselling/Tasha.jpeg'
  };

  constructor(private readonly api: ApiService) {}

  loadResources(campusId?: string): Observable<WellnessResource[]> {
    return this.api.get<ApiCollection<ApiWellnessResource>>('/wellness-resources', { campus_id: campusId }).pipe(
      map((response) => this.itemsFrom(response).map((item) => this.fromResource(item))),
      catchError(() => of(this.resources))
    );
  }

  loadEvents(campusId?: string): Observable<EventItem[]> {
    return this.api.get<ApiCollection<ApiEvent>>('/events', { campus_id: campusId }).pipe(
      map((response) => this.itemsFrom(response).map((item) => this.fromEvent(item))),
      catchError(() => of([]))
    );
  }

  private itemsFrom<T>(response: { data: T[] | { data: T[] } }): T[] {
    return Array.isArray(response.data) ? response.data : response.data.data;
  }

  loadAppointmentOptions(): Observable<AppointmentOption[]> {
    return this.api.get<ApiCollection<ApiBookingProvider>>('/booking-providers').pipe(
      map((response) => this.itemsFrom(response).map((item) => this.fromProvider(item))),
      catchError(() => of(this.appointmentOptions))
    );
  }

  loadPeerCounselors(campusId?: string): Observable<AppointmentOption[]> {
    return this.api.get<ApiCollection<ApiPeerCounselor>>('/peer-counselors', { campus_id: campusId }).pipe(
      map((response) => this.itemsFrom(response).map((item) => this.fromPeerCounselor(item))),
      catchError(() => of([]))
    );
  }

  bookAppointment(payload: {
    bookingProviderId?: string;
    peerCounselorId?: string;
    campusId?: string;
    mode?: 'physical' | 'virtual';
    startsAt: string;
    endsAt: string;
    notes?: string;
  }): Observable<Appointment> {
    const body: Record<string, unknown> = {
      starts_at: payload.startsAt,
      ends_at: payload.endsAt,
      mode: payload.mode ?? 'physical',
      notes: payload.notes ?? null,
    };
    if (payload.bookingProviderId) {
      body['booking_provider_id'] = payload.bookingProviderId;
    }
    if (payload.peerCounselorId) {
      body['peer_counselor_id'] = payload.peerCounselorId;
    }
    if (payload.campusId) {
      body['campus_id'] = payload.campusId;
    }
    return this.api.post<Appointment>('/appointments', body);
  }

  loadTrainingModules(): Observable<TrainingModule[]> {
    return this.api.get<ApiCollection<ApiTrainingModule>>('/training-modules').pipe(
      map((response) => this.itemsFrom(response).map((item) => this.fromTrainingModule(item))),
      catchError(() => of(this.trainingModules))
    );
  }

  loadSocialLinks(): Observable<Array<{ id: string; platform: string; label: string; url: string }>> {
    return this.api.get<ApiCollection<ApiSocialLink>>('/social-links').pipe(
      map((response) => {
        const links = new Map(this.socialLinks.map((link) => [link.platform, link]));
        this.itemsFrom(response).forEach((item) => {
          links.set(item.platform, {
            id: String(item.id),
            platform: item.platform,
            label: item.label,
            url: item.url
          });
        });
        return Array.from(links.values());
      }),
      catchError(() => of(this.socialLinks))
    );
  }

  recommend(concern: string): SupportPathway[] {
    const value = concern.toLowerCase();
    const normalized = value.replace(/[.!?]+$/, '').trim();
    if (normalized === 'i need someone to talk to') {
      return this.talkToSomeonePathways;
    }
    if (value.includes('urgent') || value.includes('crisis') || value.includes('unsafe')) {
      return [this.pathways[4], this.pathways[1], this.pathways[0]];
    }
    if (value.includes('career')) {
      return [this.pathways[2], this.pathways[1], this.pathways[0]];
    }
    if (value.includes('sleep') || value.includes('stress') || value.includes('anxiety') || value.includes('academic')) {
      return [this.pathways[3], this.pathways[2], this.pathways[1]];
    }
    return [this.pathways[0], this.pathways[2], this.pathways[1]];
  }

  getResources(category = 'All', campusId?: string): Observable<WellnessResource[]> {
    return this.loadResources(campusId).pipe(
      map((items) => category === 'All' ? items : items.filter((resource) => resource.category === category))
    );
  }

  private fromResource(item: ApiWellnessResource): WellnessResource {
    const url = item.url ?? '';
    return {
      id: String(item.id),
      title: item.title,
      category: item.category ?? 'Wellness',
      summary: item.summary ?? item.body ?? '',
      duration: '5 min read',
      format: url.includes('.mp4') || url.includes('video') ? 'video' : url.includes('.mp3') || url.includes('audio') ? 'audio' : 'article',
      campusId: item.campus ? String(item.campus.id) : undefined
    };
  }

  private fromEvent(item: ApiEvent): EventItem {
    const starts = new Date(item.starts_at);
    const ends = new Date(item.ends_at);
    const now = new Date();
    const tone = item.campus?.code?.toLowerCase() === 'town' ? 'purple' : item.campus?.code?.toLowerCase() === 'kitengela' ? 'orange' : 'teal';
    return {
      id: String(item.id),
      title: item.title,
      campus: item.campus?.name ?? item.location ?? 'KCA University',
      campusId: item.campus ? String(item.campus.id) : undefined,
      time: `${starts.toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' })}–${ends.toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' })}`,
      day: starts.toLocaleDateString('en-KE', { day: '2-digit' }),
      month: starts.toLocaleDateString('en-KE', { month: 'short' }).toUpperCase(),
      type: starts < now ? 'Past' as const : 'Upcoming' as const,
      tone: starts < now ? 'neutral' as const : tone,
      mode: item.external_url ? 'virtual' : 'physical',
      externalUrl: item.external_url ?? undefined
    };
  }

  private fromProvider(item: ApiBookingProvider): AppointmentOption {
    return {
      id: String(item.id),
      counsellor: item.name,
      campus: `${item.campus?.name ?? 'KCA University'} ${item.mode === 'virtual' ? 'or Virtual' : ''}`,
      modes: [item.mode === 'virtual' ? 'Virtual' : 'Physical'],
      availability: 'Mon–Fri, 09:00–16:00 EAT',
      bookingUrl: item.external_booking_url,
      photoUrl: item.photo_url ?? this.photoFor(item.name)
    };
  }

  private fromPeerCounselor(item: ApiPeerCounselor): AppointmentOption {
    const campusName = item.campus?.name ?? item.profile?.campus_id ? 'Campus peer counselor' : 'KCA University';
    return {
      id: String(item.id),
      counsellor: `Peer ${item.name}`,
      campus: campusName,
      modes: ['Physical', 'Virtual'],
      availability: 'Mon–Fri, 09:00–16:00 EAT',
      bookingUrl: '',
      photoUrl: undefined,
      isPeerCounselor: true,
      peerCounselorId: String(item.id)
    };
  }

  private photoFor(name: string): string | undefined {
    return this.counsellorPhotos[name.toLowerCase().split(/\s+/)[0]];
  }

  private fromTrainingModule(item: ApiTrainingModule): TrainingModule {
    return {
      id: String(item.id),
      title: item.title,
      description: item.description ?? '',
      duration: item.duration_minutes ? `${item.duration_minutes} min` : '—',
      completed: false
    };
  }
}
