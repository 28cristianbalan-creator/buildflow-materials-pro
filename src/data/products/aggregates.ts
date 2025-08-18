import { Product } from './types';

export const aggregateProducts: Product[] = [
  {
    id: "aggregates-001",
    name: "Crushed Stone Aggregate",
    description: "Premium quality crushed stone aggregate for concrete mixing and road construction. Clean, well-graded material.",
    price: 25.00,
    category: "aggregates",
    image: "/src/assets/crushed-stone.jpg",
    unit: "per ton",
    inStock: true,
    specifications: {
      "Size Range": "5mm - 20mm",
      "Density": "1.6 - 1.8 ton/m³",
      "Water Absorption": "< 2%",
      "Standard": "ASTM C33, BS 882"
    },
    features: [
      "Well-graded particles",
      "Low water absorption",
      "Minimal dust content",
      "Consistent quality"
    ]
  },
  {
    id: "aggregates-002",
    name: "Fine Sand for Construction",
    description: "Clean, well-graded fine sand perfect for concrete mixing, masonry, and plastering work.",
    price: 30.00,
    category: "aggregates",
    image: "/src/assets/fine-sand.jpg",
    unit: "per ton",
    inStock: true,
    specifications: {
      "Fineness Modulus": "2.3 - 3.1",
      "Silt Content": "< 3%",
      "Organic Content": "< 1%",
      "Standard": "ASTM C33, BS 882"
    },
    features: [
      "Well-graded particles",
      "Low silt content",
      "Clean and washed",
      "Consistent quality"
    ]
  }
];