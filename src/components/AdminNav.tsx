// app/admin/layout.tsx

import AdminNav from "@/components/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Admin Sidebar (Nav) */}
      <AdminNav />

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
