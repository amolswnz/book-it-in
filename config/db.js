var mongoose = require('mongoose');

module.exports = function(config) {
    var dbHost = 'mongodb://localhost/',
        dbName = 'meanApp';
    mongoose.Promise = global.Promise;
    mongoose.connect(dbHost + dbName);
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, ' connection error'));
    db.once('open', function callback() {
        console.log('--- MongoDB database connected at ' + dbHost);
        console.log('------- Database opened ' + dbName);
    });
};
