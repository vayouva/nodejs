var http = require("http");
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
	var page = url.parse(req.url).pathname;
	var params = querystring.parse(url.parse(req.url).query);
	console.log(page);
	res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
	if ('prenom' in params && 'nom' in params) {
		res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
	}
	else {
		res.write('ERROR 404: Page doesn\'t exist');
	}

	res.end();
});

server.listen(8080);
