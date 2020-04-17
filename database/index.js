var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : '8989',
  database : 'recommendations'
});

connection.connect(function(err) {
  if (err) throw err;
  //console.log("Connected!");
});

var selectAll = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

  let sql = `SELECT * FROM listings WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
  connection.query(sql, function(err, results, fields) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var selectImages = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

  let sql = `SELECT * FROM listing_images WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
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