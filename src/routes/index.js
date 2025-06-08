const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');
const AboutController = require('../controllers/AboutController');

router.get('/', HomeController.index);
router.get('/about', AboutController.index);

module.exports = router; 