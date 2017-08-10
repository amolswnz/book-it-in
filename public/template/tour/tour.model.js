var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TourSchema = new Schema({
  "details": String,
  "startCity": String,
  "endCity": String,
  "island": {
    type: String,
    enum: ['North Island', 'South Island', 'NA'],
    default: 'NA'
  },
  "price": Object,
  "status": {
    type: String,
    enum: ['Active', 'Inactive', 'NA'],
    default: 'Active'
  },
  "updated": {
    type: Date,
    default: Date.now
  }
});

var Tour = module.exports = mongoose.model('Tour', TourSchema);
