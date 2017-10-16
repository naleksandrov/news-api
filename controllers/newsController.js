const news = require('../models/newsModel');

module.exports = {
	list: (req, res) => {
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 5;
		const langId = Number(req.query.langId) || 1;
		let returnData = {success: false};

		news.getNews(page, limit, langId).then((result) => {
			returnData.success = true;
			returnData.data = result;
			res.json(returnData);
		});
	},
	view: (req, res) => {
		const id = Number(req.query.id);
		const langId = Number(req.query.langId);
		let returnData = {success: false};

		news.newsDetails(id, langId).then((result) => {
			returnData.success = true;
			returnData.data = result;
			res.json(returnData);
		});
	},
	count: (req, res) => {
		const langId = Number(req.query.langId);
		let returnData = {success: false};

		news.getNewsCount(langId).then((result) => {
			returnData.success = true;
			returnData.data = result;
			res.json(returnData);
		});
	},
	info: (req, res) => {
		const newsId = req.query.newsId;
		let returnData = {
			success: false,
			data: {}
		};

		news.infoNews(newsId).then((result) => {
			returnData.success = true;
			returnData.data.source = result[0].source;
			returnData.data.date = result[0].date;
			returnData.data.news = result;
			res.json(returnData);
		});
	},
	create: (req, res) => {
		let returnData = {
			success: false,
			message: 'News isn\'t created'
		};
		news.createNews(req.body).then((result) => {
			returnData.success = true;
			returnData.message = 'News created successfully';
			res.json(returnData);
		});
	},
	update: (req, res) => {
		let returnObj = {
			success: false
		};
		let paramsArr = [];
		let isCommonFields = false;

		if(req.body.source) {
			isCommonFields = true;
			paramsArr = {
				date: req.body.date,
				source: req.body.source,
				newsId: req.body.news_id
			}
		} else {
			paramsArr = {
				title: req.body.title,
				shortDescription: req.body.short_description,
				description: req.body.description,
				id: req.body.id
			}
		}

		news.updateNews(paramsArr, isCommonFields).then((result) => {
			returnObj.success = true;
			res.json(returnObj);
		});
	},
	delete: (req, res) => {
		let returnObj = {
			success: false
		};
		news.deleteNews(req.params.id).then(() => {
			returnObj.success = true;
			res.json(returnObj);
		});
	}
};