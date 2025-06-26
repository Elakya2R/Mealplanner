import React, { useState } from 'react';
import WeeklyMealPlanner from '../components/WeeklyMealPlanner';
import GroceryList from '../components/GroceryList';
import { Link } from 'react-router-dom';
import '../assets/styles/main.scss';

const Planner = () => {
  const [dietaryPreferences, setDietaryPreferences] = useState([]);
  const [showGroceryList, setShowGroceryList] = useState(false);

  return (
    <div className="planner-page">
      <div className="planner-controls">
        <Link to="/" className="back-button">← Back to Home</Link>
        <button 
          onClick={() => setShowGroceryList(!showGroceryList)}
          className="grocery-list-toggle"
        >
          {showGroceryList ? 'Hide Grocery List' : 'Show Grocery List'}
        </button>
      </div>

      {showGroceryList ? (
        <GroceryList />
      ) : (
        <WeeklyMealPlanner 
          dietaryPreferences={dietaryPreferences}
          onPreferencesUpdate={setDietaryPreferences}
        />
      )}
    </div>
  );
};

export default Planner;