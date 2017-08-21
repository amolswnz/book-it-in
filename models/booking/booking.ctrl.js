var mongoose = require('mongoose');
//Load all your models
var Booking = require('./booking.model.js');

//Now, this call won't fail because User has been added as a schema.
mongoose.model('Booking');

module.exports = {
  // Save booking

  saveActivityBooking: function(req, res) {
    console.log(req.body);
    // > db.movieDetails.updateOne( { title: “The Martian” } , { $set: { awards: { wins: 8, nominaions: 14 } } }, { upsert: true } )
    // If the document does not exists insert the document (upsert: true)

    // console.log('sessionid', req.sessionUser, req.user._id);
    var bookingData = new Booking();
    // bookingData.save();


    // A.findOneAndUpdate(conditions, update, options, callback) // executes
    // console.log(req.user != null ? req.user._id : req.sessionID);
    // var userid = req.user != null ? req.user._id : req.sessionID;
    console.log('sessionid', req.sessionID);
    var query = {
      'user.tempId' : req.user != null ? req.user._id : req.sessionID
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
        res.send({
          err: "Data NOT saved.",
          msg: err
        });
      } else {
        res.send({
          done: "Data saved."
        });
      }
    });



    // res.send({'done': 'Data saved'});


    // next();
    // var booking = {
    //   "user": {
    //     "objId": userObjId,
    //     "notes": 'some note',
    //   },
    //   "activity": [{
    //     "objId": ,
    //     "adult": ,
    //     "child": ,
    //     "dateBooked": ,
    //   }]
    // }
    // console.log('booking saved',req, res);
  }


};
