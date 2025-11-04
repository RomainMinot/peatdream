import type { CollectionEntry } from 'astro:content';

// Type aliases for better readability
export type Tasting = CollectionEntry<'tastings'>;
export type TastingData = Tasting['data'];

// Heading type for Table of Contents
export interface Heading {
  depth: number;
  slug: string;
  text: string;
}

// Navigation props
export interface TastingNavigationProps {
  prev?: Tasting;
  next?: Tasting;
}

// Hero props
export interface TastingHeroProps {
  title: string;
  date?: Date;
  category?: string;
  heroImage?: any;
  readingTime?: number;
}

// Card props
export interface TastingCardProps {
  title: string;
  slug: string;
  heroImage?: any;
  date?: Date;
  category?: string;
  readingTime?: number;
  featured?: boolean;
}
