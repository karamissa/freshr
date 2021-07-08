const express = require('express');
const apiController = require('../controllers/apiController');

const router = express.Router();

router.get('/search/:value', apiController.search);

router.get('/track/:id', apiController.getTrack);

router.get('/artist/:id', apiController.getArtist);

module.exports = router;
