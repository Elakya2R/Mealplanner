// Recipe Finder Application - Main JavaScript File

class RecipeFinder {
    constructor() {
        this.recipes = recipesData;
        this.filteredRecipes = [...this.recipes];
        this.currentPage = 1;
        this.recipesPerPage = 6;
        this.currentView = 'grid';
        this.favorites = JSON.parse(localStorage.getItem('recipe-favorites')) || [];
        this.currentFilters = {
            search: '',
            cuisine: '',
            diet: '',
            time: '',
            difficulty: ''
        };

        this.init();
    }

    init() {
        this.bindEvents();
        this.displayRecipes();
        this.updateResultsCount();
        this.setupMobileMenu();
    }

    bindEvents() {
        // Search functionality
        const searchInput = document.getElementById('recipe-search');
        const searchButton = document.getElementById('search-button');
        
        searchInput.addEventListener('input', this.debounce((e) => {
            this.currentFilters.search = e.target.value;
            this.applyFilters();
        }, 300));

        searchButton.addEventListener('click', () => {
            this.currentFilters.search = searchInput.value;
            this.applyFilters();
        });

        // Enter key search
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.currentFilters.search = searchInput.value;
                this.applyFilters();
            }
        });

        // Filter controls
        document.getElementById('cuisine-filter').addEventListener('change', (e) => {
            this.currentFilters.cuisine = e.target.value;
            this.applyFilters();
        });

        document.getElementById('diet-filter').addEventListener('change', (e) => {
            this.currentFilters.diet = e.target.value;
            this.applyFilters();
        });

        document.getElementById('time-filter').addEventListener('change', (e) => {
            this.currentFilters.time = e.target.value;
            this.applyFilters();
        });

        document.getElementById('difficulty-filter').addEventListener('change', (e) => {
            this.currentFilters.difficulty = e.target.value;
            this.applyFilters();
        });

        // Clear filters
        document.getElementById('clear-filters').addEventListener('click', () => {
            this.clearFilters();
        });

        // View toggle
        document.querySelectorAll('.view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.toggleView(e.target.closest('.view-btn').dataset.view);
            });
        });

        // Load more button
        document.getElementById('load-more').addEventListener('click', () => {
            this.loadMoreRecipes();
        });

        // Modal events
        document.getElementById('modal-close').addEventListener('click', () => {
            this.closeModal();
        });

        document.getElementById('recipe-modal').addEventListener('click', (e) => {
            if (e.target.id === 'recipe-modal') {
                this.closeModal();
            }
        });

        // Navigation
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleNavigation(e.target);
            });
        });

        // Footer category links
        document.querySelectorAll('[data-cuisine]').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const cuisine = e.target.dataset.cuisine;
                this.currentFilters.cuisine = cuisine;
                document.getElementById('cuisine-filter').value = cuisine;
                this.applyFilters();
                this.scrollToSection('recipes');
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = anchor.getAttribute('href').substring(1);
                this.scrollToSection(target);
            });
        });
    }

    // Debounce function for search input
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply filters to recipes
    applyFilters() {
        this.showLoading();
        
        setTimeout(() => {
            this.filteredRecipes = RecipeHelper.filterRecipes(this.recipes, this.currentFilters);
            this.currentPage = 1;
            this.displayRecipes();
            this.updateResultsCount();
            this.hideLoading();
        }, 300);
    }

    // Clear all filters
    clearFilters() {
        this.currentFilters = {
            search: '',
            cuisine: '',
            diet: '',
            time: '',
            difficulty: ''
        };

        // Reset form elements
        document.getElementById('recipe-search').value = '';
        document.getElementById('cuisine-filter').value = '';
        document.getElementById('diet-filter').value = '';
        document.getElementById('time-filter').value = '';
        document.getElementById('difficulty-filter').value = '';

        this.applyFilters();
    }

    // Display recipes
    displayRecipes() {
        const container = document.getElementById('recipes-container');
        const recipesToShow = this.filteredRecipes.slice(0, this.currentPage * this.recipesPerPage);
        
        container.innerHTML = '';
        
        if (recipesToShow.length === 0) {
            container.innerHTML = this.getNoResultsHTML();
            document.getElementById('load-more').style.display = 'none';
            return;
        }

        recipesToShow.forEach(recipe => {
            const recipeCard = this.createRecipeCard(recipe);
            container.appendChild(recipeCard);
        });

        // Show/hide load more button
        const loadMoreBtn = document.getElementById('load-more');
        if (recipesToShow.length < this.filteredRecipes.length) {
            loadMoreBtn.style.display = 'block';
        } else {
            loadMoreBtn.style.display = 'none';
        }

        // Add animation
        this.animateCards();
    }

    // Create recipe card element
    createRecipeCard(recipe) {
        const card = document.createElement('div');
        card.className = 'recipe-card fade-in';
        card.setAttribute('data-recipe-id', recipe.id);

        const isFavorite = this.favorites.includes(recipe.id);
        const totalTime = recipe.prepTime + recipe.cookTime;

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                <div class="recipe-meta">
                    <div class="recipe-time">
                        <i class="fas fa-clock"></i>
                        ${RecipeHelper.formatTime(totalTime)}
                    </div>
                    <div class="recipe-difficulty">
                        <i class="fas fa-signal"></i>
                        ${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
                    </div>
                </div>
                <div class="recipe-tags">
                    <span class="recipe-tag cuisine">${recipe.cuisine.charAt(0).toUpperCase() + recipe.cuisine.slice(1)}</span>
                    ${recipe.diet.map(diet => `<span class="recipe-tag diet">${diet.charAt(0).toUpperCase() + diet.slice(1)}</span>`).join('')}
                </div>
                <div class="recipe-actions">
                    <div class="recipe-rating">
                        ${RecipeHelper.generateStarRating(recipe.rating)}
                        <span>${recipe.rating}</span>
                    </div>
                    <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-recipe-id="${recipe.id}">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
        `;

        // Add click event to open modal
        card.addEventListener('click', (e) => {
            if (!e.target.closest('.favorite-btn')) {
                this.openRecipeModal(recipe);
            }
        });

        // Add favorite button event
        const favoriteBtn = card.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleFavorite(recipe.id);
        });

        return card;
    }

    // Get no results HTML
    getNoResultsHTML() {
        return `
            <div class="no-results text-center">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--gray-400); margin-bottom: 1rem;"></i>
                <h3>No recipes found</h3>
                <p>Try adjusting your search criteria or clear the filters to see more recipes.</p>
                <button class="clear-filters-btn" onclick="recipeFinder.clearFilters()">
                    <i class="fas fa-times"></i>
                    Clear All Filters
                </button>
            </div>
        `;
    }

    // Load more recipes
    loadMoreRecipes() {
        this.currentPage++;
        this.displayRecipes();
    }

    // Toggle view between grid and list
    toggleView(view) {
        this.currentView = view;
        const container = document.getElementById('recipes-container');
        const viewBtns = document.querySelectorAll('.view-btn');

        // Update active button
        viewBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });

        // Update container class
        if (view === 'list') {
            container.classList.add('list-view');
        } else {
            container.classList.remove('list-view');
        }
    }

    // Open recipe modal
    openRecipeModal(recipe) {
        const modal = document.getElementById('recipe-modal');
        const modalBody = document.getElementById('modal-body');
        
        modalBody.innerHTML = this.createModalContent(recipe);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Add ingredients checklist functionality
        this.setupIngredientsChecklist();
    }

    // Create modal content
    createModalContent(recipe) {
        const totalTime = recipe.prepTime + recipe.cookTime;
        const isFavorite = this.favorites.includes(recipe.id);

        return `
            <img src="${recipe.image}" alt="${recipe.title}" class="modal-recipe-image">
            <h2 class="modal-recipe-title">${recipe.title}</h2>
            
            <div class="modal-recipe-meta">
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Prep Time</div>
                    <div class="modal-meta-value">${RecipeHelper.formatTime(recipe.prepTime)}</div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Cook Time</div>
                    <div class="modal-meta-value">${RecipeHelper.formatTime(recipe.cookTime)}</div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Total Time</div>
                    <div class="modal-meta-value">${RecipeHelper.formatTime(totalTime)}</div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Servings</div>
                    <div class="modal-meta-value">${recipe.servings}</div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Difficulty</div>
                    <div class="modal-meta-value">${recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}</div>
                </div>
                <div class="modal-meta-item">
                    <div class="modal-meta-label">Rating</div>
                    <div class="modal-meta-value">
                        ${RecipeHelper.generateStarRating(recipe.rating)} ${recipe.rating}
                    </div>
                </div>
            </div>

            <div class="d-flex justify-center gap-2 mb-3">
                <button class="favorite-btn ${isFavorite ? 'active' : ''}" data-recipe-id="${recipe.id}" style="padding: 0.75rem 1.5rem; border-radius: var(--border-radius); border: 2px solid var(--primary-color); background: ${isFavorite ? 'var(--primary-color)' : 'transparent'}; color: ${isFavorite ? 'white' : 'var(--primary-color)'};">
                    <i class="fas fa-heart"></i>
                    ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Nutrition Information</h3>
                <div class="modal-recipe-meta">
                    <div class="modal-meta-item">
                        <div class="modal-meta-label">Calories</div>
                        <div class="modal-meta-value">${recipe.calories}</div>
                    </div>
                    <div class="modal-meta-item">
                        <div class="modal-meta-label">Protein</div>
                        <div class="modal-meta-value">${recipe.protein}</div>
                    </div>
                    <div class="modal-meta-item">
                        <div class="modal-meta-label">Carbs</div>
                        <div class="modal-meta-value">${recipe.carbs}</div>
                    </div>
                    <div class="modal-meta-item">
                        <div class="modal-meta-label">Fat</div>
                        <div class="modal-meta-value">${recipe.fat}</div>
                    </div>
                </div>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Ingredients</h3>
                <ul class="ingredients-list">
                    ${recipe.ingredients.map(ingredient => `
                        <li>
                            <input type="checkbox" class="ingredient-checkbox" id="ingredient-${recipe.id}-${recipe.ingredients.indexOf(ingredient)}">
                            <label for="ingredient-${recipe.id}-${recipe.ingredients.indexOf(ingredient)}">${ingredient}</label>
                        </li>
                    `).join('')}
                </ul>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Instructions</h3>
                <ol class="instructions-list">
                    ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                </ol>
            </div>

            <div class="modal-section">
                <h3 class="modal-section-title">Tags</h3>
                <div class="recipe-tags">
                    ${recipe.tags.map(tag => `<span class="recipe-tag">${tag.charAt(0).toUpperCase() + tag.slice(1)}</span>`).join('')}
                </div>
            </div>
        `;
    }

    // Setup ingredients checklist
    setupIngredientsChecklist() {
        const checkboxes = document.querySelectorAll('.ingredient-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const label = e.target.nextElementSibling;
                if (e.target.checked) {
                    label.style.textDecoration = 'line-through';
                    label.style.opacity = '0.6';
                } else {
                    label.style.textDecoration = 'none';
                    label.style.opacity = '1';
                }
            });
        });

        // Setup favorite button in modal
        const favoriteBtn = document.querySelector('.modal-body .favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', (e) => {
                const recipeId = parseInt(e.target.closest('.favorite-btn').dataset.recipeId);
                this.toggleFavorite(recipeId);
                
                // Update button appearance
                const isFavorite = this.favorites.includes(recipeId);
                e.target.closest('.favorite-btn').classList.toggle('active', isFavorite);
                e.target.closest('.favorite-btn').innerHTML = `
                    <i class="fas fa-heart"></i>
                    ${isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
                `;
                e.target.closest('.favorite-btn').style.background = isFavorite ? 'var(--primary-color)' : 'transparent';
                e.target.closest('.favorite-btn').style.color = isFavorite ? 'white' : 'var(--primary-color)';
            });
        }
    }

    // Close modal
    closeModal() {
        const modal = document.getElementById('recipe-modal');
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Toggle favorite
    toggleFavorite(recipeId) {
        const index = this.favorites.indexOf(recipeId);
        if (index > -1) {
            this.favorites.splice(index, 1);
        } else {
            this.favorites.push(recipeId);
        }

        localStorage.setItem('recipe-favorites', JSON.stringify(this.favorites));
        this.updateFavoriteButtons(recipeId);
    }

    // Update favorite buttons
    updateFavoriteButtons(recipeId) {
        const favoriteButtons = document.querySelectorAll(`[data-recipe-id="${recipeId}"]`);
        const isFavorite = this.favorites.includes(recipeId);

        favoriteButtons.forEach(btn => {
            btn.classList.toggle('active', isFavorite);
        });
    }

    // Update results count
    updateResultsCount() {
        const countElement = document.getElementById('results-count');
        const count = this.filteredRecipes.length;
        countElement.textContent = `${count} recipe${count !== 1 ? 's' : ''} found`;
    }

    // Handle navigation
    handleNavigation(link) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add active class to clicked link
        link.classList.add('active');

        // Handle specific navigation actions
        const href = link.getAttribute('href');
        if (href === '#favorites') {
            this.showFavorites();
        } else if (href === '#recipes') {
            this.clearFilters();
            this.scrollToSection('recipes');
        } else {
            this.scrollToSection(href.substring(1));
        }
    }

    // Show favorites
    showFavorites() {
        if (this.favorites.length === 0) {
            this.showNoFavoritesMessage();
            return;
        }

        const favoriteRecipes = this.recipes.filter(recipe => this.favorites.includes(recipe.id));
        this.filteredRecipes = favoriteRecipes;
        this.currentPage = 1;
        this.displayRecipes();
        this.updateResultsCount();
        this.scrollToSection('recipes');
    }

    // Show no favorites message
    showNoFavoritesMessage() {
        const container = document.getElementById('recipes-container');
        container.innerHTML = `
            <div class="no-results text-center">
                <i class="fas fa-heart" style="font-size: 4rem; color: var(--gray-400); margin-bottom: 1rem;"></i>
                <h3>No favorite recipes yet</h3>
                <p>Start exploring recipes and add your favorites by clicking the heart icon!</p>
                <button class="load-more-btn" onclick="recipeFinder.handleNavigation(document.querySelector('[href=\\'#recipes\\']'))">
                    Browse Recipes
                </button>
            </div>
        `;
        document.getElementById('results-count').textContent = '0 recipes found';
        this.scrollToSection('recipes');
    }

    // Scroll to section
    scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const sectionTop = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: sectionTop,
                behavior: 'smooth'
            });
        }
    }

    // Setup mobile menu
    setupMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle');
        const nav = document.querySelector('.nav');

        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header-content')) {
                nav.classList.remove('active');
            }
        });
    }

    // Animate cards
    animateCards() {
        const cards = document.querySelectorAll('.recipe-card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Show loading
    showLoading() {
        const spinner = document.getElementById('loading-spinner');
        spinner.classList.add('active');
    }

    // Hide loading
    hideLoading() {
        const spinner = document.getElementById('loading-spinner');
        spinner.classList.remove('active');
    }

    // Get random recipe of the day
    getRecipeOfTheDay() {
        const today = new Date().getDate();
        const recipeIndex = today % this.recipes.length;
        return this.recipes[recipeIndex];
    }

    // Search suggestions (for future enhancement)
    getSearchSuggestions(query) {
        const suggestions = [];
        const lowerQuery = query.toLowerCase();

        this.recipes.forEach(recipe => {
            // Check title
            if (recipe.title.toLowerCase().includes(lowerQuery)) {
                suggestions.push(recipe.title);
            }

            // Check ingredients
            recipe.ingredients.forEach(ingredient => {
                if (ingredient.toLowerCase().includes(lowerQuery) && !suggestions.includes(ingredient)) {
                    suggestions.push(ingredient);
                }
            });

            // Check tags
            recipe.tags.forEach(tag => {
                if (tag.toLowerCase().includes(lowerQuery) && !suggestions.includes(tag)) {
                    suggestions.push(tag);
                }
            });
        });

        return suggestions.slice(0, 5); // Return top 5 suggestions
    }
}

// Utility functions
const Utils = {
    // Format number with commas
    formatNumber: (num) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    // Capitalize first letter
    capitalize: (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    // Get random items from array
    getRandomItems: (arr, count) => {
        const shuffled = arr.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.recipeFinder = new RecipeFinder();

    // Add some additional enhancements
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Escape key to close modal
        if (e.key === 'Escape') {
            recipeFinder.closeModal();
        }
        
        // Ctrl/Cmd + K to focus search
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            document.getElementById('recipe-search').focus();
        }
    });

    // Print recipe functionality (can be added to modal)
    window.printRecipe = (recipe) => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
            <html>
                <head>
                    <title>${recipe.title} - Recipe</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; }
                        h1 { color: #333; }
                        .meta { background: #f5f5f5; padding: 15px; margin: 20px 0; }
                        .ingredients, .instructions { margin: 20px 0; }
                        .ingredients li, .instructions li { margin: 5px 0; }
                        @media print { body { margin: 0; } }
                    </style>
                </head>
                <body>
                    <h1>${recipe.title}</h1>
                    <p>${recipe.description}</p>
                    <div class="meta">
                        <strong>Prep Time:</strong> ${RecipeHelper.formatTime(recipe.prepTime)} | 
                        <strong>Cook Time:</strong> ${RecipeHelper.formatTime(recipe.cookTime)} | 
                        <strong>Servings:</strong> ${recipe.servings} | 
                        <strong>Difficulty:</strong> ${recipe.difficulty}
                    </div>
                    <h2>Ingredients</h2>
                    <ul class="ingredients">
                        ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
                    </ul>
                    <h2>Instructions</h2>
                    <ol class="instructions">
                        ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
                    </ol>
                </body>
            </html>
        `);
        printWindow.document.close();
        printWindow.print();
    };

    console.log('Recipe Finder App initialized successfully! 🍳');
});