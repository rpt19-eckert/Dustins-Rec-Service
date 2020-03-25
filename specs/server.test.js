const app = require('../server');
const request = require("supertest");

describe("Test the root path", () => {
  test("It should response the GET method", async () => {
    const response = await request(app).get("/listings");
    expect(response.statusCode).toBe(200);
  });

  test("It should response the GET method", async () => {
    const response = await request(app).get("/images");
    expect(response.statusCode).toBe(200);
  });

});