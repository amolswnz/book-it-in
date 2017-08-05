var mongoose = require('mongoose');
//Load all your models
var User = require('./user.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('User');

var bcrypt = require('bcryptjs');

module.exports = {
  register: function(req, res) {
    var newUser = new User(req.body);
    console.log('register', newUser);
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(newUser.password, salt, function(err, hash) {
        newUser.password = hash;
        newUser.save();
        res.send('user saved');
      });
    });
  },


  getUserByEmail: function(email, callback) {
    var query = {
      email: email
    };
    console.log('getUserByEmail', query);
    User.findOne(query, callback);
  },

  findOne: function(req, res) {
    User.findOne(query, {password: 0}, callback);
    console.log('find one', req.body);
  },

  comparePassword: function(candidatePwd, hash, callback) {
    console.log('comparePassword', candidatePwd, hash);
    bcrypt.compare(candidatePwd, hash, function(err, isMatch) {
      callback(null, isMatch);
    });
  },

};
