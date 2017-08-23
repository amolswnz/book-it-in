var mongoose = require('mongoose');
//Load all your models
var Booking = require('./booking.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Booking');

module.exports = {
  // Save booking

  saveTourBooking: function(req, res) {
    console.log(req.body);
    var bookingData = new Booking();
    // console.log('sessionid', req.sessionID);
    var query = {
      'user.tempId': req.user != null ? req.user._id : req.sessionID
    };
    var update = {
      $push: {
        tour: req.body.tour
      }
    };
    var options = {
      upsert: true,
      multi: false
    };

    Booking.findOneAndUpdate(query, update, options, function(err, data) {
      if (err) {
        console.log(err);
        res.send({
          success: false,
          msg: "Error occured: Data NOT saved due to server problem",
          //  <br> Please try again later
          // More descriptive message can be saved in database
          err: err
        });
      } else {
        res.send({
          success: true,
          msg: "Done: Tour Booking data saved successfully"
        });
      }
    });
  },

  saveTransferBooking: function(req, res) {
    console.log(req.body);
    var bookingData = new Booking();
    // console.log('sessionid', req.sessionID);
    var query = {
      'user.tempId': req.user != null ? req.user._id : req.sessionID
    };
    var update = {
      $push: {
        transfer: req.body.transfer
      }
    };
    var options = {
      upsert: true,
      multi: false
    };

    Booking.findOneAndUpdate(query, update, options, function(err, data) {
      if (err) {
        console.log(err);
        res.send({
          success: false,
          msg: "Error occured: Data NOT saved due to server problem",
          //  <br> Please try again later
          // More descriptive message can be saved in database
          err: err
        });
      } else {
        res.send({
          success: true,
          msg: "Done: Tour Booking data saved successfully"
        });
      }
    });
  },

  saveActivityBooking: function(req, res) {
    console.log(req.body);
    var bookingData = new Booking();
    // console.log('sessionid', req.sessionID);
    var query = {
      'user.tempId': req.user != null ? req.user._id : req.sessionID
    };
    var update = {
      $push: {
        activity: req.body.activity
      }
    };
    var options = {
      upsert: true,
      multi: false
    };

    Booking.findOneAndUpdate(query, update, options, function(err, data) {
      if (err) {
        console.log(err);
        res.send({
          success: false,
          msg: "Error occured: Data NOT saved due to server problem",
          //  <br> Please try again later
          // More descriptive message can be saved in database
          err: err
        });
      } else {
        res.send({
          success: true,
          msg: "Done: Tour Booking data saved successfully"
        });
      }
    });
  },


  getAll: function(req, res) {
    console.log('getting bookings for', req.user._id);
    Booking.findOne({
      'user.tempId': req.user._id
    }, function(err, data) {
      if (err) {
        throw new Error(err);
      }
      res.json(data);
    });
  }


};
