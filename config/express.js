var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

module.exports = function(app, config) {
  // Define static views folder path and view engine
  app.set('views', config.rootPath + 'public');
  app.set('view engine', 'pug');

  // To serve static files such as images, CSS files, and JavaScript files
  app.use(express.static(config.rootPath + 'public'));
  // Returns the rendered HTML of a view via the callback function
  app.get('/partials/*', function(req, res) {
    res.render('../public/app/' + req.params[0]);
  });
  // Specify base directory to use absolute path
  app.locals.basedir = config.rootPath + 'public';

  // Parse incoming request bodies in a middleware before your handlers
  app.use(logger('dev'));
  app.use(cookieParser());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use(session({
    secret: 'some secret 0822',
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: true
    }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // The view-source of the page is pretty, otherwise its all in one line
  if (app.get('env') === 'development') {
    app.locals.pretty = true;
  }
};
