module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      nodeDynamicMsg: 'Hello from NodeJS and ExpresJS Dynamic Message ' + new Date()
    });
  });

  app.get('/bookitin/transfer', function(req, res) {
    res.render('app/transfer/index');
  });
  app.get('/bookitin/rentalcar', function(req, res) {
    res.render('app/rentalcar/index');
  });
  app.get('/bookitin/activity', function(req, res) {
    res.render('app/activity/index');
  });
  app.get('/bookitin/tour', function(req, res) {
    res.render('app/tour/index');
  });
  app.get('/login', function(req, res) {
    res.render('app/user/index');
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
