"use client"; // Mark as a client-side component

import { useState } from "react";
import { useRouter } from "next/navigation";  // Use next/navigation instead of next/router

export default function ContentManagement() {
  const [content, setContent] = useState({
    heroTitle: "",
    heroSubtitle: "",
    productText: "",
    aboutText: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();  // Updated to use next/navigation

  // Handle content changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContent({
      ...content,
      [name]: value,
    });
  };

  // Handle content save
  const handleSave = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/updateContent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(content),
      });
      const data = await response.json();
      if (data.success) {
        alert("Content updated successfully");
        router.push("/admin"); // Redirect to admin page after success
      } else {
        alert("Failed to update content");
      }
    } catch (error) {
      console.error("Error saving content", error);
      alert("An error occurred while saving the content");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Content Management</h1>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Hero Title</label>
          <input
            type="text"
            name="heroTitle"
            value={content.heroTitle}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Hero Subtitle</label>
          <input
            type="text"
            name="heroSubtitle"
            value={content.heroSubtitle}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Product Description</label>
          <textarea
            name="productText"
            value={content.productText}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">About Us</label>
          <textarea
            name="aboutText"
            value={content.aboutText}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded"
            rows={4}
          />
        </div>

        <button
          onClick={handleSave}
          disabled={isLoading}
          className={`mt-4 px-6 py-2 bg-blue-600 text-white rounded ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isLoading ? "Saving..." : "Save Content"}
        </button>
      </div>
    </div>
  );
}
``
