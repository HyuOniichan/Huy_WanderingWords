const router = require('express').Router(); 
const blogController = require('../controllers/blogController');

router.get(`/draft`, blogController.showDraft)
router.get(`/deleted`, blogController.showDeleted)
router.get(`/:id`, blogController.showOne)
router.get(`/`, blogController.show)
router.post(`/`, blogController.create)
router.delete(`/:id`, blogController.delete)
router.put(`/:id`, blogController.update)

module.exports = router; 
