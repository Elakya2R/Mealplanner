const mongoose = require('mongoose');

const mealPlanSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  weekStartDate: { type: Date, required: true },
  days: {
    type: Map,
    of: {
      breakfast: String,
      lunch: String,
      dinner: String
    }
  },
  dietaryPreferences: [String]
}, { timestamps: true });

module.exports = mongoose.model('MealPlan', mealPlanSchema);