import { CategorySlug } from './categories';

export interface Product {
  id: string;
  name: string; // display name (can be translated via keys if needed)
  image?: string; // optional image path
  price: string; // display price
  stock: number; // current stock count
  category: CategorySlug;
  featured?: boolean; // mark as featured product
}

// Add new products here - they will appear automatically in the category tabs
export const products: Product[] = [
  // Clay Bricks
  { id: 'p1', name: 'Red Clay Brick 240x115x63', price: '$0.48/brick', stock: 12000, category: 'clayBricks', featured: true },
  { id: 'p2', name: 'Red Clay Brick Solid', price: '$0.52/brick', stock: 800, category: 'clayBricks' },
  { id: 'p3', name: 'Perforated Clay Brick', price: '$0.45/brick', stock: 0, category: 'clayBricks' },
  { id: 'p10', name: 'Fire Clay Brick', price: '$0.55/brick', stock: 1500, category: 'clayBricks' },

  // BCA Blocks
  { id: 'p4', name: 'BCA Block 600x250x200', price: '$13.20/m²', stock: 340, category: 'bcaBlocks', featured: true },
  { id: 'p5', name: 'BCA Block 600x250x150', price: '$12.80/m²', stock: 50, category: 'bcaBlocks' },
  { id: 'p6', name: 'BCA Adhesive 25kg', price: '$7.50/bag', stock: 0, category: 'bcaBlocks' },
  { id: 'p11', name: 'BCA Block 600x250x100', price: '$11.50/m²', stock: 220, category: 'bcaBlocks' },

  // Aggregates
  { id: 'p7', name: 'Washed Sand 0-4mm', price: '$38/ton', stock: 75, category: 'aggregates', featured: true },
  { id: 'p8', name: 'Gravel 4-16mm', price: '$36/ton', stock: 4, category: 'aggregates' },
  { id: 'p9', name: 'Crushed Stone 16-31.5mm', price: '$35/ton', stock: 0, category: 'aggregates' },
  { id: 'p12', name: 'River Sand 0-2mm', price: '$40/ton', stock: 120, category: 'aggregates' },
];

// Helper functions for easy product management
export const getProductsByCategory = (category: CategorySlug) => {
  return products.filter(p => p.category === category);
};

export const getFeaturedProducts = () => {
  return products.filter(p => p.featured);
};

export const getProductById = (id: string) => {
  return products.find(p => p.id === id);
};
