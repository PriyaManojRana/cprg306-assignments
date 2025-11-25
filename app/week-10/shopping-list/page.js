"use client";

import { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useEffect } from "react";
import { useUserAuth } from "../../contexts/AuthContext";


export default function Page() {
 
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth();
  const handleAddItem = async (newItem) => {
  if (!user) return;

  const itemId = await addItem(user.uid, newItem);  

  setItems([...items, { id: itemId, ...newItem }]);
};
  
  const handleItemSelect = (item) => {
    if (!item || !item.name) return;
    
    let cleanedName = item.name.split(",")[0];
    cleanedName = cleanedName.replace(
      /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])+/g,
      ""
    );
    cleanedName = cleanedName.trim();

    setSelectedItemName(cleanedName);
  };

  

const loadItems = async () => {
  if (!user) return;

  const userItems = await getItems(user.uid);
  setItems(userItems);
};

useEffect(() => {
  loadItems();
}, [user]);


  return (
    <main className="bg-slate-950 p-4 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold text-white mb-6 text-center">
        Shopping List + Meal Ideas
      </h1>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start w-full max-w-5xl">
        
        <div className="w-full md:w-1/2">
          <div className="mb-6">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
     
        <div className="w-full md:w-1/2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
