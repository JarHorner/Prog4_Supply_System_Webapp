const expect = require("chai").expect;
const ShowAllItems = require("../src/calls/ItemCalls");

describe("GET /items", function () {

  it("returns all items using function", async function () {

    await ShowAllItems().then((response) => {
      expect(response.status).to.eql(200);
      expect(response.data.length).to.eql(45);
    });

  });

  it("does NOT return all items using function", async function () {

    await ShowAllItems("http://35.209.74.28:8080/api/item").then((response) => {
      expect(response.status).to.eql(404);
    })

  });
});

