// components/ContentTabs.tsx
"use client";
import { useState } from "react";
import HeroContentForm from "./HeroContentForm"; // Assuming this is already defined

export default function ContentTabs() {
  const [activeTab, setActiveTab] = useState("hero"); // Default to Hero Content

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="flex border-b-2 border-gray-600">
        <button
          className={`px-4 py-2 ${activeTab === "hero" ? "text-blue-500" : "text-white"}`}
          onClick={() => setActiveTab("hero")}
        >
          Hero Content
        </button>
        <button
          className={`px-4 py-2 ${activeTab === "title-hierarchy" ? "text-blue-500" : "text-white"}`}
          onClick={() => setActiveTab("title-hierarchy")}
        >
          Title Hierarchy Console
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === "hero" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Hero Content Management</h2>
          <HeroContentForm /> {/* Your Hero Content Form component */}
        </div>
      )}

      {activeTab === "title-hierarchy" && (
        <div>
          <h2 className="text-2xl font-bold mb-4">Title Hierarchy Console 🌠</h2>
          <TitleHierarchyConsole /> {/* New component for Title Hierarchy */}
        </div>
      )}
    </div>
  );
}
