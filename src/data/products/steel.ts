import { Product } from './types';

export const steelProducts: Product[] = [
  {
    id: "steel-001",
    name: "Reinforcement Steel Bars (Rebar)",
    description: "Grade 60 deformed reinforcement bars for concrete reinforcement. Available in various diameters.",
    price: 0.85,
    category: "steel",
    image: "/src/assets/steel-rebar.jpg",
    unit: "per meter",
    inStock: true,
    specifications: {
      "Grade": "Grade 60 (420 MPa)",
      "Diameter": "12mm, 16mm, 20mm, 25mm",
      "Length": "12m standard",
      "Standard": "ASTM A615, BS 4449"
    },
    features: [
      "High tensile strength",
      "Excellent bond with concrete",
      "Corrosion resistant coating available",
      "Various diameter options"
    ]
  },
  {
    id: "steel-002",
    name: "Structural Steel Beams",
    description: "High-quality structural steel I-beams for construction framework. Various sizes available.",
    price: 4.20,
    category: "steel",
    image: "/src/assets/steel-beams.jpg",
    unit: "per kg",
    inStock: true,
    specifications: {
      "Grade": "S355 Steel",
      "Standard": "EN 10025, ASTM A992",
      "Length": "6m, 9m, 12m",
      "Coating": "Galvanized or painted"
    },
    features: [
      "High strength-to-weight ratio",
      "Excellent weldability",
      "Corrosion resistant options",
      "Various section sizes"
    ]
  }
];