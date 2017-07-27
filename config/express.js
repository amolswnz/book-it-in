var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

module.exports = function(app, config) {
    // Define static views folder path and view engine
    app.set('views', config.rootPath + '/public');
    app.set('view engine', 'pug');

    // Expressive way to generate CSS
    app.use(stylus.middleware({
        src: config.rootPath + '/public',
        compile: function compile(str, path) {
            return stylus(str).set('filename', path);
        }
    }));

    // To serve static files such as images, CSS files, and JavaScript files
    app.use(express.static(config.rootPath + '/public'));
    // Returns the rendered HTML of a view via the callback function
    app.get('/partials/*', function(req, res) {
        res.render('../public/app/' + req.params[0]);
    });

    // Parse incoming request bodies in a middleware before your handlers
    app.use(logger('dev'));
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());

    // The view-source of the page is pretty, otherwise its all in one line
    if (app.get('env') === 'development') {
        app.locals.pretty = true;
    }
};
