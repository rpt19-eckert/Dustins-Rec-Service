var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'recommendations'
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log("Connected!");
});

var selectAll = function(listing, callback) {
  let ramdomListing = Math.floor(Math.random() * 100) + 10001
  let sql = `SELECT * FROM listings WHERE listing_id IN (${ramdomListing},${ramdomListing + 1},${ramdomListing +2},${ramdomListing + 3},${ramdomListing + 4})`
  connection.query(sql, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectImages = function(listing, callback) {
  let ramdomListing = Math.floor(Math.random() * 100) + 10001
  let sql = `SELECT * FROM listing_images WHERE listing_id IN (${ramdomListing},${ramdomListing + 1},${ramdomListing +2},${ramdomListing + 3},${ramdomListing + 4})`
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