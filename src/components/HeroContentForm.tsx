"use client";
import { useState } from "react";

const HeroContentForm = () => {
  const [content, setContent] = useState({
    heroTitle: "",
    heroSubtitle: "",
    ctaText: "",
    ctaLink: "",
    nebulaImage: null as File | null,
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setContent((prev) => ({
        ...prev,
        nebulaImage: file,
      }));
    }
  };

  return (
    <div className="space-y-4">
      <label className="text-white">Hero Title</label>
      <input
        type="text"
        value={content.heroTitle}
        onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
        className="mt-2 p-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-white">Hero Subtitle</label>
      <input
        type="text"
        value={content.heroSubtitle}
        onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
        className="mt-2 p-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-white">Call-to-Action Text</label>
      <input
        type="text"
        value={content.ctaText}
        onChange={(e) => setContent({ ...content, ctaText: e.target.value })}
        className="mt-2 p-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-white">Call-to-Action Link</label>
      <input
        type="text"
        value={content.ctaLink}
        onChange={(e) => setContent({ ...content, ctaLink: e.target.value })}
        className="mt-2 p-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500"
      />

      <label className="text-white">Upload Nebula Image</label>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mt-2 p-2 rounded-md bg-transparent border-2 border-white focus:ring-2 focus:ring-blue-500"
      />

      {content.nebulaImage && (
        <div className="mt-4">
          <h3 className="text-white">Selected Image:</h3>
          <img
            src={URL.createObjectURL(content.nebulaImage)}
            alt="Nebula preview"
            className="mt-2 w-full h-auto object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default HeroContentForm;
