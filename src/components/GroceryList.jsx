import React from 'react';
import { defaultMeals } from '../data';
import '../assets/styles/main.scss';

const GroceryList = () => {
  // Combine all ingredients from all meals
  const allIngredients = Object.values(defaultMeals)
    .flatMap(meal => meal.ingredients)
    .reduce((acc, ingredient) => {
      const existing = acc.find(item => item.name === ingredient);
      if (existing) {
        existing.quantity++;
      } else {
        acc.push({ name: ingredient, quantity: 1 });
      }
      return acc;
    }, []);

  return (
    <div className="grocery-list">
      <h2>Your Weekly Grocery List</h2>
      <ul>
        {allIngredients.map((item, index) => (
          <li key={index} className="grocery-item">
            <span className="ingredient-name">{item.name}</span>
            <span className="ingredient-quantity">{item.quantity} {item.quantity > 1 ? 'units' : 'unit'}</span>
          </li>
        ))}
      </ul>
      <button className="print-button" onClick={() => window.print()}>Print List</button>
    </div>
  );
};

export default GroceryList;