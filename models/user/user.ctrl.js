var mongoose = require('mongoose');
//Load all your models
var User = require('./user.model.js');
//Now, this call won't fail because User has been added as a schema.
mongoose.model('User');
var bcrypt = require('bcryptjs');

var self = module.exports = {

  findDuplicateEmail: function(req, res) {
    console.log('find by email', req.params.id);
    User.findOne({
      email: req.params.id
    }, "email", function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  register: function(req, res) {
    var newUser = new User(req.body);
    // console.log('register', newUser);
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
    User.findOne(query, {
      password: 0
    }, callback);
    // console.log('find one', req.body);
  },

  findById: function(id, callback) {
    User.findById(id, callback);
    // console.log('getUserById',id);
  },

  comparePassword: function(candidatePwd, hash, callback) {
    // console.log('comparePassword', candidatePwd, hash);
    bcrypt.compare(candidatePwd, hash, function(err, isMatch) {
      callback(null, isMatch);
    });
  },


  getProfile: function(req, res) {
    User.findById(req.user._id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  updateProfile: function(req, res) {
    console.log(req.body);
    // res.send('req');
    User.findOneAndUpdate({
      _id: req.user._id
    }, req.body, function(err, data) {
      if (err) {
        console.log(err);
        res.send({
          success: false,
          msg: "Error occured: Profile NOT saved due to server problem",
          err: err
        });
      } else {
        res.send({
          success: true,
          msg: "Done: Your profile has been updated successfully"
        });
      }
    });
  },

  updatePwd: function(req, res) {
    console.log(req.body);
    self.getUserByEmail(req.body.email, function(err, user) {
      if (err) throw err;
      if (!user) {
        return done(null, false, {
          message: 'Unknown User'
        });
      }
      // console.log('DB USER', user);
      // console.log(req.body.old, user.password);
      self.comparePassword(req.body.old, user.password, function(err, isMatch) {
        if (err) {
          res.send({
            success: false,
            msg: "Error occured: The Password change NOT DONE due to server problem",
            err: err
          });
        }
        if (isMatch) {
          bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(req.body.new, salt, function(err, hash) {
              user.password = hash;
              user.save();
              res.send({
                success: true,
                msg: "Done: Your password has been changed successfully"
              });
            });
          });



        } else {
          res.send({
            success: false,
            msg: "Error occured: The old password DO NOT match with our records",
          });
        }
      });
    });

  }

};
