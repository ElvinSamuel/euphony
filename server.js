var http = require('http');

// Basic NodeJS Server
http.createServer(function(req, res) {
	res.write('Hello World!'); // just checking that it works
	res.end();
}).listen(process.env.PORT);
