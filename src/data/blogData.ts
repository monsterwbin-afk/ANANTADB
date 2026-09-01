import { post5 } from './posts/post5';
import { post4 } from './posts/post4';
import { post3 } from './posts/post3';
import { post2 } from './posts/post2';
import { post1 } from './posts/post1';

export interface BlogPost {
  id: string;
  title: Record<string, string>;
  slug: string;
  summary: Record<string, string>;
  content: Record<string, string>;
  category: 'tech' | 'combat' | 'lore' | 'traversal' | 'devlog';
  categoryLabel: Record<string, string>;
  tags: string[];
  coverImage: string;
  author: {
    name: string;
    role: Record<string, string>;
    avatar: string;
    handle: string;
  };
  date: string;
  readTimeMin: number;
  initialLikes: number;
  initialViews: number;
  featured?: boolean;
}

export const INITIAL_BLOG_POSTS: BlogPost[] = [
  post5,
  post4,
  post3,
  post2,
  post1,
];
