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
