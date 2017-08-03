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
  app.get('/test', function(req, res) {
    res.render('app/test/test');
  });

  // app.get('/activity', function(req, res) {
  // var rest = require('../models/activity/activity.ctrl');
  // console.log(rest.findAll);
  // });

  var activityCtrl = require('../models/activity/activity.ctrl');
  app.get('/activity', activityCtrl.findAll);
  app.get('/activity/:id', activityCtrl.findOne);
  app.get('/activity/city/:city', activityCtrl.findAllByCity);
  app.get('/activity/:abc/:def/:ghi', activityCtrl.findX);


  var rentalcarCtrl = require('../models/rentalcar/rentalcar.ctrl');
  app.get('/rentalcar', rentalcarCtrl.findAll);
  app.get('/rentalcar/:id', rentalcarCtrl.findOne);
  app.get('/rentalcar/city/:city', rentalcarCtrl.findAllByCity);
  app.get('/rentalcar/type/:type', rentalcarCtrl.findOneByType);

  var tourCtrl = require('../models/tour/tour.ctrl');
  app.get('/tour', tourCtrl.findAll);
  app.get('/tour/:id', tourCtrl.findOne);
  app.get('/tour/city/:city', tourCtrl.findAllByCity);

  // var transferCtrl = require('../models/transfer/transfer.ctrl');
  // app.get('/transfer', transferCtrl.findAll);
  // app.get('/transfer/:id', transferCtrl.findOne);
  // app.get('/transfer/city/:city', transferCtrl.findAllByCity);


  // var user = require('./../models/user/user.model');
  // app.route('/api/user')
  //   .get(user.readAllUsers);
  // //   .post(user.createUser);
  // // app.route('/api/user/:id')
  // //   .get(user.readUser)
  // //   .put(user.updateUser)
  // //   .delete(user.deleteUser);
};
