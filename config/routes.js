module.exports = function(app) {

  /********************************************** App root-route ****************************************/
  app.get('/', function(req, res) {
    res.render('index', {
      nodeDynamicMsg: 'Hello from NodeJS and ExpresJS Dynamic Message ' + new Date()
    });
  });

  /********************************************** Activity-routes ****************************************/
  app.get('/bookitin/activity', function(req, res) {
    res.render('app/activity/index');
  });
  var activityCtrl = require('../models/activity/activity.ctrl');
  app.get('/activity', activityCtrl.findAll);
  app.get('/activity/cities', activityCtrl.findActivityCities);
  app.get('/activity/city/:city', activityCtrl.findCityActivities);
  app.get('/activity/cost/:id/:date', activityCtrl.findActivityCost);


  /********************************************** Rentalcar-routes ****************************************/
  app.get('/bookitin/rentalcar', function(req, res) {
    res.render('app/rentalcar/index');
  });
  var rentalcarCtrl = require('../models/rentalcar/rentalcar.ctrl');
  app.get('/rentalcar', rentalcarCtrl.findAll); // Get all
  app.get('/rentalcar/cities', rentalcarCtrl.findRentalcarCities); // Find all rental car cities
  app.get('/rentalcar/city/:city', rentalcarCtrl.findByCityRentalcars); // Find all rental cars for the city
  app.get('/rentalcar/types', rentalcarCtrl.findRentalcarTypes); // Find all rental car types
  app.get('/rentalcar/type/:type', rentalcarCtrl.findByTypeRentalcars); // Find all the rental cars by type
  app.get('/rentalcar/city/:city/type/:type', rentalcarCtrl.findCityAndTypeRentalcars); // Find rental cars for specified city and type
  app.get('/rentalcar/cost/:id/:date', rentalcarCtrl.findRentalcarCost); // Find one by id


  /********************************************** Tour-routes ****************************************/
  app.get('/bookitin/tour', function(req, res) {
    res.render('app/tour/index');
  });
  var tourCtrl = require('../models/tour/tour.ctrl');
  app.get('/tour', tourCtrl.findAll);
  app.get('/tour/cities', tourCtrl.findTourCities);
  app.get('/tour/city/:city', tourCtrl.findCityTours);
  app.get('/tour/cost/:id/:date', tourCtrl.findTourCost);


  /********************************************** Transfer-routes ****************************************/
  app.get('/bookitin/transfer', function(req, res) {
    res.render('app/transfer/index');
  });
  var transferCtrl = require('../models/transfer/transfer.ctrl');
  app.get('/transfer', transferCtrl.findAll);
  app.get('/transfer/cities', transferCtrl.findTransferCities);
  app.get('/transfer/city/:city', transferCtrl.findCityTransfers);
  app.get('/transfer/cost/:id/:date', transferCtrl.findTransferCost);


  /********************************************** User-routes ****************************************/
  var userCtrl = require('../models/user/user.ctrl');
  app.post('/user/register', userCtrl.register);
  app.get('/user/logout', function(req, res) {
    req.logout();
    res.send('logged out');
    res.redirect('/');
  });
  app.get('/user/email/:id', userCtrl.findDuplicateEmail);

  /********************************************** Profile-routes ****************************************/
  app.get('/profile', ensureAuthenticated, function(req, res) {
    res.render('app/user/profile/index');
  });
  app.get('/user/profile/current', userCtrl.getProfile);
  app.put('/user/profile/current', userCtrl.updateProfile);
  app.patch('/user/profile/current', userCtrl.updatePwd);

  /********************************************** User booking-routes ****************************************/
  app.get('/bookings', ensureAuthenticated, function(req, res) {
    res.render('app/user/bookings/index');
  });



  /********************************************** ALL CART Bookings-routes ****************************************/
  var bookingCtrl = require('../models/booking/booking.ctrl');
  app.post('/booking/save/tour', bookingCtrl.saveTourBooking);
  app.post('/booking/save/transfer', bookingCtrl.saveTransferBooking);
  app.post('/booking/save/activity', bookingCtrl.saveActivityBooking);
  app.get('/booking-cart', function(req, res) {
    res.end('your current cart will be shown here');
  });



  /********************************************** USER AUTHENTICATION ****************************************/
  app.get('/login', function(req, res) {
    // If session exists redirect to profile page
    if (typeof req.session.passport != 'undefined')
      if (typeof req.session.passport.user != 'undefined')
        res.redirect('/user/profile/' + req.session.passport.user._id);

    res.render('app/user/login/index');
  });

  app.get('/logout', function(req, res) {
    app.locals.isLoggedIn = false;
    req.logout();
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
          // console.log('isMatch', isMatch);
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
        return res.send({
          error: err
        });
      }
      if (!user) {
        console.log('post !user ', user);
        // return res.redirect('/user/login');
        return res.send({
          error: 'Invalid Email ID or passwords'
        });
      }
      req.logIn(user, function(err) {
        // console.log('post logIn', user);
        if (err) {
          // console.log('post logIn err ', err);
          // return next(err);
          return res.send({
            error: err
          });
        }
        // return res.redirect('/user/profile/' + req.session.passport.user._id);
        app.locals.isLoggedIn = true;
        global.userObjId = user._id;
        return res.send({
          user: user
        });
      });
    })(req, res, next);
  });

  passport.serializeUser(function(user, done) {
    console.log('serializeUser');
    var sessionUser = {
      _id: user._id,
      name: user.name,
      email: user.email
    };
    done(null, sessionUser);
  });

  passport.deserializeUser(function(sessionUser, done) {
    console.log('deserializeUser');
    done(null, sessionUser);
  });

  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated())
      return next();
    res.redirect('/login');
  }






  /********************************************** Test routes ****************************************/


  // passport.deserializeUser(function(id, done) {
  //   done(null, sessionUser)
  //   // User.findById(id, function(err, user) {
  //     // done(err, user);
  //   // });
  // });


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
