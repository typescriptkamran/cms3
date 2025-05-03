// components/ContentManagementForm.tsx
"use client";

import { useState } from "react";

export default function ContentManagementForm() {
  const [formData, setFormData] = useState({
    heroTitle: "",
    heroSubtitle: "",
    aboutText: "",
    productText: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/updateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Content updated successfully!");
      } else {
        alert("Failed to update content.");
      }
    } catch (error) {
      console.error("Error updating content:", error);
      alert("An error occurred while updating content.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="heroTitle" className="block text-sm font-medium">Hero Title</label>
        <input
          type="text"
          id="heroTitle"
          name="heroTitle"
          value={formData.heroTitle}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label htmlFor="heroSubtitle" className="block text-sm font-medium">Hero Subtitle</label>
        <input
          type="text"
          id="heroSubtitle"
          name="heroSubtitle"
          value={formData.heroSubtitle}
          onChange={handleChange}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label htmlFor="aboutText" className="block text-sm font-medium">About Us</label>
        <textarea
          id="aboutText"
          name="aboutText"
          value={formData.aboutText}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <div>
        <label htmlFor="productText" className="block text-sm font-medium">Product Descriptions</label>
        <textarea
          id="productText"
          name="productText"
          value={formData.productText}
          onChange={handleChange}
          rows={4}
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
        />
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded"
      >
        Save Content
      </button>
    </form>
  );
}
