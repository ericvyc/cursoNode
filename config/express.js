//Express configuration
var express = require('express');

//Express auto-load
var load = require('express-load');

//Load body-parser
var bodyParser = require('body-parser');

module.exports = function() {

	//Start express
	var app = express();

	//Set Ejs as engine view
	app.set('view engine', 'ejs');

	//Set views folder
	app.set('views', './app/views');

	//Configure body-parser
	app.use(bodyParser.urlencoded({ extended : true }));
	app.use(bodyParser.json());

	//Load routes in app var
	load('routes', {cwd : 'app'})
	.then('infra')
	.into(app);

	return app;
}
