import { Product } from "../types";

export const getProducts = async () => {
    const res = await fetch('/api/products');
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json();
  };
  
  export const addProduct = async (productData: Product) => {
    const res = await fetch('/api/products', {
      method: 'POST',
      body: JSON.stringify(productData),
    });
  
    if (!res.ok) {
      throw new Error('Failed to add product');
    }
    return res.json();
  };
  