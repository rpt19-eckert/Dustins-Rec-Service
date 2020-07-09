# Project Name
Airbnb Mock Recommendations Service Page
[Tour the service](https://www.loom.com/share/5e889a77319a422187aee7aa54e3f0cb)
[Performance Data](./StressTestGraph.png)

## Table of Contents

1. [Description](#Description)
2. [Usage](#Usage)
3. [Requirements](#Requirements)


### Description

 - This project consisted of scaling this inherited Recommendations Service's backend to improve its scaling abilities under varying client loads.  This service was one piece of an Airbnb Mock listing page.  Each piece was created by a different member of a remote team. See [Related Projects](#Related-Projects).

 - Contributions
    - Improved rps from 300 rps to 6000 rps.
    - Deployed the service and proxy on AWS EC2 instances
    - Implemented horizontal scaling and caching to achieve performance gains.
    - Utilized agile workflow practices and a feature branch code review strategy

    ### Related-Projects
  - [Proxy](https://github.com/rpt19-eckert/Dustins-Rec-Proxy)
  - [Images](https://github.com/rpt19-eckert/Photo-Carousel-Service)
  - [Reservations](https://github.com/rpt19-eckert/David-Service-Res)

### Requirements

- Node v12.16.1 (older versions may work, but this is the version it was built on)
- Express: v4.17.1
- Sequelize: v5.21.7
- React: v16.13.1
- Jquery v3.4.1
- pg: v8.0.3
- axios: v0.19.2
- babel: v6.23.0
- for an exhaustive list look under the dependencies and devDependencies in the package.json file.

### Usage

 1. install dependencies
    - npm install - to install the node_modules folder locally
 2. seed database
    - npm run schema - uses Sequelize to create tables and columns in a PostgreSQL DBMS
    - npm run createListingSeed - creates csv of sample data for the Listings table
    -  npm run createRelatedListingSeed - creates csv of sample data for the Related_Listings table
    - npm run createImageSeed - creates csv of sample data for the Images table
    - seed tables
     - COPY listings (listing_id, listing_type, listing_category, night_price, avg_review, num_review, num_beds, listing_title, is_fav) FROM '[insert absolute file path here]/Dustins-Rec-Service/listingSeedData.csv' DELIMITER ',' CSV HEADER;
     - COPY images (listing_id, image_url_1, image_url_2, image_url_3, image_url_4, image_url_5, image_url_6) FROM '[insert absolute file path here]/Dustins-Rec-Service/imageSeedData.csv' DELIMITER ',' CSV HEADER;
     - COPY related_listings (related_listing_id, listing_1_id, listing_2_id, listing_3_id, listing_4_id, listing_5_id, listing_6_id) FROM '[insert absolute file path here]/Dustins-Rec-Service/relatedListingSeedData.csv' DELIMITER ',' CSV HEADER;
     - add foreign keys
       - ALTER TABLE related_listings ADD CONSTRAINT fkl_1 FOREIGN KEY (listing_1_id) REFERENCES listings (listing_id);
       - ALTER TABLE related_listings ADD CONSTRAINT fkl_2 FOREIGN KEY (listing_2_id) REFERENCES listings (listing_id);
       - ALTER TABLE related_listings ADD CONSTRAINT fkl_3 FOREIGN KEY (listing_3_id) REFERENCES listings (listing_id);
       - ALTER TABLE related_listings ADD CONSTRAINT fkl_4 FOREIGN KEY (listing_4_id) REFERENCES listings (listing_id);
       - ALTER TABLE related_listings ADD CONSTRAINT fkl_5 FOREIGN KEY (listing_5_id) REFERENCES listings (listing_id);
       - ALTER TABLE related_listings ADD CONSTRAINT fkl_6 FOREIGN KEY (listing_6_id) REFERENCES listings (listing_id);
  3. run app
    - npm start - starts development server
    - npm react-dev - creates and watches development bundle
  4. run app if deployed
    - npm deploy-dev - combines start and bundle script to make it easier to start up when deployed
    - can be used at any time, but was most useful when the app was deployed
  5. run test suite
    - npm run load-test-get - for endpoint
    - npm run load-test-update - for endpoint
    - npmr run load-test - for database



