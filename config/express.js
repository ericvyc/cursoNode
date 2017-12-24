//Express configuration
var express = require('express');

//Start Express
var app = express();

//Set Ejs as engine view
app.set('view engine', 'ejs');

//Set views folder
app.set('views', './app/views');

module.exports = function() {
	return app;
}
