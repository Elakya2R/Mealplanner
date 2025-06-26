const API_BASE_URL = 'http://localhost:5000/api/mealplans';

export const getMealPlan = async (userId, weekStartDate) => {
  const response = await fetch(`${API_BASE_URL}?userId=${userId}&weekStartDate=${weekStartDate}`);
  if (!response.ok) throw new Error('Failed to fetch meal plan');
  return await response.json();
};

export const saveMealPlan = async (data) => {
  const response = await fetch(API_BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error('Failed to save meal plan');
  return await response.json();
};