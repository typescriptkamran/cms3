"use client";  // This line is needed for the client-side behavior in Next.js 13 with the app directory

import { useEffect, useState } from "react";
import Link from "next/link";
import { Order } from "@/lib/types"; // Assuming you've defined the 'Order' type elsewhere

// Admin Orders Page
export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Fetch orders data when component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-orders-page">
      <h1 className="text-2xl font-semibold mb-4">Orders</h1>
      
      {/* Add Order Button */}
      <div className="mb-4">
        <Link href="/admin/orders/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add New Order
          </button>
        </Link>
      </div>

      {/* Orders Table */}
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b">Order ID</th>
            <th className="px-4 py-2 border-b">Customer</th>
            <th className="px-4 py-2 border-b">Product</th>
            <th className="px-4 py-2 border-b">Price</th>
            <th className="px-4 py-2 border-b">Total</th>
            <th className="px-4 py-2 border-b">Status</th>
            <th className="px-4 py-2 border-b">Order Date</th>
            <th className="px-4 py-2 border-b">Delivery Date</th>
            <th className="px-4 py-2 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.length > 0 ? (
            orders.map((order) => (
              <tr key={order.id}>
                <td className="px-4 py-2 border-t">#{order.id}</td>
                <td className="px-4 py-2 border-t">{order.customer}</td>
                <td className="px-4 py-2 border-t">{order.product}</td>
                <td className="px-4 py-2 border-t">${order.price}</td>
                <td className="px-4 py-2 border-t">${order.total}</td>
                <td className="px-4 py-2 border-t">{order.status}</td>
                <td className="px-4 py-2 border-t">{order.orderDate}</td>
                <td className="px-4 py-2 border-t">{order.deliveryDate}</td>
                <td className="px-4 py-2 border-t">
                  <Link href={`/admin/orders/edit/${order.id}`} className="underline text-blue-600 mr-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(order.id)}
                    className="underline text-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center px-4 py-2">No orders found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

  // Function to handle deletion
  async function handleDelete(orderId: number) {
    const response = await fetch(`/api/orders/${orderId}`, {
      method: "DELETE",
    });

    if (response.ok) {
      // Remove deleted order from the list
      setOrders(orders.filter(order => order.id !== orderId));
    } else {
      alert("Failed to delete the order");
    }
  }
}
