// components/TitleHierarchyConsole.tsx
"use client";

import { useState } from "react";

export default function TitleHierarchyConsole() {
  const [formData, setFormData] = useState({
    heroText: "",
    heroHeadingText: "",
    heroParagraph: "",
    h2Text: "",
    h2Paragraph: "",
    h3Text: "",
    h3Paragraph: "",
    h4Text: "",
    h4Paragraph: "",
    h5Text: "",
    h5Paragraph: "",
    h6Text: "",
    h6Paragraph: "",
    textGradient: "from-indigo-400 via-purple-500 to-pink-500",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGradientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, textGradient: e.target.value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for save logic, e.g., send data to the server.
    console.log("Content saved:", formData);
    alert("Content saved successfully!");
  };

  return (
    <form onSubmit={handleSave} className="space-y-8">
      {/* Hero Heading Text */}
      <div>
        <label htmlFor="heroHeadingText" className="block text-lg font-semibold text-white">Hero Heading Text</label>
        <textarea
          id="heroHeadingText"
          name="heroHeadingText"
          value={formData.heroHeadingText}
          onChange={handleChange}
          rows={3}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter hero heading text"
        />
        <div
          className={`mt-2 text-xl font-bold ${formData.textGradient} hover:text-transparent hover:bg-clip-text`}
        >
          {formData.heroHeadingText}
        </div>
      </div>

      {/* Hero Text */}
      <div>
        <label htmlFor="heroText" className="block text-lg font-semibold text-white">Hero Text</label>
        <textarea
          id="heroText"
          name="heroText"
          value={formData.heroText}
          onChange={handleChange}
          rows={3}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter hero text"
        />
      </div>

      {/* Hero Paragraph */}
      <div>
        <label htmlFor="heroParagraph" className="block text-lg font-semibold text-white">Hero Paragraph</label>
        <textarea
          id="heroParagraph"
          name="heroParagraph"
          value={formData.heroParagraph}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter paragraph content after hero heading"
        />
      </div>

      {/* H2 Input */}
      <div>
        <label htmlFor="h2Text" className="block text-lg font-semibold text-white">H2 Text</label>
        <input
          type="text"
          id="h2Text"
          name="h2Text"
          value={formData.h2Text}
          onChange={handleChange}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter H2 text"
        />
        <div
          className={`mt-2 text-xl font-bold ${formData.textGradient} hover:text-transparent hover:bg-clip-text`}
        >
          {formData.h2Text}
        </div>
      </div>

      {/* H2 Paragraph */}
      <div>
        <label htmlFor="h2Paragraph" className="block text-lg font-semibold text-white">H2 Paragraph</label>
        <textarea
          id="h2Paragraph"
          name="h2Paragraph"
          value={formData.h2Paragraph}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter paragraph content after H2 heading"
        />
      </div>

      {/* H3 Input */}
      <div>
        <label htmlFor="h3Text" className="block text-lg font-semibold text-white">H3 Text</label>
        <input
          type="text"
          id="h3Text"
          name="h3Text"
          value={formData.h3Text}
          onChange={handleChange}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter H3 text"
        />
        <div
          className={`mt-2 text-xl font-bold ${formData.textGradient} hover:text-transparent hover:bg-clip-text`}
        >
          {formData.h3Text}
        </div>
      </div>

      {/* H3 Paragraph */}
      <div>
        <label htmlFor="h3Paragraph" className="block text-lg font-semibold text-white">H3 Paragraph</label>
        <textarea
          id="h3Paragraph"
          name="h3Paragraph"
          value={formData.h3Paragraph}
          onChange={handleChange}
          rows={4}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter paragraph content after H3 heading"
        />
      </div>

      {/* Submit Button */}
      <div>
        <button
          type="submit"
          className="mt-4 w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}
