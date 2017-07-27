var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    'firstName': String,
    'lastName': String,
    'email': String,
    'pwd': String,
    'mobile': String,
    'status': {
        type: String,
        enum: ['Active', 'Inactive', 'Deleted'],
        default: 'Active'
    }
});

module.exports = mongoose.model('meanAppUser', UserSchema, 'meanAppUsers');
