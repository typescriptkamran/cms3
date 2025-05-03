"use client";

import { useState, useEffect } from "react";
import FilterSection from "@/components/FilterSection";
import OrderTable from "@/components/OrderTable";
import LoadingSpinner from "@/components/LoadingSpinner";
import { Order } from "@/lib/types";

// Fetch function to get the orders
async function getOrders(filters: any): Promise<Order[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Fallback to localhost
  const query = new URLSearchParams(filters).toString();
  const res = await fetch(`${base}/api/orders?${query}`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to load orders");

  return res.json();
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    search: "",
    paymentStatus: "Any",
    deliveryStatus: "Any",
  });

  // Fetch orders whenever filters change
  useEffect(() => {
    setLoading(true);
    getOrders(filters)
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [filters]);

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // Handle search submit
  const handleSearchSubmit = () => {
    setFilters({ ...filters, search: filters.search });
  };

  return (
    <div className="p-8">
      {/* Filter Section */}
      <FilterSection filters={filters} onFilterChange={handleFilterChange} onSearchSubmit={handleSearchSubmit} />

      <h1 className="text-2xl font-bold mb-4">Orders / Reservations</h1>

      {/* Orders Table */}
      {loading ? <LoadingSpinner /> : <OrderTable orders={orders} />}
    </div>
  );
}
