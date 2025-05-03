// components/TitleHierarchyConsole.tsx

import { useState } from "react";

export default function TitleHierarchyConsole() {
  const [formData, setFormData] = useState({
    h2Text: "",
    h3Text: "",
    h4Text: "",
    h5Text: "",
    h6Text: "",
    textGradient: "from-indigo-400 via-purple-500 to-pink-500",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleGradientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, textGradient: e.target.value }));
  };

  return (
    <form className="space-y-8">
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

      {/* H4 Input */}
      <div>
        <label htmlFor="h4Text" className="block text-lg font-semibold text-white">H4 Text</label>
        <input
          type="text"
          id="h4Text"
          name="h4Text"
          value={formData.h4Text}
          onChange={handleChange}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400"
          placeholder="Enter H4 text"
        />
        <div
          className={`mt-2 text-xl font-bold ${formData.textGradient} hover:text-transparent hover:bg-clip-text`}
        >
          {formData.h4Text}
        </div>
      </div>

      {/* Gradient Control */}
      <div>
        <label htmlFor="textGradient" className="block text-lg font-semibold text-white">Text Gradient</label>
        <input
          type="text"
          id="textGradient"
          name="textGradient"
          value={formData.textGradient}
          onChange={handleGradientChange}
          className="mt-2 w-full p-3 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-indigo-500 text-white"
          placeholder="Enter gradient class (e.g., from-indigo-400 via-purple-500 to-pink-500)"
        />
      </div>
    </form>
  );
}
