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
      res.json(data);
    });
  },

  // Find one by id
  findRentalcarCost: function(req, res) {
    Rentalcar.findById(req.params.id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find all rental car cities
  findRentalcarCities: function(req, res) {
    Rentalcar.distinct("cityName", function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find all rental cars for the city
  findByCityRentalcars: function(req, res) {
    Rentalcar.find({
      cityName: req.params.city
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find all rental car types
  findRentalcarTypes: function(req, res) {
    Rentalcar.distinct("carType", function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find all the rental cars by type
  findByTypeRentalcars: function(req, res) {
    Rentalcar.find({
      carType: req.params.type
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },


  // Find rental cars for specified city and type
  findCityAndTypeRentalcars: function(req, res) {
    Rentalcar.find({
      cityName: req.params.city,
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
