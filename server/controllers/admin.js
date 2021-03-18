function getAdmin(req, res) {
	res.render('admin/index');
}

function getEditMatch(req, res) {
	res.render('admin/edit-match');
}

function postEditMatch(req, res) {
	const team1 = req.body.team1;
	const team2 = req.body.team2;
	const time = req.body.time;
	const scoreTeam1 = req.body.score1;
	const scoreTeam2 = req.body.score2;

	console.log(req.body);

	res.render('admin/index');
}

module.exports = { getAdmin, postEditMatch, getEditMatch };
