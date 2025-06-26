import React from 'react';
import '../assets/styles/main.scss';

const MealCard = ({ meal, day, onEdit, onReplace }) => {
  if (!meal) return null;

  return (
    <div className="meal-card">
      <div className="meal-card-header">
        <h3>{day.charAt(0).toUpperCase() + day.slice(1)}</h3>
        <h2>{meal.name}</h2>
      </div>
      <div className="meal-card-body">
        <p className="description">{meal.description}</p>
        <div className="time-info">
          <span>Prep: {meal.prepTime}</span>
          <span>Cook: {meal.cookTime}</span>
        </div>
        <div className="ingredients">
          <h4>Ingredients:</h4>
          <ul>
            {meal.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        {meal.dietaryTags && meal.dietaryTags.length > 0 && (
          <div className="dietary-tags">
            {meal.dietaryTags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="meal-actions">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onEdit(day, meal);
            }} 
            className="action-button edit"
          >
            Edit
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onReplace(day);
            }} 
            className="action-button replace"
          >
            Replace
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealCard;