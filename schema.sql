
DROP DATABASE IF EXISTS recommendations;

CREATE DATABASE recommendations;

USE recommendations;

CREATE TABLE listings (
  listing_id INT NOT NULL ,
  listing_type VARCHAR(100) NOT NULL,
  listing_category VARCHAR(100) NOT NULL,
  night_price FLOAT NOT NULL,
  avg_review FLOAT NOT NULL,
  num_review INT NOT NULL,
  num_beds INT NOT NULL,
  listing_title VARCHAR(100) NOT NULL,
  is_fav BOOLEAN NOT NULL,
  PRIMARY KEY(listing_id)
);

CREATE TABLE listing_images (
  listing_id INT NOT NULL,
  image_url VARCHAR(100) NOT NULL,
  FOREIGN KEY (listing_id)
    REFERENCES listings(listing_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < schema.sql
 *  to create the database and the tables.*/