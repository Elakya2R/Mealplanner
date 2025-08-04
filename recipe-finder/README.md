# Recipe Finder 🍳

A modern, responsive frontend web application for discovering and managing recipes. Built with vanilla HTML, CSS, and JavaScript, featuring a beautiful user interface and comprehensive recipe management capabilities.

![Recipe Finder Screenshot](https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400&fit=crop)

## ✨ Features

### 🔍 **Advanced Search & Filtering**
- **Smart Search**: Search by recipe name, ingredients, or tags
- **Multiple Filters**: Filter by cuisine, dietary preferences, cooking time, and difficulty level
- **Real-time Results**: Instant filtering as you type
- **Clear Filters**: One-click filter reset

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all device sizes
- **Modern UI**: Clean, intuitive interface with smooth animations
- **Grid/List Views**: Toggle between card grid and detailed list layouts
- **Touch-Friendly**: Optimized for mobile interactions

### 🍽️ **Recipe Management**
- **Detailed Recipe Cards**: High-quality images, ratings, and quick info
- **Full Recipe Modal**: Complete ingredients, instructions, and nutrition info
- **Interactive Ingredients**: Checkbox ingredients list for cooking
- **Favorites System**: Save and manage favorite recipes locally
- **Recipe Rating**: Star-based rating system

### 🎯 **User Experience**
- **Fast Loading**: Optimized performance with lazy loading
- **Smooth Animations**: CSS animations and transitions
- **Keyboard Shortcuts**: Quick access with keyboard commands
- **Print Recipes**: Print-friendly recipe format
- **Local Storage**: Persistent favorites across sessions

### 📊 **Recipe Information**
- **Nutritional Data**: Calories, protein, carbs, and fat content
- **Cooking Times**: Prep time, cook time, and total time
- **Difficulty Levels**: Easy, medium, and hard classifications
- **Dietary Tags**: Vegetarian, vegan, gluten-free, keto, and more
- **Cuisine Types**: Italian, Mexican, Asian, American, Mediterranean, Indian

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Optional: Local web server for development

### Installation

1. **Download the Project**
   ```bash
   # Extract the zip file to your desired location
   unzip recipe-finder.zip
   cd recipe-finder
   ```

2. **Open in Browser**
   ```bash
   # Option 1: Direct file opening
   open index.html
   
   # Option 2: Using Python (recommended)
   python -m http.server 3000
   # Then visit: http://localhost:3000
   
   # Option 3: Using Node.js live-server
   npm install -g live-server
   live-server --port=3000
   ```

3. **Start Exploring!**
   - Browse the recipe collection
   - Use filters to find specific recipes
   - Click on recipes to view detailed information
   - Add recipes to your favorites

## 📁 Project Structure

```
recipe-finder/
├── index.html              # Main HTML file
├── package.json            # Project configuration
├── README.md              # This file
├── styles/
│   └── main.css           # Main stylesheet
├── js/
│   ├── data.js           # Recipe data and helper functions
│   └── main.js           # Main application logic
└── assets/               # Images and other assets (if any)
```

## 🎮 Usage Guide

### Basic Navigation
- **Home**: Hero section with main search
- **Recipes**: Browse all recipes with filters
- **Favorites**: View saved favorite recipes
- **About**: Information about the application

### Search & Filtering
1. **Text Search**: Type in the search bar to find recipes by name, ingredients, or tags
2. **Cuisine Filter**: Select from Italian, Mexican, Asian, American, Mediterranean, Indian
3. **Diet Filter**: Choose from Vegetarian, Vegan, Gluten-Free, Keto, Paleo
4. **Time Filter**: Filter by cooking time (Under 15 min, 30 min, 1 hour, 2 hours)
5. **Difficulty Filter**: Select Easy, Medium, or Hard recipes
6. **Clear Filters**: Reset all filters with one click

### Recipe Interaction
- **View Recipe**: Click any recipe card to open detailed modal
- **Add to Favorites**: Click the heart icon to save recipes
- **Check Ingredients**: Use checkboxes while cooking
- **Print Recipe**: Use browser print function in modal
- **Close Modal**: Click X, outside modal, or press Escape key

