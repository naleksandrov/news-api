const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const apiRouter = require('./routes');

/*const session = require('express-session');*/

// Express Session
/*app.use(session({
	secret: 'secret',
	saveUninitialized: false,
	resave: false
}));*/

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Load app router
app.use('/api', apiRouter);

// Handle 404
/*app.use((req, res) => {
	res.status(404).send('404: Page not Found');
});*/

module.exports = app;