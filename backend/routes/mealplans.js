const express = require('express');
const router = express.Router();
const {
  getMealPlan,
  saveMealPlan
} = require('./controllers/mealPlan');

router.route('/')
  .get(getMealPlan)
  .post(saveMealPlan);

module.exports = router;