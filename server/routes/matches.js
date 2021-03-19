const express = require('express');
const matchesController = require('../controllers/matches');

const router = express.Router();

router
	.get('/', matchesController.getMatches)
	.get('/details', matchesController.getDetails);

module.exports = router;
