// components/AddProductForm.tsx

import { useState } from "react";

export default function AddProductForm() {
  const [productData, setProductData] = useState({
    name: "",
    category: "",
    subCategory: "",
    tags: "",
    price: "",
    stock: "",
    shortDescription: "",
    longDescription: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = productData.tags.split(",").map((tag) => tag.trim());
    const newProduct = { ...productData, tags: tagsArray };

    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    if (response.ok) {
      // Redirect to the products page or show success
      alert("Product added successfully!");
    } else {
      alert("Failed to add product!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={productData.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="category"
          value={productData.category}
          onChange={handleInputChange}
          placeholder="Category"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="subCategory"
          value={productData.subCategory}
          onChange={handleInputChange}
          placeholder="Sub-Category"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <input
          type="text"
          name="tags"
          value={productData.tags}
          onChange={handleInputChange}
          placeholder="Tags (comma-separated)"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <input
          type="number"
          name="price"
          value={productData.price}
          onChange={handleInputChange}
          placeholder="Price"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <input
          type="number"
          name="stock"
          value={productData.stock}
          onChange={handleInputChange}
          placeholder="Stock"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <textarea
          name="shortDescription"
          value={productData.shortDescription}
          onChange={handleInputChange}
          placeholder="Short Description"
          className="w-full p-2 border rounded"
        />
      </div>

      <div>
        <textarea
          name="longDescription"
          value={productData.longDescription}
          onChange={handleInputChange}
          placeholder="Long Description"
          className="w-full p-2 border rounded"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded"
      >
        Add Product
      </button>
    </form>
  );
}
