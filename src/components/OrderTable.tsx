import React from "react";
import OrderRow from "./OrderRow";
import { Order } from "@/lib/types";

interface OrderTableProps {
  orders: Order[];
}

const OrderTable: React.FC<OrderTableProps> = ({ orders }) => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            {[
              "#",
              "Customer",
              "Delivery",
              "Product",
              "Currency",
              "Price",
              "Method",
              "Shop",
              "Device",
              "Order Date",
              "Delivery Date",
              "Payment Status",
              "Delivery Status",
              "Actions",
            ].map((heading) => (
              <th key={heading} className="px-4 py-2">{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
