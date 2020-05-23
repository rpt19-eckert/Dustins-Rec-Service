const {Pool} = require('pg');


const pool = new Pool({
  host: 'localhost',
  user: '',
  password: '',
  database: 'dustinancalade',
});



pool.connect(function(err) {
  if (err) {
    throw err;
  }
  console.log('Connected to DB!');
});

const selectAll = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

  let sql = `SELECT * FROM listings WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
  connection.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectImages = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 100) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 100) + 10001;

  let sql = `SELECT * FROM listing_images WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
  connection.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const insertListing = function(listing, callback) {
  let sql = `INSERT INTO listings ( listing_id, listing_type, listing_category, night_price, avg_review, num_review, num_beds, listing_title, is_fav ) VALUES (${listing.id}, "${listing.type}", "${listing.category}", ${listing.price}, ${listing.avgReview}, ${listing.numReview}, ${listing.numBeds}, "${listing.title}", ${listing.isFav})`;
  pool.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const updateListing = function(params, callback) {
  let sql = `UPDATE listings SET listing_id = ?, listing_type = ?, listing_category = ?, night_price = ?, avg_review = ?, num_review = ?, num_beds = ?, listing_title = ?, is_fav = ? WHERE listing_id = ${params[0]}`;
  pool.query(sql, params, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteListing = function(id, callback) {
  let sql = 'DELETE FROM listings WHERE listing_id=?';
  pool.query(sql, id, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports.selectAll = selectAll;
module.exports.selectImages = selectImages;
module.exports.insertListing = insertListing;
module.exports.updateListing = updateListing;
module.exports.deleteListing = deleteListing;


