"use client";
// AdminLayout.tsx
import React from 'react';
import AdminNav from '@/components/AdminNav';
import { useEffect, useState } from 'react';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Sample useEffect to simulate data loading
  useEffect(() => {
    // Simulating an async operation, like fetching data
    const loadData = async () => {
      setIsLoading(true);
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
      setIsLoading(false); // End loading
    };
    
    loadData();
  }, []); // Empty dependency array to only run once

  // Render loading state until the data is fetched or state is set
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-layout">
      <AdminNav />
      <div className="admin-content">
        {children} {/* Render the page content */}
      </div>
    </div>
  );
};

export default AdminLayout;
