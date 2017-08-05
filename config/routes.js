module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      nodeDynamicMsg: 'Hello from NodeJS and ExpresJS Dynamic Message ' + new Date()
    });
  });

  app.get('/bookitin/activity', function(req, res) {
    res.render('app/activity/index');
  });
  app.get('/bookitin/rentalcar', function(req, res) {
    res.render('app/rentalcar/index');
  });
  app.get('/bookitin/tour', function(req, res) {
    res.render('app/tour/index');
  });
  app.get('/bookitin/transfer', function(req, res) {
    res.render('app/transfer/index');
  });

  app.get('/login', function(req, res) {
    res.render('app/user/index');
  });
  // app.post('/login')

  // Detailed information in bookitin.numbers User Story
  var activityCtrl = require('../models/activity/activity.ctrl');
  app.get('/activity', activityCtrl.findAll);
  app.get('/activity/cities', activityCtrl.findActivityCities);
  app.get('/activity/city/:city', activityCtrl.findCityActivities);
  app.get('/activity/cost/:id/:date', activityCtrl.findActivityCost);


  var rentalcarCtrl = require('../models/rentalcar/rentalcar.ctrl');
  app.get('/rentalcar', rentalcarCtrl.findAll); // Get all
  app.get('/rentalcar/cities', rentalcarCtrl.findRentalcarCities); // Find all rental car cities
  app.get('/rentalcar/city/:city', rentalcarCtrl.findByCityRentalcars); // Find all rental cars for the city
  app.get('/rentalcar/types', rentalcarCtrl.findRentalcarTypes); // Find all rental car types
  app.get('/rentalcar/type/:type', rentalcarCtrl.findByTypeRentalcars); // Find all the rental cars by type
  app.get('/rentalcar/city/:city/type/:type', rentalcarCtrl.findCityAndTypeRentalcars); // Find rental cars for specified city and type
  app.get('/rentalcar/cost/:id/:date', rentalcarCtrl.findRentalcarCost); // Find one by id


  var tourCtrl = require('../models/tour/tour.ctrl');
  app.get('/tour', tourCtrl.findAll);
  app.get('/tour/cities', tourCtrl.findTourCities);
  app.get('/tour/city/:city', tourCtrl.findCityTours);
  app.get('/tour/cost/:id/:date', tourCtrl.findTourCost);


  var transferCtrl = require('../models/transfer/transfer.ctrl');
  app.get('/transfer', transferCtrl.findAll);
  app.get('/transfer/cities', transferCtrl.findTransferCities);
  app.get('/transfer/city/:city', transferCtrl.findCityTransfers);
  app.get('/transfer/cost/:id/:date', transferCtrl.findTransferCost);


  var userCtrl = require('../models/user/user.ctrl');
  app.post('/user/register', userCtrl.register);
  app.get('/user/:username', function(req, res) {
    res.send('logged in ');
  });
  app.get('/user/logout', function(req, res) {
    req.logout();
    res.send('logged out');
    res.redirect('/');
  });

  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy;
  var User = require('../models/user/user.ctrl.js');
  passport.use(new LocalStrategy({
      usernameField: 'email',
      passwordField: 'password'
    },
    function(email, password, done) {
      User.getUserByEmail(email, function(err, user) {
        if (err) throw err;
        if (!user) {
          return done(null, false, {
            message: 'Unknown User'
          });
        }
        console.log('user', user);
        User.comparePassword(password, user.password, function(err, isMatch) {
          if (err) return done(err);
          console.log('isMatch', isMatch);
          if (isMatch) {
            // res.send('password matched');
            return done(null, user);
          } else {
            // res.send('not matched password');
            return done(null, false, {
              message: 'Invalid Password'
            });
          }
        });
      });
    }
  ));

  app.post('/user/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        console.log('post error', err);
        // return next(err);
        return res.send({ error: err});
      }
      if (!user) {
        console.log('post !user ', user);
        // return res.redirect('/user/login');
        return res.send({error: 'Invalid Email ID or passwords'});
      }
      req.logIn(user, function(err) {
        console.log('post logIn', user);
        if (err) {
          console.log('post logIn err ', err);
          // return next(err);
          return res.send({ error: err });
        }
        return res.send({ user: user });
      });
    })(req, res, next);
  });

  // Check on login page if the user is already logged in or not
  app.get('/user/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) {
        console.log('get error', err, user);
        return next(err);
      }
      if (!user) {
        console.log('get !user ', err, user);
        return res.redirect('/user/login');
      }
      req.logIn(user, function(err) {
        console.log('get logIn', err, user);
        if (err) {
          return next(err);
        }
        return res.redirect('/user/' + user.username);
      });
    })(req, res, next);
  });

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });


  app.get('/test', function(req, res) {
    console.log(req.params, req.query);
    /*
        GET /test?user=name&date=2208
          req.params = {}
          req.query = { user: 'name', date: '2208' }
    */
    res.render('app/test/test');
  });


  app.get('/test/:query', function(req, res) {
    console.log(req.params, req.query);
    /*
        GET /test/show?user=name&date=2208
          req.params = { query: 'show' }
          req.query = { user: 'name', date: '2208' }
    */
    res.render('app/test/test');
  });


  app.get('/xui', function(req, res) {
    res.render('app/xui/xui');
  });

};
