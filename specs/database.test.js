const db = require('../database');
describe("Test the database queries", () => {
  test('query listings info from mysql server', done => {
    function callback(error, data) {
      try {
        const dataObject = JSON.parse(JSON.stringify(data))
        expect(dataObject).toContainEqual(
          {"avg_review": 2.93742, "is_fav": 1, "listing_category": "cabin", "listing_id": 10001, "listing_title": "Cupidatat ex mollit.", "listing_type": "Hotel room", "night_price": 128.815, "num_beds": 3, "num_review": 19}
        );
        done();
      } catch (error) {
        done(error);
      }
    }
    db.selectAll(null, callback)
  });

  test('query listing images from mysql server', done => {
    function callback(error, data) {
      try {
        const dataObject = JSON.parse(JSON.stringify(data))
        expect(dataObject).toContainEqual(
          {
            "listing_id": 10001,
            "image_url": "https://picsum.photos/450/300"
          }
        );
        done();
      } catch (error) {
        done(error);
      }
    }
    db.selectImages(null, callback)
  });
});
