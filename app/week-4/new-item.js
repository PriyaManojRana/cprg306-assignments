"use client";

import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const decreaseQty = () => {
    if (quantity > 1){
      setQuantity((prev) => prev - 1);
    }
  };

  const increaseQty = () => {
    if (quantity < 20) {
      setQuantity((prev) => prev + 1);
    }
  };

  return (
    <section className="rounded border border-gray-200 p-4 bg-white">
      <p className="mb-3">
        <span className="text-sm text-gray-600">Quantity:</span>{" "}
        <span className="text-xl font-semibold text-black">{quantity}</span>
      </p>

      <div className="flex items-center gap-5">
        <button
          onClick={decreaseQty}
          disabled={quantity === 1}
          className="rounded px-4 py-2 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
          aria-label="Decrease quantity"
        >
          -
        </button>

        <button
          onClick={increaseQty}
          disabled={quantity === 20}
          className="rounded px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-blue-200"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>

      <p className="mt-2 text-xs text-gray-500">Allowed range: 1-20</p>
    </section>
  );
}