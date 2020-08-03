const {Pool} = require('pg');

//localdb comment of if deploying
const pool = new Pool({
  host: 'localhost',
  user: '',
  password: '',
  database: 'dustinancalade',
});

//uncomment if using aws
// const pool = new Pool({
//   host: 'ec2-54-219-244-52.us-west-1.compute.amazonaws.com',
//   user: 'dkancalade',
//   password: 'dkancalade',
//   database: 'dustinancalade',
//   max: 2,
//   port: 5432
// });

pool.connect((err, client, release) => {
  if (err) {
    console.error(err);
  }
});

const selectAll = function(listing, callback) {
  let ramdomListing1 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing2 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing3 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing4 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing5 = Math.floor(Math.random() * 10000000) + 10001;
  let ramdomListing6 = Math.floor(Math.random() * 10000000) + 10001;

  return pool.query(`SELECT * FROM listings WHERE listing_id IN (${ramdomListing1},${ramdomListing2},${ramdomListing3},${ramdomListing4},${ramdomListing5},${ramdomListing6})`, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


const selectRelatedListings = function(listing, callback) {
  const sqlA = `select listing_1_id, listing_2_id, listing_3_id, listing_4_id, listing_5_id, listing_6_id from related_listings where related_listing_id = ${listing}`;
  return pool.query(sqlA, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      const sql2 = `SELECT * FROM listings where listing_id IN (${res.rows[0]['listing_1_id']}, ${res.rows[0]['listing_2_id']}, ${res.rows[0]['listing_3_id']}, ${res.rows[0]['listing_4_id']}, ${res.rows[0]['listing_5_id']}, ${res.rows[0]['listing_6_id']})`;
      return pool.query(sql2, (err, finalRes) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, finalRes);
        }
      });
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
  return pool.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const insertListing = function(listing, callback) {

  let sql = `INSERT INTO listings VALUES (${listing.id}, '${listing.type}', '${listing.category}', ${listing.price}, ${listing.avgReview}, ${listing.numReview}, ${listing.numBeds}, '${listing.title}', ${listing.isFav})`;
  return pool.query(sql, function(err, results, fields) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const updateListing = function(params, callback) {
  let sql = `UPDATE listings SET listing_id = ${params[0]}, listing_type = '${params[1]}', listing_category = '${params[2]}', night_price = ${params[3]}, avg_review = ${params[4]}, num_review = ${params[5]}, num_beds = ${params[6]}, listing_title = '${params[7]}', is_fav = ${params[8]} WHERE listing_id = ${params[0]}`;
  return pool.query(sql, function (err, results) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

const deleteListing = function(id, callback) {
  let sql = `DELETE FROM listings WHERE listing_id=${id}`;
  return pool.query(sql, function (err, results) {
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
module.exports.selectRelatedListings = selectRelatedListings;
