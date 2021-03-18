const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

router
	.get('/', adminController.getAdmin)
	.get('/edit-match', adminController.getEditMatch)
	.post('/edit-match', adminController.postEditMatch);

module.exports = router;
