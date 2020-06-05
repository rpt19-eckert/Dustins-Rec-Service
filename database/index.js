const {Pool} = require('pg');

// localdb
// const pool = new Pool({
//   host: 'localhost',
//   user: '',
//   password: '',
//   database: 'dustinancalade',
// });

//aws db
const pool = new Pool({
  host: '172.31.6.166',
  user: 'postgres',
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
  let ramdomListing1 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 10000000) + 10001;

  let sql = `SELECT * FROM listings WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
  pool.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const selectImages = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 10000000) + 10001;

  let sql = `SELECT * FROM images WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`;
  pool.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const insertListing = function(listing, callback) {

  let sql = `INSERT INTO listings VALUES (${listing.id}, '${listing.type}', '${listing.category}', ${listing.price}, ${listing.avgReview}, ${listing.numReview}, ${listing.numBeds}, '${listing.title}', ${listing.isFav})`;
  pool.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const updateListing = function(params, callback) {
  let sql = `UPDATE listings SET listing_id = ${params[0]}, listing_type = '${params[1]}', listing_category = '${params[2]}', night_price = ${params[3]}, avg_review = ${params[4]}, num_review = ${params[5]}, num_beds = ${params[6]}, listing_title = '${params[7]}', is_fav = ${params[8]} WHERE listing_id = ${params[0]}`;
  pool.query(sql, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteListing = function(id, callback) {
  let sql = `DELETE FROM listings WHERE listing_id=${id}`;
  pool.query(sql, function (err, results) {
    if (err) {
      console.log('err', err);
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


