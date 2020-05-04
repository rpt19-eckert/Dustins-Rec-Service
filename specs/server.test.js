const app = require('../server');
const request = require('supertest');

describe('Test the root path', () => {
  test('It should respond to the GET method, listings', async (done) => {
    const response = await request(app).get('/listings');
    expect(response.statusCode).toBe(200);
    done();
  });

  test('It should response the GET method, images', async (done) => {
    const response = await request(app).get('/images');
    expect(response.statusCode).toBe(200);
    done();
  });

  // test('It should respond to the POST method, listings', async () => {
  //   const response = await request(app)
  //     .post('/listings')
  //     .send({ "id": 12001,
  //     "type": "Entire place",
  //     "category": "cabin",
  //     "price": 160.00,
  //     "avgReview": 4,
  //     "numReview": 8,
  //     "numBeds": 2,
  //     "title": "blah blah blah 2",
  //     "isFav": 0 })
  //     .set('Accept', 'application/json')
  //     .expect(200)
  // });

  test('It should response the PUT method, listings', async (done) => {
    const response = await request(app).put('/listings');
    expect(response.statusCode).toBe(202);
    done();

  });

  test('It should response the DELETE method, listings', async (done) => {
    const response = await request(app).delete('/listings');
    expect(response.statusCode).toBe(202);
    done();

  });


});