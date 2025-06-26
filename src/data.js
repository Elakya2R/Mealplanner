// Sample meal data with ingredients, preparation time, and dietary tags
export const defaultMeals = {
    monday: {
      name: "Vegetable Stir Fry",
      description: "A colorful mix of fresh vegetables sautéed with garlic and ginger in a light soy sauce",
      ingredients: [
        "1 red bell pepper, sliced",
        "1 yellow bell pepper, sliced",
        "2 cups broccoli florets",
        "1 carrot, julienned",
        "1 cup snow peas",
        "2 cloves garlic, minced",
        "1 tbsp fresh ginger, grated",
        "2 tbsp soy sauce",
        "1 tbsp sesame oil",
        "1 tbsp vegetable oil"
      ],
      prepTime: "15 mins",
      cookTime: "10 mins",
      dietaryTags: ["Vegetarian", "Vegan", "Dairy-free"]
    },
    tuesday: {
      name: "Grilled Chicken with Quinoa",
      description: "Juicy grilled chicken served with fluffy quinoa and steamed greens",
      ingredients: [
        "2 chicken breasts",
        "1 cup quinoa",
        "2 cups chicken broth",
        "2 cups broccoli florets",
        "1 lemon, sliced",
        "2 tbsp olive oil",
        "2 cloves garlic, minced",
        "1 tsp paprika",
        "Salt and pepper to taste"
      ],
      prepTime: "10 mins",
      cookTime: "20 mins",
      dietaryTags: ["High-protein", "Gluten-free"]
    },
    wednesday: {
      name: "Pasta Primavera",
      description: "Classic pasta dish with seasonal vegetables in a light cream sauce",
      ingredients: [
        "8 oz pasta (penne or fusilli)",
        "1 zucchini, sliced",
        "1 cup cherry tomatoes, halved",
        "1 cup mushrooms, sliced",
        "1/2 cup heavy cream",
        "1/4 cup grated parmesan",
        "2 cloves garlic, minced",
        "2 tbsp olive oil",
        "Fresh basil for garnish"
      ],
      prepTime: "10 mins",
      cookTime: "15 mins",
      dietaryTags: ["Vegetarian"]
    },
    thursday: {
      name: "Baked Salmon with Roasted Vegetables",
      description: "Oven-baked salmon with a medley of roasted root vegetables",
      ingredients: [
        "2 salmon fillets",
        "1 sweet potato, cubed",
        "2 carrots, sliced",
        "1 cup Brussels sprouts, halved",
        "1 lemon, sliced",
        "2 tbsp fresh dill, chopped",
        "2 tbsp olive oil",
        "1 tsp garlic powder",
        "Salt and pepper to taste"
      ],
      prepTime: "15 mins",
      cookTime: "25 mins",
      dietaryTags: ["Pescatarian", "High-protein", "Gluten-free"]
    },
    friday: {
      name: "Homemade Pizza Night",
      description: "Build your own pizza with your favorite toppings",
      ingredients: [
        "1 pizza dough (store-bought or homemade)",
        "1/2 cup pizza sauce",
        "2 cups shredded mozzarella",
        "10 slices pepperoni",
        "1/2 cup mushrooms, sliced",
        "1/2 bell pepper, sliced",
        "1/4 cup black olives",
        "1 tbsp olive oil",
        "Italian seasoning"
      ],
      prepTime: "20 mins",
      cookTime: "15 mins",
      dietaryTags: []
    },
    saturday: {
      name: "Beef Tacos",
      description: "Seasoned ground beef in crispy taco shells with all the fixings",
      ingredients: [
        "1 lb ground beef",
        "8 taco shells",
        "1 packet taco seasoning",
        "1 cup lettuce, shredded",
        "1 tomato, diced",
        "1/2 cup cheddar cheese, shredded",
        "1/4 cup sour cream",
        "1/4 cup salsa",
        "1 avocado, sliced"
      ],
      prepTime: "15 mins",
      cookTime: "10 mins",
      dietaryTags: []
    },
    sunday: {
      name: "Classic Sunday Roast",
      description: "Tender roast chicken with golden potatoes and vegetables",
      ingredients: [
        "1 whole chicken (3-4 lbs)",
        "4 potatoes, quartered",
        "3 carrots, chopped",
        "1 onion, quartered",
        "2 cups chicken stock",
        "2 tbsp olive oil",
        "1 tsp thyme",
        "1 tsp rosemary",
        "Salt and pepper to taste"
      ],
      prepTime: "20 mins",
      cookTime: "90 mins",
      dietaryTags: ["Gluten-free"]
    }
  };
  
  // Additional meal options for replacement functionality
  export const alternativeMeals = [
    {
      name: "Mushroom Risotto",
      description: "Creamy arborio rice with wild mushrooms and parmesan",
      ingredients: [
        "1 cup arborio rice",
        "2 cups mushrooms, sliced",
        "4 cups vegetable broth",
        "1/2 cup white wine",
        "1/4 cup grated parmesan",
        "1 small onion, diced",
        "2 cloves garlic, minced",
        "2 tbsp butter",
        "2 tbsp olive oil"
      ],
      prepTime: "10 mins",
      cookTime: "30 mins",
      dietaryTags: ["Vegetarian"]
    },
    {
      name: "Chickpea Curry",
      description: "Spicy chickpeas in a rich tomato and coconut milk sauce",
      ingredients: [
        "2 cans chickpeas, drained",
        "1 can coconut milk",
        "1 can diced tomatoes",
        "1 onion, diced",
        "2 cloves garlic, minced",
        "1 tbsp curry powder",
        "1 tsp turmeric",
        "1 tsp cumin",
        "2 tbsp vegetable oil",
        "Fresh cilantro for garnish"
      ],
      prepTime: "10 mins",
      cookTime: "25 mins",
      dietaryTags: ["Vegan", "Vegetarian", "Gluten-free"]
    },
    {
      name: "Quinoa Salad Bowl",
      description: "Nutritious quinoa with fresh vegetables and lemon dressing",
      ingredients: [
        "1 cup cooked quinoa",
        "1 cucumber, diced",
        "1 cup cherry tomatoes, halved",
        "1 avocado, diced",
        "1/4 cup feta cheese, crumbled",
        "2 tbsp olive oil",
        "1 lemon, juiced",
        "1 tsp dried oregano",
        "Salt and pepper to taste"
      ],
      prepTime: "15 mins",
      cookTime: "0 mins",
      dietaryTags: ["Vegetarian", "Gluten-free"]
    }
  ];
  
  // Available dietary preference options
  export const dietaryOptions = [
    "Vegetarian",
    "Vegan",
    "Gluten-free",
    "Dairy-free",
    "Nut-free",
    "Pescatarian",
    "Keto",
    "Low-carb",
    "High-protein",
    "Low-calorie"
  ];
  
  // Sample grocery categories for organization
  export const groceryCategories = {
    produce: [
      "Bell peppers",
      "Broccoli",
      "Carrots",
      "Snow peas",
      "Zucchini",
      "Cherry tomatoes",
      "Mushrooms",
      "Sweet potatoes",
      "Brussels sprouts",
      "Avocado",
      "Lettuce",
      "Tomato",
      "Onion",
      "Cucumber"
    ],
    proteins: [
      "Chicken breast",
      "Whole chicken",
      "Salmon fillet",
      "Ground beef"
    ],
    dairy: [
      "Heavy cream",
      "Parmesan",
      "Mozzarella",
      "Cheddar cheese",
      "Sour cream",
      "Feta cheese"
    ],
    pantry: [
      "Quinoa",
      "Pasta",
      "Pizza dough",
      "Taco shells",
      "Arborio rice",
      "Chickpeas",
      "Coconut milk",
      "Diced tomatoes",
      "Vegetable broth",
      "Chicken broth",
      "White wine",
      "Soy sauce",
      "Sesame oil",
      "Olive oil",
      "Taco seasoning",
      "Curry powder",
      "Turmeric",
      "Cumin",
      "Italian seasoning"
    ],
    spices: [
      "Garlic",
      "Ginger",
      "Paprika",
      "Thyme",
      "Rosemary",
      "Oregano",
      "Salt",
      "Pepper"
    ],
    other: [
      "Lemon",
      "Fresh basil",
      "Fresh dill",
      "Salsa",
      "Black olives",
      "Fresh cilantro"
    ]
  };