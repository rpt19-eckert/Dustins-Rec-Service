
const db = require('../database');
describe('Test the database queries', () => {
  test('query listings info from mysql server', done => {
    const callback = (error, data) => {
      try {
        const dataObject = JSON.parse(JSON.stringify(data));
        expect(Object.keys(dataObject).length).toBeGreaterThan(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    db.selectAll(null, callback);
  });

  test('create a new listing on mysql server', done => {
    const listing = {
      "id": 12002,
      "type": "Entire place",
      "category": "cabin",
      "price": 160.00,
      "avgReview": 4,
      "numReview": 8,
      "numBeds": 2,
      "title": "blah blah blah 2",
      "isFav": 0
    };
    const callback = (error, data) => {
      try {
        const dataObject = JSON.parse(JSON.stringify(data));
        expect(dataObject.affectedRows).toEqual(1);
        expect(dataObject.changedRows).toEqual(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    db.insertListing(listing, callback);
  });

  test('update a listing on mysql server', done => {
    const listing = [ 12002, 'hotel room', 'hotel', 140.00, 2, 4, 4, 'new blah blah', 1];
    const callback = (error, data) => {
      try {
        const dataObject = JSON.parse(JSON.stringify(data));
        expect(dataObject.affectedRows).toEqual(1);
        expect(dataObject.message.length).toBeGreaterThan(1);
        expect(dataObject.changedRows).toEqual(1);
        done();
      } catch (error) {
        done(error);
      }
    };
    db.updateListing(listing, callback);
  });

  test('delete listing info from mysql server', done => {
    const listingId = [12002];
    const callback = (error, data) => {
      try {
        const dataObject = JSON.parse(JSON.stringify(data));
        expect(dataObject.affectedRows).toEqual(1);
        expect(dataObject.changedRows).toEqual(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    db.deleteListing(listingId, callback);
  });

  test('query listing images from mysql server', done => {
    const callback = (error, data) => {
      try {
        const dataObject = JSON.parse(JSON.stringify(data));
        expect(Object.keys(dataObject).length).toBeGreaterThan(0);
        done();
      } catch (error) {
        done(error);
      }
    };
    db.selectImages(null, callback);
  });
});
