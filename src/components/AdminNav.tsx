// components/AdminNav.tsx

import Link from "next/link";

export default function AdminNav() {
  return (
    <div className="bg-black text-white h-screen p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Panel</h1>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admin/products" className="hover:text-gray-400">Products</Link>
          </li>
          <li>
            <Link href="/admin/orders" className="hover:text-gray-400">Orders</Link>
          </li>
          <li>
            <Link href="/admin/content-management" className="hover:text-gray-400">Content Management</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
