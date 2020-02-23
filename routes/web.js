const express = require('express');
const router = express.Router();
const story_controller = require('../controllers/storyController');
const msg_controller = require('../controllers/msgController')

// POST ROUTES
router.post('/addstory', story_controller.addstory);
router.post('/triggermsg', msg_controller.triggersms);


//  GET ROUTES

router.get('/getstories', story_controller.getstories);


module.exports = router;
