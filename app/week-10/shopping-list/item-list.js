"use client";
import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  return (
    <div className="max-w-md">
      
      <div className="flex items-center justify-start gap-2 mb-6">
        <span className="font-semibold text-white">Sort by:</span>

        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-md border transition-all ${
            sortBy === "name"
              ? "bg-blue-500 text-white border-blue-400"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Name
        </button>

        <button
          onClick={() => setSortBy("category")}
          className={`px-3 py-1 rounded-md border transition-all ${
            sortBy === "category"
              ? "bg-blue-500 text-white border-blue-400"
              : "bg-gray-200 text-black hover:bg-gray-300"
          }`}
        >
          Category
        </button>
      </div>

      
      <ul className="space-y-3">
        {sortedItems.map((item, index) => (
          <Item
            key={index}
            name={item.name}
            quantity={item.quantity}
            category={item.category}
            onSelect={() => onItemSelect && onItemSelect(item)}
          />
        ))}
      </ul>
    </div>
  );
}
