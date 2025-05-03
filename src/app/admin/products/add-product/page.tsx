// app/admin/products/add-product/page.tsx

"use client"; // Client-side component

import { useState } from "react";
import Tabs from "@/components/Tabs";
import TabPanel from "@/components/TabPanel";
import AddProductForm from "@/components/AddProductForm";

const TABS = ["Add New Product", "Details", "Pricing", "Stock & Description"];

export default function AddProductPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      {/* Tabs */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />

      {/* Tab Content */}
      <form className="space-y-4">
        <TabPanel activeTab={activeTab} index={0}>
          <AddProductForm />
        </TabPanel>

        <TabPanel activeTab={activeTab} index={1}>
          {/* Add product details here */}
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Product Details"
              className="w-full p-2 border rounded"
            />
          </div>
        </TabPanel>

        <TabPanel activeTab={activeTab} index={2}>
          {/* Add pricing details here */}
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Pricing"
              className="w-full p-2 border rounded"
            />
          </div>
        </TabPanel>

        <TabPanel activeTab={activeTab} index={3}>
          {/* Add stock and description */}
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Stock"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded"
            />
          </div>
        </TabPanel>
      </form>
    </div>
  );
}
