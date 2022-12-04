const request = require("supertest")("http://35.209.74.28:8080/api");
const expect = require("chai").expect;
const ItemCalls = require("../src/calls/ItemCalls");

describe("GET /items", function () {
  it("returns all items, limited to 30 per page", async function () {
    //const response = await request.get("/items");
    const response = await ItemCalls();

    expect(response.status).to.eql(200);
    expect(response.body.data.length).to.eql(30);
  });
});

