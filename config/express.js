//Express configuration
var express = require('express');

//Express auto-load
var load = require('express-load');

module.exports = function() {

	//Start express
	var app = express();

	//Set Ejs as engine view
	app.set('view engine', 'ejs');

	//Set views folder
	app.set('views', './app/views');

	//Load routes in app var
	load('routes', {cwd : 'app'})
	.then('infra')
	.into(app);

	return app;
}
