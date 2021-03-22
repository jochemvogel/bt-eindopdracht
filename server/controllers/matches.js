const fs = require('fs');
const Match = require('../models/match');

function getMatches(req, res) {
	const dataFilePath = './data/data.json';

	if (!fs.existsSync(dataFilePath)) {
		const matches = 'No matches';
		res.render('matches/index', {
			matches,
		});
		return;
	}

	let rawData = fs.readFileSync(dataFilePath);

	const matches = JSON.parse(rawData);

	const matchesObjIsEmpty = Object.keys(matches).length === 0;

	if (matchesObjIsEmpty) {
		const matches = 'No matches';
		console.log('yes');
		res.render('matches/index', {
			matches,
		});
		return;
	}

	res.render('matches/index', {
		matches,
	});
}

function getDetails(req, res) {
	const matchId = req.params.id;
	Match.findById(matchId, (match) => {
		res.render('matches/details', {
			match,
		});
	});
}

module.exports = { getMatches, getDetails };
