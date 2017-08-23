var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Schema
var UserSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  profileimage: String,
  address: String,
  city: String,
  country: String,
  mobile: String
});

var User = module.exports = mongoose.model('User', UserSchema);
