const express = require('express');
const router = express.Router();
const moviesController = require('../controllers/moviesController')

router.get('/', moviesController.index);
router.get('/detail/:id', moviesController.detail);
router.get('/new', moviesController.new);
router.get('/recommended', moviesController.recommended);
router.post('/search', moviesController.search);
router.get('/update/:id', moviesController.update);
router.post('/modify/:id', moviesController.modify);
router.delete('/delete/:id', moviesController.delete);

module.exports = router;