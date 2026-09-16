export type UserRole = 'student' | 'peer_counselor' | 'guidance_staff' | 'admin';

export interface Campus {
  id: string;
  slug: 'ruaraka-main' | 'town' | 'kitengela';
  name: string;
  shortName: string;
  location: string;
  description: string;
  phone: string;
  email: string;
  timezone: string;
  physicalSupport: boolean;
  virtualSupport: boolean;
  accent: string;
}

export interface EventItem {
  id: string;
  title: string;
  campus: string;
  campusId?: string;
  time: string;
  day: string;
  month: string;
  type: 'Upcoming' | 'Past';
  tone: 'teal' | 'purple' | 'orange' | 'neutral';
  mode: 'physical' | 'virtual';
  externalUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
  campusId: string;
  avatar?: string;
  title?: string;
  trained?: boolean;
  availability?: 'available' | 'busy' | 'offline';
  isActive?: boolean;
}

export type SupportCategory = 'academic-pressure' | 'relationship' | 'adjustment' | 'friendship' | 'general-wellbeing' | 'motivation' | 'stress' | 'sleep' | 'career' | 'urgent';

export interface SupportRequest {
  id: string;
  requesterId: string;
  campusId: string;
  category: SupportCategory;
  subject: string;
  details: string;
  status: 'pending' | 'assigned' | 'in_progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high';
  assignedTo?: string;
  createdAt: string;
}

export interface CaseNote {
  id: string;
  supportRequestId: string;
  authorId: string;
  authorName: string;
  content: string;
  type: 'peer' | 'professional' | 'supervision';
  createdAt: string;
}

export interface Escalation {
  id: string;
  supportRequestId: string;
  escalatedById: string;
  assignedToId?: string;
  reason: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  status: 'open' | 'in_progress' | 'resolved' | 'closed';
  notes?: string;
  createdAt: string;
}

export interface Referral {
  id: string;
  supportRequestId: string;
  fromUserId: string;
  toUserId: string;
  reason: string;
  notes?: string;
  status: 'pending' | 'accepted' | 'declined' | 'completed';
  createdAt: string;
}

export interface ActiveListeningSession {
  id: string;
  counselorId: string;
  studentId: string;
  campusId: string;
  mode: 'physical' | 'virtual';
  duration: number;
  topics: string[];
  notes?: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  scheduledAt: string;
  completedAt?: string;
}

export interface WellnessCheckIn {
  id: string;
  userId: string;
  campusId: string;
  mood: string;
  concern: string;
  notes?: string;
  createdAt: string;
}

export interface SupportPathway {
  id: string;
  label: string;
  description: string;
  icon: string;
  route: string;
  tone: 'calm' | 'peer' | 'professional' | 'urgent';
}

export interface WellnessResource {
  id: string;
  title: string;
  category: string;
  summary: string;
  duration: string;
  campusId?: string;
  format: 'article' | 'audio' | 'video';
}

export interface WellnessGoal {
  id: string;
  title: string;
  category: 'Mind' | 'Body' | 'Connection' | 'Study';
  targetDays: number;
  completedDays: number;
  streak: number;
  completedDates: string[];
  createdAt: string;
}

export interface CampusChallenge {
  id: string;
  title: string;
  description: string;
  campusId: string;
  participants: number;
  daysLeft: number;
  category: 'Mind' | 'Body' | 'Connection' | 'Study';
  tone: 'calm' | 'peer' | 'professional' | 'urgent' | 'neutral';
}

export interface AppointmentOption {
  id: string;
  counsellor: string;
  campus: string;
  modes: string[];
  availability: string;
  bookingUrl: string;
  photoUrl?: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  type: 'message' | 'appointment' | 'resource' | 'training' | 'announcement' | 'escalation';
  read: boolean;
  createdAt: string;
}

export interface TrainingModule {
  id: string;
  title: string;
  description: string;
  duration: string;
  completed: boolean;
}

export interface Appointment {
  id: string;
  user_id: string;
  booking_provider_id: string;
  campus_id?: string;
  support_request_id?: string;
  starts_at: string;
  ends_at: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  booking_reference?: string;
  notes?: string;
  cancelled_at?: string;
  bookingProvider?: { id: string; name: string; mode: string; external_booking_url: string };
  campus?: { id: string; name: string; code: string };
}
