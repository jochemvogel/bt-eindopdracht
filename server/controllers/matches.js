function getMatches(req, res) {
	res.render('matches/index');
}

function getDetails(req, res) {
	res.render('matches/details');
}

module.exports = { getMatches, getDetails };
