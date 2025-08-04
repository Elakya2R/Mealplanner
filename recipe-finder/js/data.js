// Sample Recipe Data
const recipesData = [
    {
        id: 1,
        title: "Classic Margherita Pizza",
        description: "A traditional Italian pizza with fresh mozzarella, tomatoes, and basil on a crispy thin crust.",
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
        cuisine: "italian",
        diet: ["vegetarian"],
        cookTime: 25,
        prepTime: 15,
        servings: 4,
        difficulty: "medium",
        rating: 4.8,
        calories: 285,
        protein: "12g",
        carbs: "36g",
        fat: "10g",
        ingredients: [
            "1 pizza dough ball",
            "1/2 cup pizza sauce",
            "8 oz fresh mozzarella cheese, sliced",
            "2 large tomatoes, sliced",
            "1/4 cup fresh basil leaves",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat your oven to 475°F (245°C). If using a pizza stone, place it in the oven while preheating.",
            "Roll out the pizza dough on a floured surface to your desired thickness.",
            "Transfer the dough to a pizza pan or parchment paper if using a pizza stone.",
            "Spread the pizza sauce evenly over the dough, leaving a 1-inch border for the crust.",
            "Arrange the mozzarella slices and tomato slices evenly over the sauce.",
            "Drizzle with olive oil and season with salt and pepper.",
            "Bake for 12-15 minutes until the crust is golden and cheese is bubbly.",
            "Remove from oven and immediately top with fresh basil leaves.",
            "Let cool for 2-3 minutes before slicing and serving."
        ],
        tags: ["pizza", "italian", "vegetarian", "dinner"]
    },
    {
        id: 2,
        title: "Chicken Tacos al Pastor",
        description: "Flavorful Mexican-style chicken tacos with pineapple, onions, and cilantro in soft corn tortillas.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        cuisine: "mexican",
        diet: ["gluten-free"],
        cookTime: 20,
        prepTime: 30,
        servings: 6,
        difficulty: "easy",
        rating: 4.6,
        calories: 320,
        protein: "25g",
        carbs: "28g",
        fat: "12g",
        ingredients: [
            "2 lbs chicken thighs, boneless and skinless",
            "12 corn tortillas",
            "1 cup diced pineapple",
            "1/2 white onion, finely diced",
            "1/2 cup fresh cilantro, chopped",
            "2 limes, cut into wedges",
            "2 tbsp achiote paste",
            "3 cloves garlic, minced",
            "1 tsp cumin",
            "1 tsp oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "In a bowl, mix achiote paste, minced garlic, cumin, oregano, salt, and pepper.",
            "Marinate chicken thighs in the spice mixture for at least 30 minutes.",
            "Heat a grill or skillet over medium-high heat.",
            "Cook chicken for 6-7 minutes per side until fully cooked and slightly charred.",
            "Let chicken rest for 5 minutes, then slice into thin strips.",
            "Warm tortillas in a dry skillet or directly over a gas flame.",
            "Fill each tortilla with chicken, diced pineapple, onions, and cilantro.",
            "Serve with lime wedges and your favorite salsa.",
            "Enjoy immediately while warm."
        ],
        tags: ["tacos", "mexican", "chicken", "dinner", "gluten-free"]
    },
    {
        id: 3,
        title: "Vegetable Pad Thai",
        description: "A delicious vegetarian version of the classic Thai noodle dish with fresh vegetables and tamarind sauce.",
        image: "https://images.unsplash.com/photo-1559314809-0f31657def5e?w=400&h=300&fit=crop",
        cuisine: "asian",
        diet: ["vegetarian", "vegan"],
        cookTime: 15,
        prepTime: 20,
        servings: 4,
        difficulty: "medium",
        rating: 4.5,
        calories: 380,
        protein: "8g",
        carbs: "65g",
        fat: "10g",
        ingredients: [
            "8 oz rice noodles",
            "2 tbsp vegetable oil",
            "3 cloves garlic, minced",
            "1 bell pepper, sliced",
            "1 cup bean sprouts",
            "2 carrots, julienned",
            "3 green onions, chopped",
            "1/4 cup peanuts, crushed",
            "2 tbsp tamarind paste",
            "2 tbsp soy sauce",
            "1 tbsp brown sugar",
            "1 lime, juiced",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Soak rice noodles in warm water until soft, then drain.",
            "In a small bowl, whisk together tamarind paste, soy sauce, brown sugar, and lime juice.",
            "Heat oil in a large wok or skillet over high heat.",
            "Add garlic and stir-fry for 30 seconds until fragrant.",
            "Add bell pepper and carrots, stir-fry for 2-3 minutes.",
            "Add drained noodles and sauce mixture, toss to combine.",
            "Add bean sprouts and green onions, stir-fry for another 2 minutes.",
            "Remove from heat and garnish with crushed peanuts and cilantro.",
            "Serve immediately with lime wedges."
        ],
        tags: ["pad thai", "asian", "vegetarian", "noodles", "dinner"]
    },
    {
        id: 4,
        title: "Classic Caesar Salad",
        description: "Crisp romaine lettuce with homemade Caesar dressing, parmesan cheese, and crunchy croutons.",
        image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: ["vegetarian"],
        cookTime: 0,
        prepTime: 15,
        servings: 4,
        difficulty: "easy",
        rating: 4.4,
        calories: 220,
        protein: "8g",
        carbs: "12g",
        fat: "16g",
        ingredients: [
            "2 large heads romaine lettuce, chopped",
            "1/2 cup grated Parmesan cheese",
            "1 cup croutons",
            "3 tbsp mayonnaise",
            "2 tbsp lemon juice",
            "2 cloves garlic, minced",
            "1 tsp Dijon mustard",
            "1 tsp Worcestershire sauce",
            "2 tbsp olive oil",
            "Salt and black pepper to taste"
        ],
        instructions: [
            "Wash and dry romaine lettuce thoroughly, then chop into bite-sized pieces.",
            "In a large bowl, whisk together mayonnaise, lemon juice, minced garlic, and Dijon mustard.",
            "Add Worcestershire sauce and olive oil, whisk until smooth.",
            "Season dressing with salt and pepper to taste.",
            "Add chopped romaine to the bowl and toss with dressing until well coated.",
            "Sprinkle with grated Parmesan cheese and croutons.",
            "Toss gently to combine all ingredients.",
            "Serve immediately while lettuce is crisp.",
            "Garnish with additional Parmesan if desired."
        ],
        tags: ["salad", "american", "vegetarian", "lunch", "healthy"]
    },
    {
        id: 5,
        title: "Mediterranean Quinoa Bowl",
        description: "A healthy and colorful bowl with quinoa, fresh vegetables, feta cheese, and Mediterranean herbs.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "mediterranean",
        diet: ["vegetarian", "gluten-free"],
        cookTime: 15,
        prepTime: 20,
        servings: 4,
        difficulty: "easy",
        rating: 4.7,
        calories: 350,
        protein: "14g",
        carbs: "45g",
        fat: "12g",
        ingredients: [
            "1 cup quinoa",
            "2 cups vegetable broth",
            "1 cucumber, diced",
            "2 tomatoes, diced",
            "1/2 red onion, thinly sliced",
            "1/2 cup Kalamata olives, pitted",
            "1/2 cup feta cheese, crumbled",
            "1/4 cup fresh parsley, chopped",
            "2 tbsp fresh mint, chopped",
            "3 tbsp olive oil",
            "2 tbsp lemon juice",
            "1 tsp dried oregano",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Rinse quinoa under cold water until water runs clear.",
            "In a saucepan, bring vegetable broth to a boil, add quinoa.",
            "Reduce heat to low, cover, and simmer for 15 minutes until liquid is absorbed.",
            "Remove from heat and let stand 5 minutes, then fluff with a fork.",
            "In a large bowl, combine diced cucumber, tomatoes, and red onion.",
            "In a small bowl, whisk together olive oil, lemon juice, oregano, salt, and pepper.",
            "Add cooked quinoa to the vegetable mixture.",
            "Pour dressing over the salad and toss to combine.",
            "Top with olives, feta cheese, parsley, and mint before serving."
        ],
        tags: ["quinoa", "mediterranean", "healthy", "vegetarian", "lunch"]
    },
    {
        id: 6,
        title: "Spicy Korean Bibimbap",
        description: "A traditional Korean mixed rice dish with seasoned vegetables, protein, and spicy gochujang sauce.",
        image: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?w=400&h=300&fit=crop",
        cuisine: "asian",
        diet: ["gluten-free"],
        cookTime: 30,
        prepTime: 45,
        servings: 4,
        difficulty: "hard",
        rating: 4.9,
        calories: 420,
        protein: "18g",
        carbs: "58g",
        fat: "14g",
        ingredients: [
            "2 cups cooked white rice",
            "1 lb beef sirloin, thinly sliced",
            "2 cups spinach",
            "1 cup bean sprouts",
            "1 carrot, julienned",
            "1 zucchini, julienned",
            "4 shiitake mushrooms, sliced",
            "4 eggs",
            "3 tbsp gochujang",
            "2 tbsp sesame oil",
            "2 tbsp soy sauce",
            "2 tbsp rice vinegar",
            "2 cloves garlic, minced",
            "1 tbsp sugar",
            "Sesame seeds for garnish"
        ],
        instructions: [
            "Marinate beef in soy sauce, sesame oil, and garlic for 30 minutes.",
            "Blanch spinach in boiling water for 1 minute, drain and season with sesame oil and salt.",
            "Blanch bean sprouts for 2 minutes, drain and season similarly.",
            "Sauté each vegetable separately until tender, season each with salt and sesame oil.",
            "Cook marinated beef in a hot pan until browned and cooked through.",
            "Fry eggs sunny-side up with slightly runny yolks.",
            "Mix gochujang, sesame oil, rice vinegar, and sugar to make the sauce.",
            "Serve rice in bowls, arrange vegetables and beef in sections on top.",
            "Top each bowl with a fried egg and serve with gochujang sauce."
        ],
        tags: ["bibimbap", "korean", "rice", "beef", "dinner"]
    },
    {
        id: 7,
        title: "Creamy Mushroom Risotto",
        description: "Rich and creamy Italian risotto with mixed mushrooms, Parmesan cheese, and fresh herbs.",
        image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=400&h=300&fit=crop",
        cuisine: "italian",
        diet: ["vegetarian"],
        cookTime: 30,
        prepTime: 15,
        servings: 4,
        difficulty: "medium",
        rating: 4.6,
        calories: 380,
        protein: "12g",
        carbs: "52g",
        fat: "14g",
        ingredients: [
            "1 1/2 cups Arborio rice",
            "6 cups warm vegetable broth",
            "1 lb mixed mushrooms, sliced",
            "1 onion, finely diced",
            "3 cloves garlic, minced",
            "1/2 cup white wine",
            "1/2 cup grated Parmesan cheese",
            "3 tbsp butter",
            "2 tbsp olive oil",
            "2 tbsp fresh parsley, chopped",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Heat olive oil in a large pan, sauté mushrooms until golden, set aside.",
            "In the same pan, melt 1 tbsp butter, sauté onion until translucent.",
            "Add garlic and rice, stir for 2 minutes until rice is lightly toasted.",
            "Pour in wine and stir until absorbed.",
            "Add warm broth one ladle at a time, stirring constantly until absorbed.",
            "Continue adding broth and stirring for 18-20 minutes until rice is creamy.",
            "Stir in cooked mushrooms, remaining butter, and Parmesan cheese.",
            "Season with salt, pepper, and fresh parsley.",
            "Serve immediately while hot and creamy."
        ],
        tags: ["risotto", "italian", "mushrooms", "vegetarian", "dinner"]
    },
    {
        id: 8,
        title: "Thai Green Curry",
        description: "Aromatic and spicy Thai curry with coconut milk, vegetables, and fresh basil leaves.",
        image: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop",
        cuisine: "asian",
        diet: ["gluten-free", "vegan"],
        cookTime: 25,
        prepTime: 15,
        servings: 4,
        difficulty: "medium",
        rating: 4.8,
        calories: 320,
        protein: "6g",
        carbs: "25g",
        fat: "22g",
        ingredients: [
            "2 cans coconut milk",
            "3 tbsp green curry paste",
            "1 eggplant, cubed",
            "1 bell pepper, sliced",
            "1 cup green beans, trimmed",
            "1/2 cup bamboo shoots",
            "2 tbsp fish sauce (or soy sauce for vegan)",
            "1 tbsp palm sugar",
            "1/2 cup Thai basil leaves",
            "2 kaffir lime leaves",
            "1 red chili, sliced",
            "Jasmine rice for serving"
        ],
        instructions: [
            "Heat 1/2 can of coconut milk in a large pan over medium heat.",
            "Add green curry paste and fry for 2-3 minutes until fragrant.",
            "Add remaining coconut milk and bring to a gentle simmer.",
            "Add eggplant and cook for 5 minutes until slightly tender.",
            "Add bell pepper, green beans, and bamboo shoots.",
            "Season with fish sauce and palm sugar, simmer for 10 minutes.",
            "Add kaffir lime leaves and half the basil leaves.",
            "Taste and adjust seasoning as needed.",
            "Serve over jasmine rice, garnished with remaining basil and chili."
        ],
        tags: ["curry", "thai", "coconut", "spicy", "vegan"]
    },
    {
        id: 9,
        title: "Classic Beef Burger",
        description: "Juicy beef patty with lettuce, tomato, onion, and special sauce on a toasted brioche bun.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: [],
        cookTime: 15,
        prepTime: 10,
        servings: 4,
        difficulty: "easy",
        rating: 4.5,
        calories: 520,
        protein: "28g",
        carbs: "35g",
        fat: "28g",
        ingredients: [
            "1 lb ground beef (80/20)",
            "4 brioche burger buns",
            "4 slices cheddar cheese",
            "4 lettuce leaves",
            "1 large tomato, sliced",
            "1/2 red onion, sliced",
            "4 pickle slices",
            "3 tbsp mayonnaise",
            "2 tbsp ketchup",
            "1 tbsp mustard",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Form ground beef into 4 equal patties, season with salt and pepper.",
            "Heat a grill or skillet over medium-high heat.",
            "Cook patties for 4-5 minutes per side for medium doneness.",
            "Add cheese slices in the last minute of cooking.",
            "Toast burger buns lightly on the grill or in a toaster.",
            "Mix mayonnaise, ketchup, and mustard for the special sauce.",
            "Spread sauce on both halves of each bun.",
            "Layer lettuce, tomato, onion, and pickles on bottom bun.",
            "Top with cheese-covered patty and crown with top bun."
        ],
        tags: ["burger", "american", "beef", "dinner", "grill"]
    },
    {
        id: 10,
        title: "Greek Moussaka",
        description: "Traditional Greek casserole with layers of eggplant, meat sauce, and creamy béchamel topping.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        cuisine: "mediterranean",
        diet: [],
        cookTime: 60,
        prepTime: 45,
        servings: 8,
        difficulty: "hard",
        rating: 4.7,
        calories: 450,
        protein: "22g",
        carbs: "28g",
        fat: "28g",
        ingredients: [
            "3 large eggplants, sliced",
            "1 lb ground lamb or beef",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "1 can crushed tomatoes",
            "1/2 cup red wine",
            "2 tsp cinnamon",
            "1/2 cup butter",
            "1/2 cup flour",
            "2 cups milk",
            "1 cup grated Parmesan cheese",
            "3 egg yolks",
            "Olive oil for frying",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Salt eggplant slices and let drain for 30 minutes, then pat dry.",
            "Fry eggplant slices in olive oil until golden, set aside.",
            "Cook ground meat with onion and garlic until browned.",
            "Add tomatoes, wine, cinnamon, salt, and pepper, simmer 20 minutes.",
            "For béchamel: melt butter, whisk in flour, gradually add milk.",
            "Cook sauce until thick, remove from heat, stir in cheese and egg yolks.",
            "Layer half the eggplant in a baking dish, top with meat sauce.",
            "Add remaining eggplant, then pour béchamel over top.",
            "Bake at 350°F for 45 minutes until golden and bubbling."
        ],
        tags: ["moussaka", "greek", "casserole", "lamb", "dinner"]
    },
    {
        id: 11,
        title: "Chicken Tikka Masala",
        description: "Tender marinated chicken in a rich, creamy tomato-based curry sauce with aromatic spices.",
        image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop",
        cuisine: "indian",
        diet: ["gluten-free"],
        cookTime: 30,
        prepTime: 60,
        servings: 6,
        difficulty: "medium",
        rating: 4.9,
        calories: 380,
        protein: "32g",
        carbs: "12g",
        fat: "24g",
        ingredients: [
            "2 lbs chicken breast, cubed",
            "1 cup plain yogurt",
            "2 tbsp lemon juice",
            "2 tsp garam masala",
            "1 tsp cumin",
            "1 tsp paprika",
            "1 onion, diced",
            "4 cloves garlic, minced",
            "1 tbsp fresh ginger, grated",
            "1 can crushed tomatoes",
            "1 cup heavy cream",
            "2 tbsp butter",
            "1 tsp turmeric",
            "Salt and cilantro for garnish"
        ],
        instructions: [
            "Marinate chicken in yogurt, lemon juice, and half the spices for 1 hour.",
            "Thread chicken onto skewers and grill until cooked through.",
            "In a large pan, sauté onion, garlic, and ginger until fragrant.",
            "Add remaining spices and cook for 1 minute.",
            "Add crushed tomatoes and simmer for 15 minutes.",
            "Stir in cream and butter, season with salt.",
            "Add grilled chicken to the sauce and simmer 5 minutes.",
            "Garnish with fresh cilantro before serving.",
            "Serve with basmati rice and naan bread."
        ],
        tags: ["chicken", "indian", "curry", "spicy", "dinner"]
    },
    {
        id: 12,
        title: "Chocolate Chip Cookies",
        description: "Classic homemade cookies with crispy edges, chewy centers, and plenty of chocolate chips.",
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: ["vegetarian"],
        cookTime: 12,
        prepTime: 15,
        servings: 24,
        difficulty: "easy",
        rating: 4.8,
        calories: 180,
        protein: "2g",
        carbs: "24g",
        fat: "9g",
        ingredients: [
            "2 1/4 cups all-purpose flour",
            "1 tsp baking soda",
            "1 tsp salt",
            "1 cup butter, softened",
            "3/4 cup granulated sugar",
            "3/4 cup brown sugar",
            "2 large eggs",
            "2 tsp vanilla extract",
            "2 cups chocolate chips"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "In a bowl, whisk together flour, baking soda, and salt.",
            "In a large bowl, cream butter with both sugars until fluffy.",
            "Beat in eggs one at a time, then vanilla extract.",
            "Gradually mix in flour mixture until just combined.",
            "Fold in chocolate chips evenly throughout the dough.",
            "Drop rounded tablespoons of dough onto ungreased baking sheets.",
            "Bake for 9-11 minutes until edges are golden brown.",
            "Cool on baking sheet for 5 minutes before transferring to wire rack."
        ],
        tags: ["cookies", "dessert", "chocolate", "baking", "sweet"]
    },
    {
        id: 13,
        title: "Avocado Toast",
        description: "Simple and healthy breakfast with mashed avocado on toasted bread, topped with various garnishes.",
        image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: ["vegetarian", "vegan"],
        cookTime: 5,
        prepTime: 10,
        servings: 2,
        difficulty: "easy",
        rating: 4.3,
        calories: 280,
        protein: "8g",
        carbs: "32g",
        fat: "15g",
        ingredients: [
            "2 slices whole grain bread",
            "2 ripe avocados",
            "1 lemon, juiced",
            "2 tbsp olive oil",
            "1/4 tsp red pepper flakes",
            "2 tbsp hemp seeds",
            "Salt and black pepper to taste",
            "Optional: cherry tomatoes, radish slices"
        ],
        instructions: [
            "Toast bread slices until golden brown and crispy.",
            "Cut avocados in half, remove pits, and scoop into a bowl.",
            "Mash avocados with lemon juice, salt, and pepper.",
            "Spread mashed avocado evenly on toast slices.",
            "Drizzle with olive oil and sprinkle with red pepper flakes.",
            "Top with hemp seeds and any optional garnishes.",
            "Serve immediately while toast is still warm.",
            "Add a pinch of sea salt for extra flavor.",
            "Enjoy as a healthy breakfast or light lunch."
        ],
        tags: ["avocado", "toast", "healthy", "breakfast", "vegan"]
    },
    {
        id: 14,
        title: "Beef Stir Fry",
        description: "Quick and flavorful stir fry with tender beef strips, fresh vegetables, and savory sauce.",
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop",
        cuisine: "asian",
        diet: ["gluten-free"],
        cookTime: 15,
        prepTime: 20,
        servings: 4,
        difficulty: "easy",
        rating: 4.5,
        calories: 340,
        protein: "26g",
        carbs: "18g",
        fat: "18g",
        ingredients: [
            "1 lb beef sirloin, sliced thin",
            "2 tbsp vegetable oil",
            "1 bell pepper, sliced",
            "1 cup snap peas",
            "1 carrot, julienned",
            "3 green onions, chopped",
            "3 cloves garlic, minced",
            "1 tbsp fresh ginger, grated",
            "3 tbsp soy sauce",
            "2 tbsp oyster sauce",
            "1 tbsp cornstarch",
            "1 tsp sesame oil",
            "Cooked rice for serving"
        ],
        instructions: [
            "Toss beef strips with cornstarch and 1 tbsp soy sauce.",
            "Heat oil in a large wok or skillet over high heat.",
            "Add beef and stir-fry for 2-3 minutes until browned.",
            "Remove beef and set aside.",
            "Add vegetables to the same pan, stir-fry for 3-4 minutes.",
            "Add garlic and ginger, cook for 30 seconds.",
            "Return beef to pan with remaining soy sauce and oyster sauce.",
            "Stir-fry for 1-2 minutes until heated through.",
            "Drizzle with sesame oil and serve over rice."
        ],
        tags: ["stir fry", "beef", "asian", "quick", "dinner"]
    },
    {
        id: 15,
        title: "Caprese Salad",
        description: "Fresh Italian salad with ripe tomatoes, mozzarella cheese, basil, and balsamic glaze.",
        image: "https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?w=400&h=300&fit=crop",
        cuisine: "italian",
        diet: ["vegetarian", "gluten-free"],
        cookTime: 0,
        prepTime: 10,
        servings: 4,
        difficulty: "easy",
        rating: 4.6,
        calories: 220,
        protein: "12g",
        carbs: "8g",
        fat: "16g",
        ingredients: [
            "4 large ripe tomatoes, sliced",
            "8 oz fresh mozzarella, sliced",
            "1/2 cup fresh basil leaves",
            "3 tbsp extra virgin olive oil",
            "2 tbsp balsamic glaze",
            "Sea salt and black pepper to taste"
        ],
        instructions: [
            "Arrange tomato and mozzarella slices alternately on a platter.",
            "Tuck fresh basil leaves between the tomato and cheese slices.",
            "Drizzle with extra virgin olive oil evenly over the salad.",
            "Add a light drizzle of balsamic glaze for sweetness.",
            "Season with sea salt and freshly ground black pepper.",
            "Let stand for 10 minutes to allow flavors to meld.",
            "Serve at room temperature for best flavor.",
            "Garnish with additional basil leaves if desired.",
            "Perfect as an appetizer or light lunch."
        ],
        tags: ["caprese", "italian", "salad", "fresh", "vegetarian"]
    },
    {
        id: 16,
        title: "Pancakes",
        description: "Fluffy American-style pancakes perfect for breakfast, served with maple syrup and butter.",
        image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: ["vegetarian"],
        cookTime: 15,
        prepTime: 10,
        servings: 4,
        difficulty: "easy",
        rating: 4.7,
        calories: 320,
        protein: "8g",
        carbs: "48g",
        fat: "10g",
        ingredients: [
            "2 cups all-purpose flour",
            "2 tbsp sugar",
            "2 tsp baking powder",
            "1 tsp salt",
            "2 large eggs",
            "1 3/4 cups milk",
            "1/4 cup melted butter",
            "1 tsp vanilla extract",
            "Butter for cooking",
            "Maple syrup for serving"
        ],
        instructions: [
            "In a large bowl, whisk together flour, sugar, baking powder, and salt.",
            "In another bowl, beat eggs, then whisk in milk, melted butter, and vanilla.",
            "Pour wet ingredients into dry ingredients and stir until just combined.",
            "Don't overmix - lumps are okay and will create fluffy pancakes.",
            "Heat a griddle or large skillet over medium heat, add butter.",
            "Pour 1/4 cup batter for each pancake onto the hot griddle.",
            "Cook until bubbles form on surface, then flip and cook until golden.",
            "Serve immediately with butter and warm maple syrup.",
            "Keep cooked pancakes warm in a 200°F oven if needed."
        ],
        tags: ["pancakes", "breakfast", "american", "fluffy", "sweet"]
    },
    {
        id: 17,
        title: "Fish Tacos",
        description: "Light and fresh tacos with seasoned white fish, cabbage slaw, and creamy lime sauce.",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
        cuisine: "mexican",
        diet: ["gluten-free"],
        cookTime: 15,
        prepTime: 20,
        servings: 4,
        difficulty: "easy",
        rating: 4.6,
        calories: 290,
        protein: "22g",
        carbs: "25g",
        fat: "12g",
        ingredients: [
            "1 lb white fish fillets (mahi-mahi or cod)",
            "8 corn tortillas",
            "2 cups cabbage, shredded",
            "1/4 cup mayonnaise",
            "2 limes, juiced",
            "1 jalapeño, minced",
            "1/4 cup cilantro, chopped",
            "1 tsp cumin",
            "1 tsp chili powder",
            "1/2 tsp paprika",
            "Salt and pepper to taste",
            "2 tbsp vegetable oil"
        ],
        instructions: [
            "Season fish with cumin, chili powder, paprika, salt, and pepper.",
            "Heat oil in a large skillet over medium-high heat.",
            "Cook fish for 3-4 minutes per side until flaky and cooked through.",
            "Break fish into bite-sized pieces.",
            "Mix mayonnaise, lime juice, jalapeño, and cilantro for sauce.",
            "Toss shredded cabbage with half the lime sauce.",
            "Warm tortillas in a dry skillet or microwave.",
            "Fill tortillas with fish, cabbage slaw, and remaining sauce.",
            "Serve with lime wedges and hot sauce if desired."
        ],
        tags: ["fish", "tacos", "mexican", "healthy", "dinner"]
    },
    {
        id: 18,
        title: "Ramen Bowl",
        description: "Hearty Japanese-style ramen with rich broth, noodles, soft-boiled eggs, and fresh toppings.",
        image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop",
        cuisine: "asian",
        diet: [],
        cookTime: 25,
        prepTime: 30,
        servings: 4,
        difficulty: "medium",
        rating: 4.8,
        calories: 420,
        protein: "18g",
        carbs: "52g",
        fat: "16g",
        ingredients: [
            "4 portions fresh ramen noodles",
            "6 cups chicken broth",
            "2 tbsp miso paste",
            "1 tbsp soy sauce",
            "1 tsp sesame oil",
            "4 soft-boiled eggs",
            "1 cup sliced mushrooms",
            "4 green onions, chopped",
            "1 sheet nori, cut into strips",
            "1 cup bean sprouts",
            "2 cloves garlic, minced",
            "1 tsp fresh ginger, grated",
            "Optional: sliced pork or chicken"
        ],
        instructions: [
            "Prepare soft-boiled eggs: boil for 6-7 minutes, then ice bath.",
            "Cook ramen noodles according to package instructions, drain.",
            "Heat chicken broth in a large pot, whisk in miso paste.",
            "Add soy sauce, sesame oil, garlic, and ginger to broth.",
            "Sauté mushrooms until golden and tender.",
            "Divide cooked noodles among serving bowls.",
            "Ladle hot broth over noodles in each bowl.",
            "Top with halved soft-boiled eggs, mushrooms, and bean sprouts.",
            "Garnish with green onions, nori strips, and any protein."
        ],
        tags: ["ramen", "japanese", "noodles", "comfort", "dinner"]
    },
    {
        id: 19,
        title: "Greek Salad",
        description: "Traditional Greek village salad with tomatoes, cucumbers, olives, feta, and olive oil dressing.",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop",
        cuisine: "mediterranean",
        diet: ["vegetarian", "gluten-free"],
        cookTime: 0,
        prepTime: 15,
        servings: 4,
        difficulty: "easy",
        rating: 4.5,
        calories: 180,
        protein: "6g",
        carbs: "12g",
        fat: "14g",
        ingredients: [
            "4 large tomatoes, cut into wedges",
            "2 cucumbers, sliced thick",
            "1 red onion, thinly sliced",
            "1/2 cup Kalamata olives",
            "4 oz feta cheese, cubed",
            "1/4 cup extra virgin olive oil",
            "2 tbsp red wine vinegar",
            "1 tsp dried oregano",
            "Salt and pepper to taste",
            "Fresh oregano for garnish"
        ],
        instructions: [
            "Cut tomatoes into wedges and place in a large bowl.",
            "Add thick cucumber slices and thinly sliced red onion.",
            "Add Kalamata olives and cubed feta cheese.",
            "In a small bowl, whisk olive oil, vinegar, and dried oregano.",
            "Season dressing with salt and pepper to taste.",
            "Pour dressing over salad and toss gently to combine.",
            "Let salad sit for 10 minutes to allow flavors to meld.",
            "Garnish with fresh oregano before serving.",
            "Serve at room temperature for authentic Greek flavor."
        ],
        tags: ["greek", "salad", "mediterranean", "healthy", "vegetarian"]
    },
    {
        id: 20,
        title: "Banana Bread",
        description: "Moist and flavorful quick bread made with ripe bananas, perfect for breakfast or snacking.",
        image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: ["vegetarian"],
        cookTime: 60,
        prepTime: 15,
        servings: 12,
        difficulty: "easy",
        rating: 4.7,
        calories: 210,
        protein: "3g",
        carbs: "42g",
        fat: "5g",
        ingredients: [
            "3 ripe bananas, mashed",
            "1/3 cup melted butter",
            "3/4 cup sugar",
            "1 egg, beaten",
            "1 tsp vanilla extract",
            "1 tsp baking soda",
            "Pinch of salt",
            "1 1/2 cups all-purpose flour",
            "Optional: 1/2 cup chopped walnuts"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C) and grease a 9x5 inch loaf pan.",
            "In a large bowl, mash ripe bananas until smooth.",
            "Mix melted butter into mashed bananas.",
            "Add sugar, beaten egg, and vanilla extract, mix well.",
            "Sprinkle baking soda and salt over mixture, stir to combine.",
            "Add flour and mix until just incorporated, don't overmix.",
            "Fold in chopped walnuts if using.",
            "Pour batter into prepared loaf pan and smooth top.",
            "Bake for 60-65 minutes until a toothpick comes out clean."
        ],
        tags: ["banana bread", "baking", "breakfast", "sweet", "comfort"]
    },
    {
        id: 21,
        title: "Chicken Caesar Wrap",
        description: "Portable wrap with grilled chicken, romaine lettuce, parmesan, and Caesar dressing in a flour tortilla.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: [],
        cookTime: 15,
        prepTime: 10,
        servings: 4,
        difficulty: "easy",
        rating: 4.4,
        calories: 380,
        protein: "28g",
        carbs: "32g",
        fat: "16g",
        ingredients: [
            "4 large flour tortillas",
            "2 chicken breasts, grilled and sliced",
            "4 cups romaine lettuce, chopped",
            "1/2 cup Caesar dressing",
            "1/4 cup grated Parmesan cheese",
            "1/2 cup croutons, crushed",
            "2 tbsp olive oil",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Season chicken breasts with salt, pepper, and olive oil.",
            "Grill chicken for 6-7 minutes per side until cooked through.",
            "Let chicken rest, then slice into thin strips.",
            "Warm tortillas in microwave for 30 seconds or in a dry skillet.",
            "Toss chopped romaine with Caesar dressing.",
            "Place dressed lettuce in center of each tortilla.",
            "Top with sliced chicken, Parmesan cheese, and crushed croutons.",
            "Fold in sides of tortilla, then roll tightly from bottom.",
            "Cut in half diagonally and serve immediately."
        ],
        tags: ["wrap", "chicken", "caesar", "lunch", "portable"]
    },
    {
        id: 22,
        title: "Vegetable Curry",
        description: "Hearty Indian-style curry with mixed vegetables in a rich, spiced tomato and coconut sauce.",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=300&fit=crop",
        cuisine: "indian",
        diet: ["vegetarian", "vegan", "gluten-free"],
        cookTime: 30,
        prepTime: 20,
        servings: 6,
        difficulty: "medium",
        rating: 4.6,
        calories: 280,
        protein: "8g",
        carbs: "35g",
        fat: "12g",
        ingredients: [
            "2 potatoes, cubed",
            "1 cauliflower head, cut into florets",
            "1 cup green peas",
            "1 bell pepper, diced",
            "1 onion, diced",
            "3 cloves garlic, minced",
            "1 tbsp fresh ginger, grated",
            "1 can coconut milk",
            "1 can diced tomatoes",
            "2 tsp curry powder",
            "1 tsp turmeric",
            "1 tsp cumin",
            "1/2 tsp cinnamon",
            "Salt and cilantro for garnish"
        ],
        instructions: [
            "Heat oil in a large pot, sauté onion until golden.",
            "Add garlic, ginger, and all spices, cook for 1 minute.",
            "Add diced tomatoes and cook for 5 minutes until thickened.",
            "Add potatoes and cauliflower, stir to coat with spices.",
            "Pour in coconut milk and bring to a simmer.",
            "Cover and cook for 15 minutes until vegetables are tender.",
            "Add bell pepper and peas, cook 5 minutes more.",
            "Season with salt and adjust spices to taste.",
            "Garnish with fresh cilantro and serve with rice or naan."
        ],
        tags: ["curry", "indian", "vegetarian", "spicy", "healthy"]
    },
    {
        id: 23,
        title: "French Toast",
        description: "Classic breakfast dish with thick bread soaked in custard, cooked until golden, and served with syrup.",
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
        cuisine: "american",
        diet: ["vegetarian"],
        cookTime: 15,
        prepTime: 10,
        servings: 4,
        difficulty: "easy",
        rating: 4.5,
        calories: 350,
        protein: "12g",
        carbs: "45g",
        fat: "14g",
        ingredients: [
            "8 slices thick bread (brioche or challah)",
            "4 large eggs",
            "1/2 cup milk",
            "2 tbsp sugar",
            "1 tsp vanilla extract",
            "1/2 tsp cinnamon",
            "Pinch of salt",
            "Butter for cooking",
            "Maple syrup for serving",
            "Powdered sugar for dusting"
        ],
        instructions: [
            "In a shallow bowl, whisk together eggs, milk, sugar, vanilla, cinnamon, and salt.",
            "Heat butter in a large skillet or griddle over medium heat.",
            "Dip each bread slice in egg mixture, coating both sides well.",
            "Let excess custard drip off before placing in hot skillet.",
            "Cook for 2-3 minutes per side until golden brown.",
            "Work in batches, adding more butter as needed.",
            "Keep cooked toast warm in a 200°F oven.",
            "Dust with powdered sugar before serving.",
            "Serve immediately with warm maple syrup and butter."
        ],
        tags: ["french toast", "breakfast", "sweet", "comfort", "weekend"]
    },
    {
        id: 24,
        title: "Quinoa Stuffed Peppers",
        description: "Colorful bell peppers stuffed with seasoned quinoa, vegetables, and cheese, then baked until tender.",
        image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
        cuisine: "mediterranean",
        diet: ["vegetarian", "gluten-free"],
        cookTime: 35,
        prepTime: 25,
        servings: 4,
        difficulty: "medium",
        rating: 4.5,
        calories: 320,
        protein: "14g",
        carbs: "48g",
        fat: "10g",
        ingredients: [
            "4 large bell peppers, tops cut and seeds removed",
            "1 cup quinoa, cooked",
            "1/2 cup diced tomatoes",
            "1/2 cup corn kernels",
            "1/4 cup red onion, diced",
            "1/2 cup black beans, drained",
            "1/2 cup shredded cheese",
            "2 tbsp olive oil",
            "1 tsp cumin",
            "1/2 tsp paprika",
            "Salt and pepper to taste",
            "Fresh cilantro for garnish"
        ],
        instructions: [
            "Preheat oven to 375°F (190°C).",
            "Cook quinoa according to package directions, let cool slightly.",
            "In a large bowl, mix cooked quinoa, tomatoes, corn, onion, and black beans.",
            "Season mixture with cumin, paprika, salt, and pepper.",
            "Drizzle olive oil over mixture and stir to combine.",
            "Stuff each bell pepper with quinoa mixture, packing gently.",
            "Top each pepper with shredded cheese.",
            "Place stuffed peppers in a baking dish with 1/4 cup water.",
            "Bake for 30-35 minutes until peppers are tender and cheese is melted."
        ],
        tags: ["stuffed peppers", "quinoa", "vegetarian", "healthy", "dinner"]
    }
];

