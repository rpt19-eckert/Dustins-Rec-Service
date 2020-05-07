const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('dustinancalade', '', '', {
  dialect: 'postgres'
});


class Listing extends Model {}
Listing.init({
  listing_id: { DataTypes.INTEGER, unique: true, primaryKey: true, allowNull: false },
  listing_type: { DataTypes.STRING, allowNull: false },
  listing_category: {DataTypes.STRING, allowNull: false },
  night_price: { DataTypes.FLOAT, allowNull: false },
  avg_review: { DataTypes.FLOAT, allowNull: false },
  num_review: { DataTypes.INTEGER, allowNull: false },
  listing_title: { DataTypes.STRING, unique: true, allowNull: false },
  is_fav: DataTypes.BOOLEAN,
}, {sequelize, modelName: 'Listing'});

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

class Listing_Image extends Model {}
Listing_Image.init({
  listing_id: {DataTypes.INTEGER, image_url},
  image_url_1: {DataTypes.string, unique: true, allowNull: false},
  image_url_2: {DataTypes.string, unique: true, allowNull: false},
  image_url_3: {DataTypes.string, unique: true, allowNull: false},
  image_url_4: {DataTypes.string, unique: true, allowNull: false},
  image_url_5: {DataTypes.string, unique: true, allowNull: false}
}, {sequelize, modelName: Listing_Image});
ListingImage.sync({force: true});

Listing.hasMany(Listing_Image, {foreignKey: 'listing_id'});

// const imageColumnNames = 'listing_id, image_url_1, image_url_2, image_url_3, image_url_4, image_url_5';
// CREATE TABLE listing_images (
//   listing_id INT NOT NULL,
//   image_url VARCHAR(100) NOT NULL,
//   FOREIGN KEY (listing_id)
//     REFERENCES listings(listing_id)
// );
