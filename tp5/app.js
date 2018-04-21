var express = require('express');

var app = express();

app.get('/', function (req, res) {
	res.setHeader('Content-Type', 'text/plain');
	res.send('Welcome to the main page !');
})
.get('/presentation', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to presentation page !');
})
.get('/contact', function(req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.send('Welcome to the contact page !');
})
.get('/floor/:floornum/room', function (req, res) {
	res.render('room.ejs', {room: req.params.floornum});
})
.get('/count/:counter', function (req, res) {
	var names = ['Youva', 'Vayou', 'Boutefliko', 'Mitroglou'];
	res.render('counter.ejs', {counter: req.params.counter, names: names});
})
.use(function (req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.status(404).send('Page not found !');
});


app.listen(8080);
