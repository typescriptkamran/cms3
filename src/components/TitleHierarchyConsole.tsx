// components/TitleHierarchyConsole.tsx
"use client";
import { useState } from "react";

export default function TitleHierarchyConsole() {
  const [h1Text, setH1Text] = useState("");
  const [h1FontSize, setH1FontSize] = useState("2rem");
  const [gradient, setGradient] = useState("from-blue-500 to-indigo-500");

  const handleGradientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGradient(e.target.value);
  };

  return (
    <div className="space-y-6">
      {/* H1 Heading */}
      <div>
        <label htmlFor="h1Text" className="block text-lg font-semibold text-white">H1 Text</label>
        <input
          type="text"
          id="h1Text"
          value={h1Text}
          onChange={(e) => setH1Text(e.target.value)}
          className="w-full p-3 mt-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          placeholder="Enter H1 text"
        />
      </div>

      <div>
        <label htmlFor="h1FontSize" className="block text-lg font-semibold text-white">H1 Font Size</label>
        <input
          type="range"
          id="h1FontSize"
          min="1"
          max="5"
          step="0.1"
          value={parseFloat(h1FontSize)}
          onChange={(e) => setH1FontSize(`${e.target.value}rem`)}
          className="w-full"
        />
        <div className="mt-2 text-white text-sm">Preview: <span style={{ fontSize: h1FontSize }} className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text`}>{h1Text}</span></div>
      </div>

      {/* Gradient Customization */}
      <div>
        <label htmlFor="gradient" className="block text-lg font-semibold text-white">Gradient Colors</label>
        <input
          type="text"
          id="gradient"
          value={gradient}
          onChange={handleGradientChange}
          className="w-full p-3 mt-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400"
          placeholder="Enter gradient (e.g. 'from-blue-500 to-indigo-500')"
        />
      </div>

      {/* Cosmic Particle Effect on Hover */}
      <div className="mt-6">
        <h3 className="text-lg text-white mb-2">Cosmic Particle Effect on Heading Hover</h3>
        <h1
          className={`text-4xl font-bold hover:text-transparent hover:bg-clip-text bg-gradient-to-r ${gradient} hover:animate-pulse transition duration-500`}
        >
          {h1Text}
        </h1>
      </div>
    </div>
  );
}
