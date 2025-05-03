import { useState, useEffect } from "react";

// Define the Order type
type Order = {
  id: string;
  customer: string;
  product: string;
  price: number;
  total: number;
  status: string;
  orderDate: string;
  deliveryDate: string;
};

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]); // Explicitly set the type to Order[]

  useEffect(() => {
    const fetchOrders = async () => {
      const response = await fetch("/api/orders");
      if (!response.ok) {
        console.error("Failed to fetch orders");
        return;
      }
      const data = await response.json();
      setOrders(data); // Set the fetched orders
    };

    fetchOrders();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Orders</h1>
      {/* Add your orders table here */}
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
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border-t px-4 py-2">#{order.id}</td>
                <td className="border-t px-4 py-2">{order.customer}</td>
                <td className="border-t px-4 py-2">{order.product}</td>
                <td className="border-t px-4 py-2">${order.price}</td>
                <td className="border-t px-4 py-2">${order.total}</td>
                <td className="border-t px-4 py-2">{order.status}</td>
                <td className="border-t px-4 py-2">{order.orderDate}</td>
                <td className="border-t px-4 py-2">{order.deliveryDate}</td>
                <td className="border-t px-4 py-2 space-x-2">
                  <button className="underline text-blue-600">Edit</button>
                  <button className="underline text-red-600">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
