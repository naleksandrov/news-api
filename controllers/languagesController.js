const lang = require('../models/languagesModel');

module.exports = {
	list: (req, res) => {
		let returnData = {
			success: false
		};

		lang.getLanguages().then((result) => {
			returnData.success = true;
			returnData.data = result;
			res.json(returnData);
		});
	}
};