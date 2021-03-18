const express = require('express');
const matchesController = require('../controllers/matches');

const router = express.Router();

router.get('/', matchesController.getMatches);

module.exports = router;
