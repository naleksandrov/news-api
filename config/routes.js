const express = require('express');
const helpers = require('../helpers/helpers');

const apiRoutes = express.Router();

const newsController = require('../controllers/newsController');
const languagesController = require('../controllers/languagesController');
const usersController = require('../controllers/usersController');


apiRoutes.get('/news/list', newsController.list);
apiRoutes.get('/news/view', newsController.view);
apiRoutes.get('/news/count', newsController.count);
apiRoutes.get('/news/info', newsController.info);
apiRoutes.post('/news/create', newsController.create);
apiRoutes.put('/news/update', helpers.validateToken, newsController.update);

apiRoutes.get('/languages/list', languagesController.list);

apiRoutes.post('/user/login', usersController.login);

module.exports = apiRoutes;

