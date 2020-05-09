Server ReadMe
# Table of Contents

1. POST
2. GET
3. PUT
4. Delete

# Create - POST
/listings
body:
{
  "id": 12001,
  "type": "Entire place",
  "category": "cabin",
  "price": 160.00,
  "avgReview": 4,
  "numReview": 8,
  "numBeds": 2,
  "title": "blah blah blah 2",
  "isFav": 0
}
response: (s) 201 (f) 500

# Read - GET
/listings

reponse: (e) 500

(s)

{
    listing_id: 10003,
    listing_type: 'Shared room',
    listing_category: 'apartment',
    night_price: 193.442,
    avg_review: 4.21888,
    num_review: 29,
    num_beds: 7,
    listing_title: 'In quis veniam.',
    is_fav: 0
  }

/images
  sends an object containing 6 images

/:id
  sends index.html




# Update - PUT
/listings
body:
{
  "id": 10006,
  "type": "Hotel room",
  "category": "hotel",
  "price": 20000,
  "avgReview": 4,
  "numReview": 96,
  "numBeds": 8,
  "title": "blah blah blahh",
  "isFav": 1
}

response: (s) 202 (f) 500



# Delete - DELETE
/listings:id

reponse: (s) 202 (f) 500