const express = require('express');
const router = express.Router();
const story_controller = require('../controllers/storyController');

// POST ROUTES
router.post('/addstory', story_controller.addstory);


//  GET ROUTES

router.get('/getstories', story_controller.getstories);


module.exports = router;
