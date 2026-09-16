export type ConnectStatus = 'pending' | 'accepted' | 'rejected';

export interface Connect {
  id: number | string;
  follower_id: number | string;
  followed_id: number | string;
  status: ConnectStatus;
  created_at: string;
  updated_at?: string;
  follower?: { id: number | string; name: string; email: string };
  followed?: { id: number | string; name: string; email: string };
}

export interface ConnectStatusResponse {
  status: ConnectStatus | null;
  is_following: boolean;
  connect_id: number | string | null;
}

export interface SocialLink {
  id: number | string;
  platform: string;
  label: string;
  url: string;
  sort_order: number;
  is_active: boolean;
}

export const SOCIAL_PLATFORMS = ['facebook', 'instagram', 'tiktok', 'linkedin', 'x', 'youtube', 'whatsapp', 'website'] as const;
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export const SOCIAL_PLATFORM_LABELS: Record<SocialPlatform, string> = {
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'TikTok',
  linkedin: 'LinkedIn',
  x: 'X',
  youtube: 'YouTube',
  whatsapp: 'WhatsApp',
  website: 'Website'
};