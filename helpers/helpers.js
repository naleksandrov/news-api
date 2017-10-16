const jwt = require('jsonwebtoken');


module.exports = {
	validateToken: (req, res, next) => {
		let token = req.body.token || req.query.token || req.headers['x-access-token'];

		if (token) {
			jwt.verify(token, 'superSecret', (err, decoded) => {
				if (err) {
					return res.json({success: false, message: 'Failed to authenticate token.'});
				} else {
					req.decoded = decoded;
					next();
				}
			});
		} else {
			return res.json({success: false, message: 'No token provided.'});
		}
	}
};