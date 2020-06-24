const fs = require('fs');
const file = fs.createWriteStream('./relatedListingSeedData.csv');


const imageColumnNames = 'related_listing_id, listing_1_id, listing_2_id, listing_3_id, listing_4_id, listing_5_id, listing_6_id';

file.write(imageColumnNames);

//seedDB for listing_images
for (let i = 0; i < 1e7; i++) {
  let listingId = 10001 + i;
  let imageUrls = [];
  let randomListing1 = Math.floor(Math.random() * 10000000) + 10001;
  let randomListing2 = Math.floor(Math.random() * 10000000) + 10001;
  let randomListing3 = Math.floor(Math.random() * 10000000) + 10001;
  let randomListing4 = Math.floor(Math.random() * 10000000) + 10001;
  let randomListing5 = Math.floor(Math.random() * 10000000) + 10001;
  let randomListing6 = Math.floor(Math.random() * 10000000) + 10001;

  file.write(`\n ${listingId}, ${randomListing1}, ${randomListing2}, ${randomListing3}, ${randomListing4}, ${randomListing5}, ${randomListing6}`);
}


file.end();