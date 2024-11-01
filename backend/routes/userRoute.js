const router = require('express').Router(); 
const userController = require('../controllers/userController');

router.get(`/`, userController.show)
router.get(`/:username`, userController.showOne)

module.exports = router; 
