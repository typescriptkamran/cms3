// AdminNav.tsx
import React from 'react';
import Link from 'next/link';

const AdminNav = () => {
  return (
    <nav className="admin-nav">
      <ul>
        <li><Link href="/admin/orders">Orders</Link></li>
        <li><Link href="/admin/products">Products</Link></li>
        <li><Link href="/admin/settings">Settings</Link></li>
      </ul>
    </nav>
  );
};

export default AdminNav;
