require('./user.model');

var mongoose = require('mongoose'),
    User = mongoose.model('meanAppUser');

exports.readAllUsers = function(req, res) {
  User.find({}, function(err, data) {
    if (err)
      res.send(err);
    res.json(data);
  });
};

exports.createUser = function(req, res) {
  var newUser = new User(req.body);
  newUser.save(function(err, data) {
    if (err)
      res.send(err);
    res.json({
      message: data._id
    });
  });
};

exports.readUser = function(req, res) {
  User.findById(req.params.id, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      if (data) {
        res.json(data);
      } else {
        res.json({
          message: 'User not found'
        });
      }
    }
  });
};

exports.updateUser = function(req, res) {
  User.findOneAndUpdate({
      _id: req.params.id
    }, req.body,
    function(err, data) {
      if (err) {
        res.send(err);
      } else {
        if (data) {
          res.json({
            message: 'User data updated successfully'
          });
        } else {
          res.json({
            message: 'User not found'
          });
        }
      }
    });
};

exports.deleteUser = function(req, res) {
  User.findOneAndRemove({
    _id: req.params.id
  }, function(err, data) {
    if (err) {
      res.send(err);
    } else {
      if (data) {
        res.json({
          message: 'User data deleted successfully'
        });
      } else {
        res.json({
          message: 'User not found'
        });
      }
    }
  });
};
