"use client"; // Mark as a client-side component

import Link from "next/link";
import { useState, useEffect } from "react";
import { Product } from "@/lib/types";

async function getProducts(): Promise<Product[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
  const res = await fetch(`${base}/api/products`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to load products");

  return res.json();
}

export default function AdminProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <Link href="/admin/products/add-product">
        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
          Add New Product
        </button>
      </Link>

      {loading ? (
        <div className="text-center">Loading...</div>
      ) : (
        <div className="overflow-x-auto bg-white rounded shadow">
          <table className="w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                {["Product #", "Name", "Category", "Price", "Stock", "Actions"].map((heading) => (
                  <th key={heading} className="px-4 py-2">{heading}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border-t px-4 py-2">#{product.id}</td>
                  <td className="border-t px-4 py-2">{product.name}</td>
                  <td className="border-t px-4 py-2">{product.category}</td>
                  <td className="border-t px-4 py-2">₹{product.price}</td>
                  <td className="border-t px-4 py-2">{product.stock}</td>
                  <td className="border-t px-4 py-2 space-x-2">
                    <Link href={`/admin/products/edit-product/${product.id}`}>
                      <button className="underline text-blue-600">Edit</button>
                    </Link>
                    <button className="underline text-red-600">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
