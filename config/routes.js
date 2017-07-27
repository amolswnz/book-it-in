module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      nodeDynamicMsg: 'Hello from NodeJS and ExpresJS Dynamic Message ' + new Date()
    });
  });

  app.get('/transfer', function(req, res) {
    res.render('transfer');
  });
  app.get('/rental-car', function(req, res) {
    res.render('rental-car');
  });
  app.get('/activity', function(req, res) {
    res.render('activity');
  });
  app.get('/tour', function(req, res) {
    res.render('tour');
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
