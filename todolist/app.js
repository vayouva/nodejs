var express = require('express');
var session = require('cookie-session'); // Loads sessions' middleware
var bodyParser = require('body-parser'); // Loads parameter management middleware
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// The app uses sessions
app.use(session({secret: 'todotopsecret'}))

// If there is no todolist, we create an empty one
.use(function (req, res, next) {
	if (typeof(req.session.todolist) === 'undefined') {
		req.session.todolist = [];
	}
	next();
})

// Display the todolist and the form
.get('/todo', function (req, res) {
	res.render('todo.ejs', {todolist: req.session.todolist});
})

// Adding an element to the list
.post('/todo/add', urlencodedParser, function (req, res) {
	if (req.body.newtodo != '') {
		req.session.todolist.push(req.body.newtodo);
	}
	res.redirect('/todo');
})

// Delete an element from the list

.get('/todo/delete/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
})

// Redirect to the list page if the page is not found
.use(function (req, res) {
	res.redirect('/todo');
})

.listen(8080);
