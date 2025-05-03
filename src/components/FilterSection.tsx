import React from "react";

interface FilterSectionProps {
  filters: any;
  onFilterChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  onSearchSubmit: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ filters, onFilterChange, onSearchSubmit }) => {
  return (
    <div className="flex justify-between items-center mb-4 bg-gray-100 p-4 rounded-lg shadow">
      <div className="flex space-x-4">
        <input
          type="text"
          name="search"
          placeholder="Search orders"
          value={filters.search}
          onChange={onFilterChange}
          className="border rounded p-2"
        />
        <button
          onClick={onSearchSubmit}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </div>

      <div className="flex space-x-4">
        <select
          name="paymentStatus"
          value={filters.paymentStatus}
          onChange={onFilterChange}
          className="border rounded p-2"
        >
          <option value="Any">Any Payment Status</option>
          <option value="Paid">Paid</option>
          <option value="Pending">Pending</option>
          <option value="Refund">Refund</option>
        </select>
        <select
          name="deliveryStatus"
          value={filters.deliveryStatus}
          onChange={onFilterChange}
          className="border rounded p-2"
        >
          <option value="Any">Any Delivery Status</option>
          <option value="Processing">Processing</option>
          <option value="Shipped">Shipped</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSection;
