const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipes');

// Route for browsing recipes
router.get('/', recipeController.recipeList); // This serves the recipe list

module.exports = router;
