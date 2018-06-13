var http = require('http');
var fs = require('fs'); // basic file server


// Basic NodeJS Server
http.createServer(function(req, res) {
	fs.readFile('testFile.html', function(err, data) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data); // serving that test file 
		res.end();
	});
}).listen(process.env.PORT, function(){
	console.log(`Euphony App Up And Running On Port ${process.env.PORT}`);	
});
