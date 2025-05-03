import React from "react";
import Link from "next/link";
import { Order } from "@/lib/types";

interface OrderRowProps {
  order: Order;
}

const OrderRow: React.FC<OrderRowProps> = ({ order }) => {
  return (
    <tr className="hover:bg-gray-50">
      <td className="border-t px-4 py-2">{order.id}</td>
      <td className="border-t px-4 py-2">{order.customer}</td>
      <td className="border-t px-4 py-2">{order.delivery}</td>
      <td className="border-t px-4 py-2">{order.product}</td>
      <td className="border-t px-4 py-2">{order.currency}</td>
      <td className="border-t px-4 py-2">{order.price}</td>
      <td className="border-t px-4 py-2">{order.method}</td>
      <td className="border-t px-4 py-2">{order.shop}</td>
      <td className="border-t px-4 py-2">{order.device}</td>
      <td className="border-t px-4 py-2">{order.orderDate}</td>
      <td className="border-t px-4 py-2">{order.deliveryDate}</td>
      <td className="border-t px-4 py-2">{order.paymentStatus}</td>
      <td className="border-t px-4 py-2">{order.deliveryStatus}</td>
      <td className="border-t px-4 py-2">
        <Link href={`/admin/orders/edit-order/${order.id}`}>
          <button className="underline text-blue-600">Edit</button>
        </Link>
        <button className="underline text-red-600 ml-2">Delete</button>
      </td>
    </tr>
  );
};

export default OrderRow;
