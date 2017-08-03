var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RentalcarSchema = new Schema({
  "regNo": {
    type: String,
    index: true,
    uppercase: true
  },
  "carType": String,
  "carImage": String,
  "description": String,
  "rentalPrice": Number,
  "seatingCapacity": {
    type: Number,
    min: 1
  },
  "locationDetail": String,
  "cityName": String,
  "cityImage": String,
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

var Rentalcar = module.exports = mongoose.model('Rentalcar', RentalcarSchema);
