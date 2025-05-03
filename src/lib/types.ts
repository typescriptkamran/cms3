// lib/types.ts

export interface Product {
    id: number;
    name: string;
    description: string;
    longDescription: string;
    category: string;
    subCategory: string;
    tags: string[];
    price: number;
    stock: number;
    languageKey: string;
  }
  
// src/lib/types.ts

export interface Order {
  id: number;
  customer: string;
  product: string; // Make sure 'product' is defined here
  price: number;
  total: number;
  status: string;
  orderDate: string;
  deliveryDate: string;
}
