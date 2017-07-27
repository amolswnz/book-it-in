module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      nodeDynamicMsg: 'Hello from NodeJS and ExpresJS Dynamic Message ' + new Date()
    });
  });

  app.get('/transfer', function(req, res) {
    res.render('app/transfer/transfer');
  });
  app.get('/rentalcar', function(req, res) {
    res.render('app/rentalcar/rentalcar');
  });
  app.get('/activity', function(req, res) {
    res.render('app/activity/activity');
  });
  app.get('/tour', function(req, res) {
    res.render('app/tour/tour');
  });
  app.get('/login', function(req, res) {
    res.render('app/user/login');
  });

  var user = require('../modules/user/user.controller');
  app.route('/api/user')
    .get(user.readAllUsers)
    .post(user.createUser);
  app.route('/api/user/:id')
    .get(user.readUser)
    .put(user.updateUser)
    .delete(user.deleteUser);
};
