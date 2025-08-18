// Re-export everything from the new modular structure for backward compatibility
export type { Product, Category } from './products/types';
export { 
  products, 
  categories,
  concreteProducts,
  steelProducts,
  aggregateProducts,
  toolProducts,
  safetyProducts
} from './products/index';