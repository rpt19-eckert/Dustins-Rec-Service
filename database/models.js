const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'dustinancalade',
  username: 'dustinancalade',
  password: 'dustinancalade',
  host: 'localhost'
});


class Listing extends Model {}
Listing.init({
  listing_id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, allowNull: false },
  listing_type: { type: DataTypes.STRING, allowNull: false },
  listing_category: { type: DataTypes.STRING, allowNull: false },
  night_price: { type: DataTypes.FLOAT, allowNull: false },
  avg_review: { type: DataTypes.FLOAT, allowNull: false },
  num_review: { type: DataTypes.INTEGER, allowNull: false },
  num_beds: { type: DataTypes.INTEGER, allowNull: false},
  listing_title: { type: DataTypes.STRING, allowNull: false },
  is_fav: { type: DataTypes.BOOLEAN, allowNull: false },
}, {sequelize, modelName: 'listing', timestamps: false});

Listing.sync({force: true});


  class Image extends Model {}
  Image.init({
    listing_id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, allowNull: false},
    image_url_1: { type: DataTypes.STRING, allowNull: false},
    image_url_2: { type: DataTypes.STRING, allowNull: false},
    image_url_3: { type: DataTypes.STRING, allowNull: false},
    image_url_4: { type: DataTypes.STRING, allowNull: false},
    image_url_5: { type: DataTypes.STRING, allowNull: false},
    image_url_6: { type: DataTypes.STRING, allowNull: false}
  }, {sequelize, modelName: 'image', timestamps: false});
  Image.sync({force: true});

  class Related_Listing extends Model {}
  Related_Listing.init({
    related_listing_id: { type: DataTypes.INTEGER, unique: true, primaryKey: true, allowNull: false},
    listing_1_id: { type: DataTypes.INTEGER, allowNull: false},
    listing_2_id: { type: DataTypes.INTEGER, allowNull: false},
    listing_3_id: { type: DataTypes.INTEGER, allowNull: false},
    listing_4_id: { type: DataTypes.INTEGER, allowNull: false},
    listing_5_id: { type: DataTypes.INTEGER, allowNull: false},
    listing_6_id: { type: DataTypes.INTEGER, allowNull: false},
  }, {sequelize, modelName: 'related_listing', timestamps: false});
  Related_Listing.sync({force: true});