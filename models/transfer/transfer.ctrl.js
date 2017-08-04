var mongoose = require('mongoose');
//Load all your models
var Transfer = require('./transfer.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Transfer');

module.exports = {
  // Get all
  findAll: function(req, res) {
    Transfer.find({}, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find one by id
  findTransferCost: function(req, res) {
    Transfer.findById(req.params.id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findCityTransfers: function(req, res) {
    Transfer.find({
      startCity: req.params.city
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findTransferCities: function(req, res) {
    Transfer.distinct("startCity", function(err, data) {
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
