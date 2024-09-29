const recipesData = [
    {
        id: 1,
        name: 'Spaghetti Carbonara',
        ingredients: ['Spaghetti', 'Eggs', 'Parmesan cheese', 'Pancetta', 'Pepper'],
        cookingTime: 'Ready in 20 minutes of Italian bliss!',
        description: 'A classic Italian pasta dish that combines creamy eggs, savory pancetta, and rich Parmesan cheese, making every bite an indulgent delight.',
        funFact: 'Did you know? Carbonara is believed to have originated in the mid-20th century and is named after the charcoal workers of the Apennine mountains!',
        imageUrl: '/images/spaghetti.jpg'
    },
    {
        id: 2,
        name: 'Chicken Tikka Masala',
        ingredients: ['Chicken', 'Yogurt', 'Tomato sauce', 'Spices', 'Rice'],
        cookingTime: 'A delicious experience in just 40 minutes!',
        description: 'This dish features marinated chicken pieces grilled to perfection, then simmered in a rich and creamy tomato sauce, creating a harmonious blend of spices.',
        funFact: 'Chicken Tikka Masala is so popular in the UK that it is often considered a national dish!',
        imageUrl: '/images/ctm.jpg'
    },
    {
        id: 3,
        name: 'Vegetable Stir-Fry',
        ingredients: ['Mixed vegetables', 'Soy sauce', 'Garlic', 'Ginger', 'Rice or noodles'],
        cookingTime: 'Quick and colorful in just 15 minutes!',
        description: 'A vibrant and healthy mix of fresh vegetables, quickly stir-fried with garlic and ginger, bringing a burst of color and flavor to your table.',
        funFact: 'Did you know? Stir-frying is a traditional Chinese cooking method that retains the nutrients and colors of vegetables!',
        imageUrl: '/images/VegStirFry.jpg'
    },
    {
        id: 4,
        name: 'Caprese Salad',
        ingredients: ['Tomatoes', 'Mozzarella cheese', 'Basil', 'Olive oil', 'Balsamic vinegar'],
        cookingTime: 'Whip this fresh delight up in just 10 minutes!',
        description: 'A delightful Italian salad showcasing the fresh flavors of ripe tomatoes, creamy mozzarella, and fragrant basil, drizzled with olive oil and balsamic vinegar.',
        funFact: 'Interesting tidbit: Caprese Salad is named after the island of Capri in Italy, symbolizing the colors of the Italian flag!',
        imageUrl: '/images/caprese.jpg'
    },
    {
        id: 5,
        name: 'Shrimp Tacos',
        ingredients: ['Shrimp', 'Corn tortillas', 'Cabbage', 'Avocado', 'Lime', 'Salsa'],
        cookingTime: 'Enjoy these zesty tacos in just 25 minutes!',
        description: 'These mouthwatering shrimp tacos are packed with succulent shrimp, crunchy cabbage, and creamy avocado, topped with a zesty salsa for a burst of flavor.',
        funFact: 'Did you know? Tacos originated in Mexico in the 18th century and have become a beloved dish worldwide!',
        imageUrl: '/images/shrimp.jpg'
    },
    {
        id: 6,
        name: 'Chickpea Salad',
        ingredients: ['Chickpeas', 'Cucumbers', 'Tomatoes', 'Red onion', 'Parsley', 'Lemon juice', 'Olive oil'],
        cookingTime: 'A refreshing dish ready in just 10 minutes!',
        description: 'A refreshing and nutritious salad featuring chickpeas and crisp vegetables, tossed in a zesty lemon dressing for a delightful crunch.',
        funFact: 'Fun fact: Chickpeas have been cultivated in Middle Eastern countries for thousands of years, making them one of the oldest cultivated legumes!',
        imageUrl: '/images/chickpeasalad.jpg'
    }
];

// Render the list of recipes
module.exports.recipeList = function(req, res) {
    res.render('recipes', {
        title: 'Recipe Finder - Discover Delicious Recipes',
        recipes: recipesData
    });
};

// Render specific recipe information
module.exports.recipeInfo = function(req, res) {
    const recipeId = req.params.id; // Get recipe ID from URL
    const recipe = recipesData.find(r => r.id == recipeId); // Find recipe by ID

    if (recipe) {
        res.render('recipe-info', {
            title: recipe.name,
            recipe: recipe
        });
    } else {
        res.status(404).render('error', { title: 'Recipe Not Found' });
    }
};

// Render the form to add a new recipe
module.exports.addRecipe = function(req, res) {
    res.render('add-recipe-form', { title: 'Add a New Recipe' });
};
