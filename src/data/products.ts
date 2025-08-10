export type CategorySlug = 'clayBricks' | 'bcaBlocks' | 'aggregates';

export interface Product {
  id: string;
  name: string; // display name (can be translated via keys if needed)
  image?: string; // optional image path
  price: string; // display price
  stock: number; // current stock count
  category: CategorySlug;
}

export const products: Product[] = [
  { id: 'p1', name: 'Red Clay Brick 240x115x63', price: '$0.48/brick', stock: 12000, category: 'clayBricks' },
  { id: 'p2', name: 'Red Clay Brick Solid', price: '$0.52/brick', stock: 800, category: 'clayBricks' },
  { id: 'p3', name: 'Perforated Clay Brick', price: '$0.45/brick', stock: 0, category: 'clayBricks' },

  { id: 'p4', name: 'BCA Block 600x250x200', price: '$13.20/m²', stock: 340, category: 'bcaBlocks' },
  { id: 'p5', name: 'BCA Block 600x250x150', price: '$12.80/m²', stock: 50, category: 'bcaBlocks' },
  { id: 'p6', name: 'BCA Adhesive 25kg', price: '$7.50/bag', stock: 0, category: 'bcaBlocks' },

  { id: 'p7', name: 'Washed Sand 0-4mm', price: '$38/ton', stock: 75, category: 'aggregates' },
  { id: 'p8', name: 'Gravel 4-16mm', price: '$36/ton', stock: 4, category: 'aggregates' },
  { id: 'p9', name: 'Crushed Stone 16-31.5mm', price: '$35/ton', stock: 0, category: 'aggregates' }
];
