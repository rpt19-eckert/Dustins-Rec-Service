const fs = require('fs');
const file = fs.createWriteStream('./listingSeedData.csv');
const loremIpsum = require('lorem-ipsum').loremIpsum;

const listingTypeOptions = ['Entire place', 'Private room', 'Hotel room', 'Shared room'];
const listingCategoryOptions = ['apartment', 'house', 'hotel', 'cabin', 'bnb'];
const listingColumnNames = 'listing_id, listing_type, listing_category, night_price, avg_review, num_review, number_beds, listing_title, is_fav';

file.write(listingColumnNames);

// seedDB for listings table
for (let i = 0; i < 100; i ++) {
  let listingId = i + 10001;
  let listingType = listingTypeOptions[Math.floor(Math.random() * 4)];
  let listingCategory = listingCategoryOptions[Math.floor(Math.random() * 5)];
  let nightPrice = 100 + Math.random() * 100;
  let avgReview = 2 + Math.random() * 3;
  let numReview = 2 + Math.floor(Math.random() * 50);
  let numberBeds = 1 + Math.floor(Math.random() * 7);
  let listingTitle = loremIpsum({
    count: 1,
    format: 'plain',
    sentenceLowerBound: 3,
    sentenceUpperBound: 6,
    units: 'sentences'
  });
  let isFav = i % 20 === 0 ? true : false;
  file.write(`\n ${listingId}, ${listingType}, ${listingCategory}, ${nightPrice}, ${avgReview}, ${numReview}, ${numberBeds}, ${listingTitle}, ${isFav}`);
}
file.end();