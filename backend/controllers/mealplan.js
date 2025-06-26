const MealPlan = require('./models/MealPlan');

// @desc    Get meal plan
// @route   GET /api/mealplans
exports.getMealPlan = async (req, res) => {
  try {
    const { userId, weekStartDate } = req.query;
    const plan = await MealPlan.findOne({ userId, weekStartDate });
    res.json(plan || { days: {} });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Save meal plan
// @route   POST /api/mealplans
exports.saveMealPlan = async (req, res) => {
  try {
    const { userId, weekStartDate, days, dietaryPreferences } = req.body;
    
    let plan = await MealPlan.findOne({ userId, weekStartDate });
    
    if (plan) {
      plan.days = days;
      plan.dietaryPreferences = dietaryPreferences;
    } else {
      plan = new MealPlan({
        userId,
        weekStartDate,
        days,
        dietaryPreferences
      });
    }
    
    const savedPlan = await plan.save();
    res.json(savedPlan);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};