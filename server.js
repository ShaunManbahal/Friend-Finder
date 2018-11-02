// =============================
// DEPENDENCIES
// NPM Packages
// =============================

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// ================================
// EXPRESS SERVER CONFIG PROPERTIES
// ================================

var app = express();
var PORT = process.env.PORT || 8080;   // Set port to use

// Allow server to interpret data through body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// =============================
// ROUTING
// Point server to routes
// =============================

require('./app/routing/api-routes.js')(app); 
require('./app/routing/html-routes.js')(app);


// =============================
// LISTENER
// Start the server
// =============================
// Console log to let user that the server is working

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});