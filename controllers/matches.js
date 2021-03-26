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
    let jsEnabled = false

    if (req.cookies.js === 'true') {
        jsEnabled = true
    }

	Match.findById(matchId, (match) => {
        const matchTime = match.time

        const matchTimeArr = matchTime.split("T");

        const date = matchTimeArr[0];

        function formatDate (dateStr) {
            const dArr = dateStr.split('-')
            return `${dArr[2]}-${dArr[1]}-${dArr[0]}`
        }

        const formattedDate = formatDate(date)
        const time = matchTimeArr[1]

		res.render('matches/details', {
			match,
            formattedDate,
            time,
            jsEnabled
		});
	});
}

module.exports = { getMatches, getDetails };
