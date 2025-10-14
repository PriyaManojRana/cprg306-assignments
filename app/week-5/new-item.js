"use client";

import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const decreaseQty = () => {
    if (quantity > 1) setQuantity((prev) => prev - 1);
  };
  const increaseQty = () => {
    if (quantity < 20) setQuantity((prev) => prev + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);
    console.log({ name, quantity, category });
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-lg p-6 shadow-md flex flex-col gap-4"
    >
      <div>
        <label className="text-xl block text-black mb-1 text-sm font-medium">
          Item Name
        </label>
        <input
          type="text"
          required
          placeholder="e.g., milk, 4 L "
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-full border text-black border-black-100  rounded-md p-2 text-sm  placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      <div>
        <label className="block text-purple-900 mb-1 text-sm font-medium">
          Quantity (1-20)
        </label>
        <p className="text-sm text-gray-700 mb-2">
         <span className="text-xl font-medium text-black">Current: {quantity}</span>{" "}
        </p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={decreaseQty}
            disabled={quantity === 1}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-600 text-black disabled:opacity-50"
          >
            −
          </button>
          <button
            type="button"
            onClick={increaseQty}
            disabled={quantity === 20}
            className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-400 text-white disabled:opacity-50"
          >
            +
          </button>
        </div>
        <p className="text-xs text-purple-900 mt-1">Allowed range: 1–20</p>
      </div>

      <div>
        <label className="text-xl block text-black mb-1 text-sm font-medium">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-black-100 rounded-md p-2 text-sm text-purple-900 focus:outline-none focus:ring-1 focus:ring-blue-100"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      
      <button
        type="submit"
        className="mt-4 w-fit px-3 py-1.5 bg-green-800 hover:bg-green-700 text-white font-semibold py-2 rounded-md transition w-auto"
      >
        Add Item
      </button>
    </form>
  );
}
