// app_server/routes/index.js
var express = require('express');
var router = express.Router();
var ctrlRecipes = require('../controllers/recipes'); 
const categoriesController = require('../controllers/categories');

// Home route
router.get('/', function(req, res) {
    res.render('index', { title: 'Recipe Hub' });
});

// Recipe routes
router.get('/recipes', ctrlRecipes.recipeList);
router.get('/recipes/:id', ctrlRecipes.recipeInfo);

router.get('/categories', (req, res) => {
    const categoriesData = [
        {
            name: 'Breakfast',
            items: [
                {
                    name: 'Pancakes',
                    description: 'Fluffy pancakes served with syrup and berries.',
                    image: '/images/pancakes.jpg'
                },
                {
                    name: 'Omelette',
                    description: 'A delicious omelette filled with cheese and veggies.',
                    image: '/images/omelette.jpg'
                },
                {
                    name: 'Smoothie Bowl',
                    description: 'A refreshing smoothie bowl topped with fruits and nuts.',
                    image: '/images/smoothie.jpg'
                }
            ]
        },
        {
            name: 'Lunch',
            items: [
                {
                    name: 'Caesar Salad',
                    description: 'Classic Caesar salad with crispy croutons and dressing.',
                    image: '/images/caesar.jpg'
                },
                {
                    name: 'Sandwich',
                    description: 'A hearty sandwich with your choice of fillings.',
                    image: '/images/sandwich.jpg'
                },
                {
                    name: 'Quinoa Bowl',
                    description: 'Nutritious quinoa bowl with mixed vegetables.',
                    image: '/images/quinoa.jpg'
                }
            ]
        },
        {
            name: 'Snacks',
            items: [
                {
                    name: 'Hummus',
                    description: 'Creamy hummus served with fresh veggies.',
                    image: '/images/hummus.jpg'
                },
                {
                    name: 'Fruit Platter',
                    description: 'A colorful platter of seasonal fruits.',
                    image: '/images/platter.jpg'
                },
                {
                    name: 'Popcorn',
                    description: 'Freshly popped popcorn, perfect for snacking.',
                    image: '/images/popcorn.jpg'
                }
            ]
        },
        {
            name: 'Desserts',
            items: [
                {
                    name: 'Chocolate Cake',
                    description: 'Decadent chocolate cake with rich frosting.',
                    image: '/images/chococake.jpg'
                },
                {
                    name: 'Fruit Tart',
                    description: 'Delicious tart topped with fresh fruits.',
                    image: '/images/fruittart.jpg'
                },
                {
                    name: 'Ice Cream Sundae',
                    description: 'Classic ice cream sundae with toppings.',
                    image: '/images/icecream.jpg'
                }
            ]
        }
    ];
    const title = "Recipe Categories"; 
    res.render('categories', { categoriesData, title });
});

router.get('/reviews', function(req, res) {
    res.render('reviews', { title: 'Reviews' });
});
router.get('/about', function(req, res) {
    res.render('about', { title: 'About Us' });
});


module.exports = router;

