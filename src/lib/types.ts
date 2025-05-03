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
  
  export interface Order {
    id: number;               // Unique identifier for the order
    customer: string;         // Customer's name
    productName: string;      // Name of the product ordered
    price: number;            // Price of a single item
    total: number;            // Total price of the order
    status: "Pending" | "Processing" | "Shipped" | "Completed"; // Order status
    orderDate: string;        // Date the order was placed (ISO 8601 string)
    deliveryDate: string;     // Date the order will be delivered (ISO 8601 string)
  }