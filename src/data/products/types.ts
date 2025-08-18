export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  unit: string;
  inStock: boolean;
  specifications: { [key: string]: string };
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  productCount: number;
}