
var http = require('http');

// Create the server
var server = http.createServer(function (req, res) {
	res.writeHead(200);
	res.end('Hello World !');
});

// listening to the event
server.on('close', function () {
	console.log('Good Bye...');
});

// running the server
server.listen(8080);

// closing the server
server.close();
