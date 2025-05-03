// app/admin/page.tsx

import AdminNav from "@/components/AdminNav";

export const metadata = {
  title: "Admin – Flowers Shop",
};

export default function AdminPage() {
  return (
    <div className="p-8">
      <AdminNav />
      <h1 className="text-3xl font-bold mb-6">Welcome to the Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Dashboard sections */}
        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
          <p className="mb-4">
            Add, edit, and delete products in your store. Keep your inventory up-to-date.
          </p>
          <a
            href="/admin/products"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded"
          >
            Manage Products
          </a>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Manage Orders</h2>
          <p className="mb-4">
            View and manage customer orders. Keep track of order statuses and fulfillment.
          </p>
          <a
            href="/admin/orders"
            className="inline-block px-4 py-2 bg-green-600 text-white rounded"
          >
            Manage Orders
          </a>
        </div>

        <div className="bg-white shadow rounded p-6">
          <h2 className="text-xl font-semibold mb-4">Store Statistics</h2>
          <p className="mb-4">
            View sales reports, traffic, and store performance data to help you make decisions.
          </p>
          <a
            href="#"
            className="inline-block px-4 py-2 bg-yellow-600 text-white rounded"
          >
            View Statistics
          </a>
        </div>
      </div>
    </div>
  );
}