// Helper functions for filtering and searching
const RecipeHelper = {
    // Filter recipes by various criteria
    filterRecipes: function(recipes, filters) {
        return recipes.filter(recipe => {
            // Search filter
            if (filters.search) {
                const searchTerm = filters.search.toLowerCase();
                const searchableText = `${recipe.title} ${recipe.description} ${recipe.ingredients.join(' ')} ${recipe.tags.join(' ')}`.toLowerCase();
                if (!searchableText.includes(searchTerm)) {
                    return false;
                }
            }

            // Cuisine filter
            if (filters.cuisine && recipe.cuisine !== filters.cuisine) {
                return false;
            }

            // Diet filter
            if (filters.diet && !recipe.diet.includes(filters.diet)) {
                return false;
            }

            // Time filter
            if (filters.time) {
                const maxTime = parseInt(filters.time);
                if (recipe.cookTime + recipe.prepTime > maxTime) {
                    return false;
                }
            }

            // Difficulty filter
            if (filters.difficulty && recipe.difficulty !== filters.difficulty) {
                return false;
            }

            return true;
        });
    },

    // Sort recipes by various criteria
    sortRecipes: function(recipes, sortBy) {
        const sortedRecipes = [...recipes];
        
        switch (sortBy) {
            case 'rating':
                return sortedRecipes.sort((a, b) => b.rating - a.rating);
            case 'time':
                return sortedRecipes.sort((a, b) => (a.cookTime + a.prepTime) - (b.cookTime + b.prepTime));
            case 'name':
                return sortedRecipes.sort((a, b) => a.title.localeCompare(b.title));
            case 'calories':
                return sortedRecipes.sort((a, b) => a.calories - b.calories);
            default:
                return sortedRecipes;
        }
    },

    // Get recipes by category
    getRecipesByCategory: function(recipes, category) {
        return recipes.filter(recipe => 
            recipe.cuisine === category || 
            recipe.diet.includes(category) ||
            recipe.tags.includes(category)
        );
    },

    // Get featured recipes
    getFeaturedRecipes: function(recipes, count = 6) {
        return recipes
            .filter(recipe => recipe.rating >= 4.5)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, count);
    },

    // Get random recipes
    getRandomRecipes: function(recipes, count = 3) {
        const shuffled = [...recipes].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // Format cooking time
    formatTime: function(minutes) {
        if (minutes < 60) {
            return `${minutes} min`;
        } else {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            if (remainingMinutes === 0) {
                return `${hours} hr`;
            } else {
                return `${hours} hr ${remainingMinutes} min`;
            }
        }
    },

    // Generate star rating HTML
    generateStarRating: function(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let starsHTML = '';

        for (let i = 0; i < fullStars; i++) {
            starsHTML += '<i class="fas fa-star star"></i>';
        }

        if (hasHalfStar) {
            starsHTML += '<i class="fas fa-star-half-alt star"></i>';
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            starsHTML += '<i class="far fa-star star empty"></i>';
        }

        return starsHTML;
    }
};

// Export for use in main.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { recipesData, RecipeHelper };
}