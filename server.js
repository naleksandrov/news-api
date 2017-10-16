const server = require('http');
/*let port = process.env.PORT || 5000;*/
let port = 5000;

const app = require('./config/app');

server.createServer(app).listen(port, () => {
	console.log('Server listening on port 5000!');
});