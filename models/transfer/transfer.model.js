var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TransferSchema = new Schema({
  "details": String,
  "startCity": String,
  "endCity": String,
  "island": {
    type: String,
    enum: ['North Island', 'South Island', 'NA'],
    default: 'NA'
  },
  "price": Number,
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

var Transfer = module.exports = mongoose.model('Transfer', TransferSchema);
