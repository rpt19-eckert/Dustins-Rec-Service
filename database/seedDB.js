const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('dustinancalade', '', '', {
  dialect: 'postgres'
});


class Listing extends Model {}
Listing.init({
  listing_id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, allowNull: false },
  listing_type: { type: DataTypes.STRING, allowNull: false },
  listing_category: { type: DataTypes.STRING, allowNull: false },
  night_price: { type: DataTypes.FLOAT, allowNull: false },
  avg_review: { type: DataTypes.FLOAT, allowNull: false },
  num_review: { type: DataTypes.INTEGER, allowNull: false },
  listing_title: { type: DataTypes.STRING, unique: true, allowNull: false },
  is_fav: { type: DataTypes.BOOLEAN, allowNull: false },
}, {sequelize, modelName: 'listing'});

Listing.sync({force: true});

// CREATE TABLE listings (
  //   listing_id INT NOT NULL ,
  //   listing_type VARCHAR(100) NOT NULL,
  //   listing_category VARCHAR(100) NOT NULL,
  //   night_price FLOAT NOT NULL,
  //   avg_review FLOAT NOT NULL,
  //   num_review INT NOT NULL,
  //   num_beds INT NOT NULL,
  //   listing_title VARCHAR(100) NOT NULL,
  //   is_fav BOOLEAN NOT NULL,
  //   PRIMARY KEY(listing_id)
  // );

  class Image extends Model {}
  Image.init({
    listing_id: { type: DataTypes.INTEGER },
    image_url_1: { type: DataTypes.STRING, allowNull: false},
    image_url_2: { type: DataTypes.STRING, allowNull: false},
    image_url_3: { type: DataTypes.STRING, allowNull: false},
    image_url_4: { type: DataTypes.STRING, allowNull: false},
    image_url_5: { type: DataTypes.STRING, allowNull: false}
  }, {sequelize, modelName: 'image'});
  Image.sync({force: true});
 Image.hasOne(Listing);

  const myHouse = Listing.build({listing_id: 1, listing_type: 'big', listing_category: 'forever', night_price: 123.33, avg_review: 3.5, num_review: 47, listing_title: 'my house', is_fav: true});

  const myRivalsHouse = Listing.create({listing_id: 2, listing_type: 'extremely big', listing_category: 'lifetime', night_price: 121.11, avg_review: 3.3, num_review: 12, listing_title: 'my rivals house', is_fav: false});

const myHousePics = Image.build({listing_id: 1, image_url1: 'www.my1.com', image_url1: 'www.my2.com', image_url1: 'www.my3.com', image_url1: 'www.my4.com', image_url1: 'www.my5.com' });

const myRivalsHousePics = Image.build({listing_id: 1, image_url1: 'www.myrival1.com', image_url2: 'www.myrival2.com', image_url3: 'www.myrival3.com', image_url4: 'www.myrival4.com', image_url5: 'www.myrival5.com' });

// console.log('myHouse:', myHouse, 'myRivalsHouse:', myRivalsHouse);
// console.log('myPics:', myHousePics, 'myRivalsPics:', myRivalsHousePics);
// const imageColumnNames = 'listing_id, image_url_1, image_url_2, image_url_3, image_url_4, image_url_5';
// CREATE TABLE listing_images (
//   listing_id INT NOT NULL,
//   image_url VARCHAR(100) NOT NULL,
//   FOREIGN KEY (listing_id)
//     REFERENCES listings(listing_id)
// );

