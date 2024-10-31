const router = require('express').Router(); 
const blogController = require('../controllers/blogController');

router.get(`/:id`, blogController.showOne)
router.get(`/`, blogController.show)

module.exports = router; 
