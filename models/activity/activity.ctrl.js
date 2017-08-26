var mongoose = require('mongoose');
//Load all your models
var Activity = require('./activity.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Activity');

module.exports = {
  // Get all
  findAll: function(req, res) {
    Activity.find({}, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  // Find one by id
  findActivityCost: function(req, res) {
    Activity.findById(req.params.id, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findCityActivities: function(req, res) {
    Activity.find({
      city: req.params.city
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  },

  findActivityCities: function(req, res) {
    console.log(req);
    Activity.distinct('city', function(err, data) {
      if (err) {
        console.log(err);
        throw new Error(err);
      }
      console.log(data);
      res.json(data);
    });
  },

  // fs: function(req, res) {
  //   console.log(res,req);
  // },

  // findX: function(req, res) {
  //   console.log(req.params.abc, req.params.def);
  //   res.json({
  //     a: req.params.abc,
  //     b: req.params.def
  //   });
  // },

  findOne: function(req, res) {
    Activity.findOne({
      _id: req.params.id
    }, function(err, data) {
      if (err) {
        // throw new Error(err);
      }
      res.json(data);
    });
  },

};
