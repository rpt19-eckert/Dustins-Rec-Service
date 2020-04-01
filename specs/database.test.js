
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
