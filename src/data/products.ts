import { CategorySlug } from './categories';

export interface Product {
  id: string;
  translationKey: string; // Key for translations
  image: string; // product image path
  priceKey: string; // price translation key
  stock: number; // current stock count
  category: CategorySlug;
  featured?: boolean; // mark as featured product
  description?: string; // detailed description key
}

// Add new products here - they will appear automatically in the category tabs
export const products: Product[] = [
  // Clay Bricks
  { 
    id: 'p1', 
    translationKey: 'products.clayBricks.redBrick240', 
    image: 'red-clay-brick',
    priceKey: 'products.clayBricks.redBrick240.price',
    stock: 12000, 
    category: 'clayBricks', 
    featured: true,
    description: 'products.clayBricks.redBrick240.description'
  },
  { 
    id: 'p2', 
    translationKey: 'products.clayBricks.solidBrick', 
    image: 'solid-clay-brick',
    priceKey: 'products.clayBricks.solidBrick.price',
    stock: 800, 
    category: 'clayBricks',
    description: 'products.clayBricks.solidBrick.description'
  },
  { 
    id: 'p3', 
    translationKey: 'products.clayBricks.perforatedBrick', 
    image: 'perforated-brick',
    priceKey: 'products.clayBricks.perforatedBrick.price',
    stock: 0, 
    category: 'clayBricks',
    description: 'products.clayBricks.perforatedBrick.description'
  },
  { 
    id: 'p10', 
    translationKey: 'products.clayBricks.fireBrick', 
    image: 'fire-clay-brick',
    priceKey: 'products.clayBricks.fireBrick.price',
    stock: 1500, 
    category: 'clayBricks',
    description: 'products.clayBricks.fireBrick.description'
  },

  // BCA Blocks
  { 
    id: 'p4', 
    translationKey: 'products.bcaBlocks.block200', 
    image: 'bca-block-200',
    priceKey: 'products.bcaBlocks.block200.price',
    stock: 340, 
    category: 'bcaBlocks', 
    featured: true,
    description: 'products.bcaBlocks.block200.description'
  },
  { 
    id: 'p5', 
    translationKey: 'products.bcaBlocks.block150', 
    image: 'bca-block-150',
    priceKey: 'products.bcaBlocks.block150.price',
    stock: 50, 
    category: 'bcaBlocks',
    description: 'products.bcaBlocks.block150.description'
  },
  { 
    id: 'p6', 
    translationKey: 'products.bcaBlocks.adhesive', 
    image: 'bca-adhesive',
    priceKey: 'products.bcaBlocks.adhesive.price',
    stock: 0, 
    category: 'bcaBlocks',
    description: 'products.bcaBlocks.adhesive.description'
  },
  { 
    id: 'p11', 
    translationKey: 'products.bcaBlocks.block100', 
    image: 'bca-block-100',
    priceKey: 'products.bcaBlocks.block100.price',
    stock: 220, 
    category: 'bcaBlocks',
    description: 'products.bcaBlocks.block100.description'
  },

  // Aggregates
  { 
    id: 'p7', 
    translationKey: 'products.aggregates.washedSand', 
    image: 'washed-sand',
    priceKey: 'products.aggregates.washedSand.price',
    stock: 75, 
    category: 'aggregates', 
    featured: true,
    description: 'products.aggregates.washedSand.description'
  },
  { 
    id: 'p8', 
    translationKey: 'products.aggregates.gravel', 
    image: 'gravel',
    priceKey: 'products.aggregates.gravel.price',
    stock: 4, 
    category: 'aggregates',
    description: 'products.aggregates.gravel.description'
  },
  { 
    id: 'p9', 
    translationKey: 'products.aggregates.crushedStone', 
    image: 'crushed-stone',
    priceKey: 'products.aggregates.crushedStone.price',
    stock: 0, 
    category: 'aggregates',
    description: 'products.aggregates.crushedStone.description'
  },
  { 
    id: 'p12', 
    translationKey: 'products.aggregates.riverSand', 
    image: 'river-sand',
    priceKey: 'products.aggregates.riverSand.price',
    stock: 120, 
    category: 'aggregates',
    description: 'products.aggregates.riverSand.description'
  },
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
