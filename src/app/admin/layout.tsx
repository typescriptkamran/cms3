import AdminNav from "@/components/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white h-screen">
        <AdminNav />
      </div>

      {/* Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {children}
      </div>
    </div>
  );
}
