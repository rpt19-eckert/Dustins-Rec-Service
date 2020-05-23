const fs = require('fs');
const file = fs.createWriteStream('./imageSeedData.csv');
const loremIpsum = require('lorem-ipsum').loremIpsum;

const imageColumnNames = 'listing_id, image_url_1, image_url_2, image_url_3, image_url_4, image_url_5, image_url_6';

file.write(imageColumnNames);

//seedDB for listing_images
for (let i = 0; i < 1e7; i ++) {
  let listingId = 10001 + i;
  let imageUrls = [];
  for (let j = 0; j < 6; j++) {
    let imageUrl = `https://picsum.photos/300/200?random=${listingId}${j}`;
    imageUrls.push(imageUrl);

  }
  file.write(`\n ${listingId}, ${imageUrls[0]}, ${imageUrls[1]}, ${imageUrls[2]}, ${imageUrls[3]}, ${imageUrls[4]}, ${imageUrls[5]}`);
}


file.end();
