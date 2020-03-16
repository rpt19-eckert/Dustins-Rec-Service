var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'recommendations'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var selectAll = function(callback) {
  connection.query('SELECT * FROM listings', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectLocation = function(listing, callback) {
  connection.query('SELECT * FROM listings WHERE listing_id = ?',[listing.id], function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.selectLocation = selectLocation;