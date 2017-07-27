var express = require('express');

// Development vs Production environment configuration
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var config = require('./config/environment')[env];

// Expres Framework configuration
var app = express();
require('./config/express')(app, config);

// MongoDB configuration
require('./config/db')(app);

// Application routes configuration
require('./config/routes')(app);

// Starting express server
app.listen(config.port);
console.log("*** Listening to http://localhost:" + config.port);
