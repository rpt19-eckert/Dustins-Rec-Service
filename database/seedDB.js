//forgot that I had to create a branch. Please review the seedDB.js file. Thanks!
const loremIpsum = require("lorem-ipsum").loremIpsum;
const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'admin',
  password : '8989',
  database : 'recommendations'
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const listing_type_options = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
const listing_category_options = ['apartment','house', 'hotel', 'cabin', 'bnb'];

//seedDB for listings table
for (let i = 0; i < 100; i ++) {
  let listing_id = 10001 + i;
  let listing_type =  listing_type_options[Math.floor(Math.random() * 4)];
  let listing_category = listing_category_options[Math.floor(Math.random() * 5)];
  let night_price = 100 + Math.random() * 100;
  let avg_review = 2 + Math.random() * 3;
  let num_review = 2 + Math.floor(Math.random() * 50)
  let number_beds = 1 + Math.floor(Math.random() * 7)
  let listing_title = loremIpsum({
    count: 1,
    format:  "plain",
    sentenceLowerBound: 3,
    sentenceUpperBound: 6,
    units: "sentences"
  });
  let is_fav = i % 20 === 0 ? true : false;
  //INSERT INTO TABLE
  let sql = `INSERT INTO listings
  VALUES ("${listing_id}", "${listing_type}", "${listing_category}", ${night_price}, ${avg_review}, ${num_review}, ${number_beds}, "${listing_title}", ${is_fav});`
  connection.query(sql,function (err, result, fields) {
    if (err) throw err;
    console.log(result);

  });
}

//seedDB for listing_images
for (let i = 0; i < 100; i ++) {
  let listing_id = 10001 + i;
  for (let j = 0; j < 5; j++) {
    let image_url = `https://picsum.photos/300/200?random=${listing_id}${j}`
    let sql = `INSERT INTO listing_images
    VALUES (${listing_id}, "${image_url}");`
    connection.query(sql, function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  }
}




