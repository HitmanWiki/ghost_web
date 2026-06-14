export interface FeatureItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  badge?: string;
  isComingSoon?: boolean;
}

export interface StatItem {
  id: string;
  label: string;
  value: string;
  icon: string;
  subValue?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot' | 'channel';
  senderName: string;
  avatarUrl?: string;
  message: string;
  time: string;
  txLink?: string;
  pnl?: string;
}
