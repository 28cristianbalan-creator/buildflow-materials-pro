// Categories configuration - easy to add new categories
export type CategorySlug = 'clayBricks' | 'bcaBlocks' | 'aggregates';

export interface Category {
  key: CategorySlug;
  translationKey: string; // Key for translation files
  imageKey?: string; // Optional image identifier
}

// Add new categories here - they will appear automatically in the UI
export const categories: Category[] = [
  { 
    key: 'clayBricks', 
    translationKey: 'categories.items.clayBricks',
    imageKey: 'red-bricks'
  },
  { 
    key: 'bcaBlocks', 
    translationKey: 'categories.items.bcaBlocks',
    imageKey: 'bca-blocks'
  },
  { 
    key: 'aggregates', 
    translationKey: 'categories.items.aggregates',
    imageKey: 'aggregates'
  }
];

// Helper to get category display info
export const getCategoryInfo = (categoryKey: CategorySlug) => {
  return categories.find(cat => cat.key === categoryKey);
};