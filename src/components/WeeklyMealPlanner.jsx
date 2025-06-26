import { useState, useEffect } from 'react';
import { getMealPlan, saveMealPlan } from "./api/mealPlans";

export default function WeeklyMealPlanner({ dietaryPrefs, userId }) {
  const [meals, setMeals] = useState({});
  const [currentWeek] = useState(getCurrentWeekMonday());

  useEffect(() => {
    const fetchPlan = async () => {
      const { days } = await getMealPlan(userId, currentWeek);
      if (days) setMeals(days);
    };
    fetchPlan();
  }, [userId, currentWeek]);

  const handleSave = async () => {
    await saveMealPlan({
      userId,
      weekStartDate: currentWeek,
      days: meals,
      dietaryPreferences: dietaryPrefs
    });
  };

  // ... rest of your component
}

function getCurrentWeekMonday() {
  const now = new Date();
  const monday = new Date(now);
  monday.setDate(now.getDate() - now.getDay() + 1);
  return monday.toISOString().split('T')[0];
}