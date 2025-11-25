"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
    );
    const data = await response.json();
    return data.meals || []; 
  } catch (error) {
    console.error("Error fetching meal ideas:", error);
    return [];
  }
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const loadMealIdeas = async () => {
    if (ingredient) {
      const ideas = await fetchMealIdeas(ingredient);
      setMeals(ideas);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [loadMealIdeas]);

  return (
    <div className="text-white p-4">
      <h2 className="text-2xl font-bold mb-3">
        Meal ideas for ({ingredient})
      </h2>

      {!ingredient && <p className="text-gray-300">Choose the item for ideas.</p>}

      {ingredient && meals.length === 0 && (
        <p className="text-gray-300">No meals found.</p>
      )}

      <ul className="space-y-3">
        {meals.map((meal) => (
          <li
            key={meal.idMeal}
            className="p-3 border border-white rounded-md bg-gradient-to-r from-blue-600 to-purple-700 shadow-md"
          >
            <p className="font-semibold">{meal.strMeal}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
