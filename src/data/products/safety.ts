import { Product } from './types';

export const safetyProducts: Product[] = [
  {
    id: "safety-001",
    name: "Safety Helmet Set",
    description: "Professional construction safety helmets meeting all industry standards. Comfortable and durable.",
    price: 45.00,
    category: "safety",
    image: "/src/assets/safety-helmets.jpg",
    unit: "per helmet",
    inStock: true,
    specifications: {
      "Material": "High-density polyethylene",
      "Weight": "350g",
      "Color Options": "White, Yellow, Orange, Blue",
      "Standard": "EN 397, ANSI Z89.1"
    },
    features: [
      "Impact resistant",
      "Comfortable fit",
      "Adjustable headband",
      "Various color options"
    ]
  }
];