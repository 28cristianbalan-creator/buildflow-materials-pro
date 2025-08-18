import { Product } from './types';

export const concreteProducts: Product[] = [
  {
    id: "concrete-001",
    name: "Premium Portland Cement",
    description: "High-strength Portland cement ideal for structural concrete work. Exceeds all industry standards for construction projects.",
    price: 12.50,
    category: "concrete",
    image: "/src/assets/cement-bags.jpg",
    unit: "50kg bag",
    inStock: true,
    specifications: {
      "Compressive Strength": "42.5 MPa",
      "Setting Time": "Initial: 45 min, Final: 10 hours",
      "Fineness": "300-400 m²/kg",
      "Standard": "ASTM C150, EN 197-1"
    },
    features: [
      "High early strength development",
      "Excellent workability",
      "Superior durability",
      "Low heat of hydration"
    ]
  },
  {
    id: "concrete-002",
    name: "Ready-Mix Concrete C25/30",
    description: "High-quality ready-mix concrete suitable for foundations, slabs, and structural elements.",
    price: 120.00,
    category: "concrete",
    image: "/src/assets/ready-mix-concrete.jpg",
    unit: "per m³",
    inStock: true,
    specifications: {
      "Compressive Strength": "25 MPa (28 days)",
      "Slump": "75-125mm",
      "Maximum Aggregate Size": "20mm",
      "Cement Content": "300 kg/m³"
    },
    features: [
      "Consistent quality",
      "On-time delivery",
      "Various slump options",
      "Suitable for pumping"
    ]
  }
];