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

module.exports.getCategories = function(req, res) {
    console.log('Categories:', categories); // Ensure this logs the correct data
    res.render('categories', {
        title: 'Recipe Categories',
        categories: categoriesData
    });
};

