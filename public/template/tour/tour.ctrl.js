var mongoose = require('mongoose');
//Load all your models
var Tour = require('./tour.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Tour');

module.exports = {
  // Get all
  findAll: function(req, res) {
    Tour.find({}, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find one by id
  findTourCost: function(req, res) {
    Tour.findById(req.params.id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findCityTours: function(req, res) {
    Tour.find({
      startCity: req.params.city
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findTourCities: function(req, res) {
    Tour.distinct("startCity", function(err, data) {
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
