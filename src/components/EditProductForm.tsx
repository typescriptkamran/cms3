// components/EditProductForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Product } from "@/lib/types";

export default function EditProductForm({ product }: { product: Product }) {
  const router = useRouter();
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [longDescription, setLongDescription] = useState(product.longDescription);
  const [category, setCategory] = useState(product.category);
  const [subCategory, setSubCategory] = useState(product.subCategory);
  const [tagsInput, setTagsInput] = useState(product.tags.join(","));
  const [price, setPrice] = useState(product.price.toString());
  const [stock, setStock] = useState(product.stock.toString());
  const [languageKey, setLanguageKey] = useState(product.languageKey);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const tags = tagsInput.split(",").map((t) => t.trim()).filter(Boolean);
    const body = {
      name,
      description,
      longDescription,
      category,
      subCategory,
      tags,
      price: Number(price),
      stock: Number(stock),
      languageKey,
    };
    const res = await fetch(`/api/products/${product.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-50 p-4 rounded shadow space-y-2"
    >
      <div className="grid md:grid-cols-2 gap-2">
        <input
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          value={languageKey}
          onChange={(e) => setLanguageKey(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <textarea
        required
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        required
        value={longDescription}
        onChange={(e) => setLongDescription(e.target.value)}
        className="w-full border px-2 py-1 rounded"
      />
      <div className="flex space-x-2">
        <button
          type="submit"
          disabled={loading}
          className="px-3 py-1 bg-green-600 text-white rounded"
        >
          {loading ? "Saving…" : "Save"}
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/products")}
          className="px-3 py-1 bg-gray-300 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
