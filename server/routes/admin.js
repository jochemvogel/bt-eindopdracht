const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router
	.get('/', adminController.getAdmin)
	.get('/add-match', adminController.getAddMatch)
	.post('/add-match', adminController.postAddMatch);

module.exports = router;
