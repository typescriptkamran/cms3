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

export type Order = {
  id: number;
  customer: string;
  delivery: string;
  product: string;
  currency: string;
  price: number;
  method: string;
  shop: string;
  device: string;
  orderDate: string;
  deliveryDate: string;
  paymentStatus: string;
  deliveryStatus: string;
};

