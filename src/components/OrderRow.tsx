// components/OrderRow.tsx
import { Order } from "@/lib/types";

interface OrderRowProps {
  order: Order;
  onDelete: (id: number) => void;
  onView: () => void;
}

export default function OrderRow({ order, onDelete, onView }: OrderRowProps) {
  return (
    <tr>
      <td className="border-t px-4 py-2">#{order.id}</td>
      <td className="border-t px-4 py-2">{order.customer}</td>
      <td className="border-t px-4 py-2">{order.productName}</td>
      <td className="border-t px-4 py-2">₹{order.price}</td>
      <td className="border-t px-4 py-2">₹{order.total}</td>
      <td className="border-t px-4 py-2">{order.status}</td>
      <td className="border-t px-4 py-2">{new Date(order.orderDate).toLocaleDateString()}</td>
      <td className="border-t px-4 py-2">{new Date(order.deliveryDate).toLocaleDateString()}</td>
      <td className="border-t px-4 py-2 space-x-2">
        <button className="underline text-blue-600" onClick={onView}>
          View
        </button>
        <button className="underline text-red-600" onClick={() => onDelete(order.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
}
