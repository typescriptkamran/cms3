// app/admin/content-management/page.tsx
"use client";

import { useState } from "react";
import HeroContentForm from "@/components/HeroContentForm";
import TitleHierarchyConsole from "@/components/TitleHierarchyConsole";

export default function ContentManagementPage() {
  const [selectedTab, setSelectedTab] = useState("hero");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8">Content Management</h1>

        {/* Tab Buttons */}
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => setSelectedTab("hero")}
            className={`px-6 py-3 rounded-lg ${selectedTab === "hero" ? "bg-indigo-700" : "bg-indigo-500"}`}
          >
            Hero Content Management
          </button>
          <button
            onClick={() => setSelectedTab("titleHierarchy")}
            className={`px-6 py-3 rounded-lg ${selectedTab === "titleHierarchy" ? "bg-indigo-700" : "bg-indigo-500"}`}
          >
            Title Hierarchy Console 🌠
          </button>
        </div>

        {/* Tab Content */}
        <div>
          {selectedTab === "hero" && <HeroContentForm />}
          {selectedTab === "titleHierarchy" && <TitleHierarchyConsole />}
        </div>
      </div>
    </div>
  );
}
