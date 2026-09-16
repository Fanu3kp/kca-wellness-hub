import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UiIconComponent } from '../shared/components/ui-icon/ui-icon.component';
import { CardComponent } from '../shared/components/card/card.component';
import { BadgeComponent } from '../shared/components/badge/badge.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { ApiService } from '../core/services/api.service';
import { AuthService } from '../core/services/auth.service';

interface Conversation {
  id: string;
  subject?: string | null;
  status: 'open' | 'closed';
  created_by: string;
  creator?: { id: string; name: string; email: string } | null;
  participants?: Array<{ id: string; name: string; email: string }>;
  last_message_at?: string | null;
}

interface ChatMessage {
  id: string;
  body: string;
  message_type: 'text' | 'system';
  sender?: { id: string; name: string; email: string } | null;
  sent_at: string;
  read: boolean;
}

interface ConversationCollection {
  data: {
    data: Conversation[];
  };
}

interface MessageCollection {
  data: {
    data: ChatMessage[];
  };
}

interface MessageResponse {
  data: ChatMessage;
}

interface ConversationResponse {
  data: Conversation;
}

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [FormsModule, RouterLink, UiIconComponent, CardComponent, BadgeComponent, AlertComponent],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent implements OnInit {
  conversations: Conversation[] = [];
  activeConversation: Conversation | null = null;
  messages: ChatMessage[] = [];
  message = '';
  loading = false;
  sending = false;
  error = '';
  showTyping = false;
  attachments: Array<{ name: string; size: string }> = [];
  typingUser = '';

  constructor(private readonly api: ApiService, private readonly authService: AuthService) {}

  ngOnInit(): void {
    this.loadConversations();
  }

  loadConversations(): void {
    this.loading = true;
    this.error = '';
    this.api.get<ConversationCollection>('/conversations').subscribe({
      next: (response) => {
        this.conversations = response.data.data;
        this.activeConversation = this.conversations[0] ?? null;
        if (this.activeConversation) {
          this.loadMessages(this.activeConversation.id);
        }
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.error = 'Conversations are temporarily unavailable.';
      }
    });
  }

  selectConversation(conversation: Conversation): void {
    this.activeConversation = conversation;
    this.loadMessages(conversation.id);
  }

  loadMessages(conversationId: string): void {
    this.api.get<MessageCollection>(`/conversations/${conversationId}/messages`).subscribe({
      next: (response) => {
        this.messages = response.data.data;
      },
      error: () => {
        this.messages = [];
      }
    });
  }

  send(): void {
    const body = this.message.trim();
    if (!body || !this.activeConversation) return;
    this.sending = true;
    this.api.post<MessageResponse>(`/conversations/${this.activeConversation.id}/messages`, { body }).subscribe({
      next: (response) => {
        this.messages = [response.data, ...this.messages];
        this.message = '';
        this.sending = false;
        this.loadConversations();
        this.showTypingIndicator();
      },
      error: () => {
        this.sending = false;
        this.error = 'Message could not be sent.';
      }
    });
  }

  showTypingIndicator(): void {
    if (!this.activeConversation) return;
    this.showTyping = true;
    this.typingUser = 'Wellness support';
    setTimeout(() => { this.showTyping = false; }, 1500);
  }

  attachFile(): void {
    this.attachments.push({ name: 'attachment.pdf', size: '245 KB' });
  }

  removeAttachment(attachment: { name: string; size: string }): void {
    this.attachments = this.attachments.filter((a) => a !== attachment);
  }

  createConversation(): void {
    this.sending = true;
    this.api.post<Conversation>('/conversations', { subject: 'Wellness check-in' }).subscribe({
      next: (conversation) => {
        this.conversations = [conversation, ...this.conversations];
        this.activeConversation = conversation;
        this.messages = [];
        this.sending = false;
      },
      error: () => {
        this.sending = false;
        this.error = 'Conversation could not be created.';
      }
    });
  }

  initials(name: string): string {
    return name.split(' ').map((part) => part[0]).join('').slice(0, 2).toUpperCase();
  }

  displayName(conversation: Conversation): string {
    return conversation.creator?.name ?? conversation.participants?.find((participant) => participant.id !== this.authService.currentUser?.id)?.name ?? 'Wellness Team';
  }

  displayRole(conversation: Conversation): string {
    return conversation.creator?.id === this.authService.currentUser?.id ? 'Conversation owner' : 'Wellness support';
  }

  isMine(message: ChatMessage): boolean {
    return message.sender?.id === this.authService.currentUser?.id;
  }

  formatTime(value: string): string {
    const date = new Date(value);
    return Number.isNaN(date.getTime()) ? value : date.toLocaleTimeString('en-KE', { hour: '2-digit', minute: '2-digit' });
  }
}
