
var http = require('http');
var fs = require('fs');

// Load the index.html file for the client
var server = http.createServer(function (req, res) {
	fs.readFile('./index.html', 'utf-8', function (error, content) {
		res.writeHead(200, {"Content-Type":"text/html"});
		res.end(content);
	});
});

// Load the socket.io
var io = require('socket.io').listen(server);;

// When a user connects, we diplay it on the console

io.sockets.on('connection', function (socket) {
	console.log("A user is connected !");
});

server.listen(8080);
