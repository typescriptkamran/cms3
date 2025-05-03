import Link from "next/link";

export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      
      <div>
        <Link href="/admin/content-management">
          <button className="px-4 py-2 bg-blue-600 text-white rounded">Content Management</button>
        </Link>
      </div>
    </div>
  );
}
