// app/admin/content-management/page.tsx
import ContentTabs from "@/components/ContentTabs";

export default function ContentManagementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-900 to-indigo-900 text-white">
      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-4xl font-extrabold text-center mb-8">Content Management</h1>
        <ContentTabs />
      </div>
    </div>
  );
}
