const user = require('../models/userModel');
const jwt = require('jsonwebtoken');

module.exports = {
	login: (req, res) => {
		const username = req.body.username;
		const password = req.body.password;

		user.login(username).then((result) => {
			if (result.length === 0) {
				res.json({success: false, message: 'Authentication failed. User not found.'});
			} else {
				if (result[0].password !== password) {
					res.json({success: false, message: 'Authentication failed. Wrong password.'});
				} else {
					const token = jwt.sign({username: username}, 'superSecret');

					res.json({
						success: true,
						message: 'Enjoy your token!',
						token: token
					});
				}
			}
		});
	},
	logoutGet: (req, res) => {
		delete req.session.user;
		res.redirect('/admin/user/login');
	}
};