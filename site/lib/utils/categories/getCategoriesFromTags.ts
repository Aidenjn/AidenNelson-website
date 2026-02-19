import { Category } from '@/lib/types/Category';
import { getCategoryFromSlug } from './getCategoryFromSlug';
import { Tag } from '@/lib/types/SanityTypes';

export function getCategoriesFromTags(tags: Tag[]): Category[] {
  return tags
    .map((tag: Tag) => getCategoryFromSlug(tag.slug.current)) // Try to get the categories from the slugs
    .filter((category: Category | undefined) => category !== undefined); // Only return the defined categories
}
