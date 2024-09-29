const express = require('express');
const router = express.Router();
const categoriesController = require('../controllers/categories');

router.get('/categories', categoriesController.getCategories);

module.exports = router;
