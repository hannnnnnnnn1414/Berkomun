export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  count: number;
}

export interface Community {
  id: string;
  name: string;
  description: string;
  image: string;
  category: string;
  location: string;
  memberCount: number;
  isOnline: boolean;
  nextEvent?: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  communityName: string;
  communityId: string;
  date: string;
  time: string;
  location: string;
  isOnline: boolean;
  attendeeCount: number;
  maxAttendees?: number;
  category: string;
}

export interface Story {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  authorName: string;
  authorImage: string;
  authorRole: string;
  communityName: string;
  readTime: string;
  publishedAt: string;
}

export interface SearchParams {
  interest: string;
  location: string;
  category?: string;
}