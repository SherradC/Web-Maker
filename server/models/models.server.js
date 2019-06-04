var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds131747.mlab.com:31747/heroku_4zdkw6x0'; // use yours
}


var mongoose = require("mongoose");
var db = mongoose.connect(
    connectionString,
    { useNewUrlParser: true }
);


module.exports = db;
