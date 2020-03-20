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
  connection.query('SELECT * FROM listings WHERE listing_id IN (10001,10002,10003,10004,10005)', function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectImages = function(listing, callback) {
  let sql = 'SELECT * FROM listing_images WHERE listing_id IN (10001,10002,10003,10004,10005)'
  connection.query(sql, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.selectImages = selectImages;