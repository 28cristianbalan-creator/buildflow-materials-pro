import { Product } from './types';

export const toolProducts: Product[] = [
  {
    id: "tools-001",
    name: "Industrial Concrete Mixer",
    description: "Heavy-duty concrete mixer perfect for medium to large construction projects. Durable and reliable.",
    price: 2850.00,
    category: "tools",
    image: "/src/assets/concrete-mixer.jpg",
    unit: "per unit",
    inStock: true,
    specifications: {
      "Capacity": "350 liters",
      "Motor Power": "2.2 kW",
      "Mixing Speed": "27 RPM",
      "Weight": "185 kg"
    },
    features: [
      "Heavy-duty steel construction",
      "Easy operation and maintenance",
      "Portable with wheels",
      "Safety features included"
    ]
  }
];