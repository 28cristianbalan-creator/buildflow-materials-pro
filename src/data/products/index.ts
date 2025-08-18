// Export types
export type { Product, Category } from './types';

// Export all products by category
export { concreteProducts } from './concrete';
export { steelProducts } from './steel';
export { aggregateProducts } from './aggregates';
export { toolProducts } from './tools';
export { safetyProducts } from './safety';

// Export categories
export { categories } from './categories';

// Import and combine all products
import { concreteProducts } from './concrete';
import { steelProducts } from './steel';
import { aggregateProducts } from './aggregates';
import { toolProducts } from './tools';
import { safetyProducts } from './safety';

// Combined products array for compatibility
export const products = [
  ...concreteProducts,
  ...steelProducts,
  ...aggregateProducts,
  ...toolProducts,
  ...safetyProducts
];