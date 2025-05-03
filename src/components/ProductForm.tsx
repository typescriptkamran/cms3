// components/ProductForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [languageKey, setLanguageKey] = useState("en");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const tags = tagsInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
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
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      // reset form
      setName("");
      setDescription("");
      setLongDescription("");
      setCategory("");
      setSubCategory("");
      setTagsInput("");
      setPrice("");
      setStock("");
      setLanguageKey("en");
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded shadow mb-8 space-y-4"
    >
      <h2 className="text-lg font-semibold">Add New Product</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          required
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          placeholder="Sub-Category"
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          placeholder="Tags (comma-separated)"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
        <input
          required
          placeholder="Language Key"
          value={languageKey}
          onChange={(e) => setLanguageKey(e.target.value)}
          className="w-full border px-2 py-1 rounded"
        />
      </div>
      <textarea
        required
        placeholder="Short Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border px-2 py-1 rounded"
      />
      <textarea
        required
        placeholder="Long Description"
        value={longDescription}
        onChange={(e) => setLongDescription(e.target.value)}
        className="w-full border px-2 py-1 rounded"
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
      >
        {loading ? "Adding…" : "Add Product"}
      </button>
    </form>
  );
}
