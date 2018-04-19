
var EventEmitter = require('events').EventEmitter;

var game = new EventEmitter();

game.on('gameover', function(message) {
	console.log(message);
});

game.on('newplayer', function (name, age) {
	console.log("This is a new player, his name is " + name + " , he is " + age + " years old !");
});
game.emit('newplayer', 'Mario', 35);
game.emit('gameover', "You lose...");
