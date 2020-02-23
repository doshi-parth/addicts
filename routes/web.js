const express = require('express');
const router = express.Router();
const story_controller = require('../controllers/storyController');
const msg_controller = require('../controllers/msgController');
const streak_controller = require('../controllers/streakController')

// POST ROUTES
router.post('/addstory', story_controller.addstory);
router.post('/triggermsg', msg_controller.triggersms);
router.post('/addcontent', streak_controller.addcontent);
router.get('/getcontent', streak_controller.getstreaks);




//  GET ROUTES

router.get('/getstories', story_controller.getstories);


module.exports = router;
