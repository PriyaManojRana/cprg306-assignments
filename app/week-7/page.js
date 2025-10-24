/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-slate-950 p-4 min-h-screen">
      <h1 className="text-3xl font-bold text-white mb-3 text-center">Week-7 "Shopping List"</h1>
      
      <div className="max-w-md mx-auto mb-8">
        <NewItem onAddItem={handleAddItem} />
      </div>
      
      <ItemList items={items} />
    </main>
  );
}