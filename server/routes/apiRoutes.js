const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/search/:value', apiController.search);

router.get('/track/:id', apiController.getTrack);

router.get('/album/:id', apiController.getAlbum);

router.get('/artist/:id', apiController.getArtist);

// I'll figure this out later
// router.get('/recommendations/', apiController.getRecommendations);

module.exports = router;
