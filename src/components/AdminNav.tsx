import Link from "next/link";

export default function AdminNav() {
  return (
    <div className="h-full p-4">
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/admin/orders">Orders</Link>
          </li>
          <li>
            <Link href="/admin/products">Products</Link>
          </li>
          <li>
            <Link href="/admin/settings">Settings</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
