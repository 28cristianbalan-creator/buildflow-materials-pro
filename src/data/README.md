# Products Data Structure

This folder contains the organized product data for the BuildFlow application.

## File Structure

```
src/data/products/
├── index.ts          # Main exports and combined products array
├── types.ts          # TypeScript interfaces for Product and Category
├── categories.ts     # Category definitions
├── concrete.ts       # Concrete and cement products
├── steel.ts          # Steel and metal products
├── aggregates.ts     # Aggregate materials
├── tools.ts          # Tools and equipment
├── safety.ts         # Safety equipment
└── README.md         # This file
```

## How to Add New Products

### 1. Add Product Images
- Place product images in `src/assets/`
- Use descriptive filenames (e.g., `premium-cement.jpg`)

### 2. Add Product Data
- Open the appropriate category file (e.g., `concrete.ts` for cement products)
- Add your product object following the existing structure:

```typescript
{
  id: "unique-product-id",
  name: "Product Name",
  description: "Detailed description",
  price: 99.99,
  category: "category-name",
  image: "/src/assets/your-image.jpg",
  unit: "per piece",
  inStock: true,
  specifications: {
    "Spec 1": "Value 1",
    "Spec 2": "Value 2"
  },
  features: [
    "Feature 1",
    "Feature 2"
  ]
}
```

### 3. Update Category Count
- If adding to an existing category, update the `productCount` in `categories.ts`
- For new categories, add a new category object to `categories.ts`

## Quick Access Locations

- **Product Images**: `src/assets/`
- **Category Products**: `src/data/products/[category].ts`
- **Categories**: `src/data/products/categories.ts`
- **Types**: `src/data/products/types.ts`

## Import Usage

```typescript
// Import specific category products
import { concreteProducts } from '@/data/products';

// Import all products
import { products } from '@/data/products';

// Import categories
import { categories } from '@/data/products';

// Import types
import type { Product, Category } from '@/data/products';
```