### View Options
- **Grid View**: Card-based layout (default)
- **List View**: Detailed horizontal layout
- **Load More**: Pagination with "Load More" button

### Keyboard Shortcuts
- `Ctrl/Cmd + K`: Focus search input
- `Escape`: Close modal
- `Enter`: Search when in search input

## 🛠️ Customization

### Adding New Recipes
Edit `js/data.js` and add new recipe objects to the `recipesData` array:

```javascript
{
    id: 25, // Unique ID
    title: "Your Recipe Name",
    description: "Brief description",
    image: "https://your-image-url.com/image.jpg",
    cuisine: "italian", // lowercase
    diet: ["vegetarian"], // array of diet types
    cookTime: 30, // minutes
    prepTime: 15, // minutes
    servings: 4,
    difficulty: "easy", // easy, medium, hard
    rating: 4.5, // 0-5 scale
    calories: 350,
    protein: "20g",
    carbs: "45g",
    fat: "15g",
    ingredients: [
        "Ingredient 1",
        "Ingredient 2"
    ],
    instructions: [
        "Step 1 instructions",
        "Step 2 instructions"
    ],
    tags: ["tag1", "tag2"]
}
```

### Styling Customization
Modify CSS variables in `styles/main.css`:

```css
:root {
    --primary-color: #ff6b35;     /* Main theme color */
    --secondary-color: #2c3e50;   /* Secondary color */
    --accent-color: #3498db;      /* Accent color */
    /* ... other variables */
}
```

### Adding New Features
The application is built with modular JavaScript classes:
- `RecipeFinder`: Main application class
- `RecipeHelper`: Utility functions for recipes
- `Utils`: General utility functions

## 🌟 Sample Recipes Included

The application comes with 24 diverse recipes including:

- **Italian**: Margherita Pizza, Mushroom Risotto, Caprese Salad
- **Mexican**: Chicken Tacos al Pastor, Fish Tacos
- **Asian**: Pad Thai, Korean Bibimbap, Thai Green Curry, Ramen Bowl, Beef Stir Fry
- **American**: Caesar Salad, Beef Burger, Pancakes, French Toast, Avocado Toast
- **Mediterranean**: Quinoa Bowl, Greek Moussaka, Greek Salad, Stuffed Peppers
- **Indian**: Chicken Tikka Masala, Vegetable Curry
- **Desserts**: Chocolate Chip Cookies, Banana Bread

Each recipe includes:
- High-quality food photography
- Detailed ingredients list
- Step-by-step instructions
- Nutritional information
- Cooking times and difficulty ratings
- Dietary and cuisine tags

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

### Local Development Setup
```bash
# Clone or extract the project
cd recipe-finder

# Install development dependencies (optional)
npm install

# Start development server
npm run dev
# or
python -m http.server 3000
```

### Build for Production
The application is already production-ready! Simply:
1. Upload all files to your web server
2. Ensure proper MIME types for CSS and JS files
3. Configure HTTPS for better performance
4. Enable gzip compression for faster loading

## 🤝 Contributing

This is a frontend-only project perfect for learning and customization:

1. **Add More Recipes**: Expand the recipe database
2. **Improve UI/UX**: Enhance the design and user experience
3. **Add Features**: Implement new functionality like recipe ratings, comments, or sharing
4. **Optimize Performance**: Improve loading times and responsiveness
5. **Accessibility**: Enhance screen reader support and keyboard navigation

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Images**: Recipe photos from [Unsplash](https://unsplash.com)
- **Icons**: Font Awesome icons
- **Fonts**: Inter font family from Google Fonts
- **Inspiration**: Modern recipe and food websites

## 📞 Support

For questions, issues, or suggestions:

1. Check the browser console for any error messages
2. Ensure all files are properly loaded
3. Verify your browser supports modern JavaScript features
4. Try refreshing the page or clearing browser cache

---

**Happy Cooking! 👨‍🍳👩‍🍳**

Enjoy exploring delicious recipes with Recipe Finder. Whether you're a beginner cook or a culinary expert, you'll find something perfect for every occasion!