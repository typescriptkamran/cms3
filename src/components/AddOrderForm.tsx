// components/AddOrderForm.tsx

import { useState } from "react";

export default function AddOrderForm() {
  const [order, setOrder] = useState({
    customer: "",
    product: "",
    price: 0,
    total: 0,
    status: "",
    orderDate: "",
    deliveryDate: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrder({
      ...order,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send POST request to the API
    const response = await fetch("/api/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    if (response.ok) {
      const data = await response.json();
      alert("Order added successfully");
      
      // Clear the form after successful submission
      setOrder({
        customer: "",
        product: "",
        price: 0,
        total: 0,
        status: "",
        orderDate: "",
        deliveryDate: "",
      });
    } else {
      alert("Failed to add order");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label>Customer</label>
        <input
          type="text"
          name="customer"
          value={order.customer}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <div>
        <label>Product</label>
        <input
          type="text"
          name="product"
          value={order.product}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <div>
        <label>Price</label>
        <input
          type="number"
          name="price"
          value={order.price}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <div>
        <label>Total</label>
        <input
          type="number"
          name="total"
          value={order.total}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <div>
        <label>Status</label>
        <input
          type="text"
          name="status"
          value={order.status}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <div>
        <label>Order Date</label>
        <input
          type="date"
          name="orderDate"
          value={order.orderDate}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <div>
        <label>Delivery Date</label>
        <input
          type="date"
          name="deliveryDate"
          value={order.deliveryDate}
          onChange={handleChange}
          required
          className="border px-4 py-2 w-full"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded w-full"
      >
        Add Order
      </button>
    </form>
  );
}
