var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  // "activityName": {
  //   type: String,
  //   index: true,
  // },
  // "description": String,
  // "price": Number,
  // "seatingCapacity": {
  //   type: Number,
  //   min: 1
  // },
  // "activityHeading": String,
  // "cityName": String,
  // "cityImage": String,
  // "status": {
  //   type: String,
  //   enum: ['Active', 'Inactive', 'NA'],
  //   default: 'Active'
  // },
  // "updated": {
  //   type: Date,
  //   default: Date.now
  // }
});

var Activity = module.exports = mongoose.model('Activity', ActivitySchema);
