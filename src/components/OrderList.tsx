// components/OrderList.tsx
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Order } from "@/lib/types";
import OrderRow from "@/components/OrderRow"; // Assuming you have an OrderRow component

async function getOrders(): Promise<Order[]> {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Fallback to localhost
  const res = await fetch(`${base}/api/orders`, { cache: "no-store" });

  if (!res.ok) throw new Error("Failed to load orders");

  return res.json();
}

export default function OrderList() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    // Fetch orders when the component mounts
    getOrders()
      .then((data) => {
        setOrders(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id: number) => {
    const confirmation = confirm("Are you sure you want to delete this order?");
    if (!confirmation) return;

    setLoading(true);
    const res = await fetch(`/api/orders/${id}`, { method: "DELETE" });
    if (res.ok) {
      setOrders(orders.filter((order) => order.id !== id));
    }
    setLoading(false);
  };

  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            {[
              "Order #",
              "Customer",
              "Product",
              "Price",
              "Total",
              "Status",
              "Order Date",
              "Delivery Date",
              "Actions",
            ].map((heading) => (
              <th key={heading} className="px-4 py-2">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan={9} className="text-center py-4">Loading...</td>
            </tr>
          ) : (
            orders.map((order) => (
              <OrderRow
                key={order.id}
                order={order}
                onDelete={handleDelete}
                onView={() => router.push(`/admin/orders/${order.id}`)}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
