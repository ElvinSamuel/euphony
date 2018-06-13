var http = require('http');

// Basic NodeJS Server
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('Hello World!'); // just checking that it works
	res.end();
}).listen(process.env.PORT);
