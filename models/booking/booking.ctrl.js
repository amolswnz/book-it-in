var mongoose = require('mongoose');
//Load all your models
var Booking = require('./booking.model.js');


var Activity = require('./../activity/activity.model');
var Rentalcar = require('./../rentalcar/rentalcar.model');
var Tour = require('./../tour/tour.model');
var Transfer = require('./../transfer/transfer.model');

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
    // console.log('getting bookings for', req.user._id);
    // Booking.aggregate([{
    //     $match: {
    //       'user.tempId': req.user._id
    //     }
    //   },
    //   {
    //     $unwind: "$activity"
    //   }, {
    //     $lookup: {
    //       from: 'activities',
    //       localField: 'activity.objId',
    //       foreignField: '_id',
    //       as: 'activityDetail'
    //     }
    //   },
    //   {
    //     '$sort': {
    //       'activity.dateBooked': -1
    //     }
    //   },
    // ], function(err, result) {
    //   if (err) {
    //     next(err);
    //   } else {
    //     res.json(result);
    //   }
    // });

    Booking.findOne({
      'user.tempId': req.user._id
    }, function(err, bookings) {
      if (err) {
        throw new Error(err);
      }
      res.json(bookings);
    });
    //
    //
    // for (t = 0; t < bookings.transfer.length; t++)
    //   console.log(bookings.transfer[t]);
    // for (t = 0; t < bookings.tour.length; t++)
    //   console.log(bookings.tour[t]);
    // for (t = 0; t < bookings.rentalcar.length; t++)
    //   console.log(bookings.rentalcar[t]);

    // res.json(bookings);



  },

  getActivityBookings: function(req, res) {
    Booking.aggregate([{
        $match: {
          'user.tempId': req.user._id
        }
      },
      {
        $unwind: "$activity"
      }, {
        $lookup: {
          from: 'activities',
          localField: 'activity.objId',
          foreignField: '_id',
          as: 'activityDetail'
        }
      },
      {
        '$sort': {
          'activity.dateBooked': -1
        }
      },
    ], function(err, result) {
      if (err) {
        next(err);
      } else {
        res.json(result);
      }
    });
  },

  getActivity: function(req, res, next) {
    console.log(req.user._id, req.params.id);
    Booking.findOne({
        'activity._id': req.params.id
      }, {
        'activity': {
          $elemMatch: {
            '_id': req.params.id
          }
        }
      },
      function(err, result) {
        if (err) {
          next(err);
        } else {
          console.log(result);
          res.json(result.activity[0]);
        }
      });
  },

  deleteActivity: function(req, res, next) {
    console.log(req.user._id, req.params.id);
    Booking.update({
        'user.tempId': req.user._id
      }, {
        $pull: {
          'activity': {
            '_id': req.params.id
          }
        }
      },
      function(err, result) {
        if (err) {
          next(err);
        } else {
          console.log(result);
          res.json(result);
        }
      });
  },

  updateActivity: function(req, res, next) {
    Booking.findOneAndUpdate({
        'user.tempId': req.user._id,
        'activity._id': req.params.id
      }, {
        '$set': {
          'activity.$': req.body.activity
        }
      },
      function(err, result) {
        if (err) {
          next(err);
        } else {
          console.log(result);
          res.json(result);
        }
      });
  },


};
