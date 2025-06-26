import React, { useState } from 'react';
import { dietaryOptions } from '../../data';
import '../assets/styles/main.scss';

const PreferencesForm = ({ initialPreferences = [], onSubmit, onCancel }) => {
  const [selectedPreferences, setSelectedPreferences] = useState(initialPreferences);

  const handleCheckboxChange = (option) => {
    setSelectedPreferences(prev => 
      prev.includes(option) 
        ? prev.filter(item => item !== option) 
        : [...prev, option]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(selectedPreferences);
  };

  return (
    <div className="preferences-form-container">
      <form onSubmit={handleSubmit} className="preferences-form">
        <h2>Set Your Dietary Preferences</h2>
        <p>Select your dietary restrictions or preferences to customize meal suggestions</p>
        
        <div className="preferences-grid">
          {dietaryOptions.map(option => (
            <label key={option} className="preference-option">
              <input
                type="checkbox"
                checked={selectedPreferences.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <span className="checkmark"></span>
              <span className="option-label">{option}</span>
            </label>
          ))}
        </div>
        
        <div className="form-actions">
          <button type="button" onClick={onCancel} className="cancel-button">
            Cancel
          </button>
          <button type="submit" className="submit-button">
            Save Preferences
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreferencesForm;