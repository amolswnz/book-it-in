var mongoose = require('mongoose');
//Load all your models
var Rentalcar = require('./rentalcar.model');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Rentalcar');

module.exports = {
  // Get all
  findAll: function(req, res) {
    Rentalcar.find({}, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      console.log('data', data);
      res.json(data);
    });
  },

  // Find one by id
  findOne: function(req, res) {
    Rentalcar.findById(req.params.id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findAllByCity: function(req, res) {
    Rentalcar.find({
      cityName: req.params.city
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findOneByType: function(req, res) {
    Rentalcar.find({
      carType: req.params.type
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findX: function(req, res) {
    console.log(req.params.abc, req.params.def);
    res.json({
      a: req.params.abc,
      b: req.params.def
    });
  }

};
