var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookingSchema = new Schema({
  'user': {
    userObjId: Schema.Types.ObjectId,
    tempId: String,
    notes: String
  },
  'activity': [{
    objId: Schema.Types.ObjectId,
    adult: Number,
    child: Number,
    dateBooked: Date,
    created_at: {
      type: Date,
      default: Date.now
    }
  }],
  'tour': [{
    objId: Schema.Types.ObjectId,
    adult: Number,
    child: Number,
    dateBooked: Date,
    created_at: {
      type: Date,
      default: Date.now
    }
  }],
  'rentalcar': [{
    objId: Schema.Types.ObjectId,
    dateFrom: Date,
    dateTo: Date,
    created_at: {
      type: Date,
      default: Date.now
    }
  }],
  'transfer': [{
    objId: Schema.Types.ObjectId,
    pax: Number,
    dateBooked: Date,
    created_at: {
      type: Date,
      default: Date.now
    }
  }]
});

var Booking = module.exports = mongoose.model('Booking', BookingSchema);
