const expect = require("chai").expect;
const { ShowAllItems, SearchItemByName, AddNewItem, RemoveItem, CountItems } = require("../src/calls/ItemCalls");

describe("1. GET /items", function () {

  it("returns all items", async function () {
    var itemLen;

    await CountItems()
      .then((response) => {
        itemLen = response.data[0].numItems;
      })

    await ShowAllItems()
      .then((response) => {
        expect(response.status).to.eql(200);
        expect(response.data.length).to.eql(itemLen);
    });
  });

  it("does NOT return all items", async function () {
    const expected = 'ERR_BAD_REQUEST'
    await ShowAllItems("http://35.209.74.28:8080/api/item/")
      .then((response) => {
        expect(response.response.status).to.eql(404);
        expect(response.code).to.eql(expected);
    });
  });
  
});

describe("2. GET /items/:identifier", function () {

  it("return an item by its name", async function () {
    const testName = "Widgets";
    const expected = [
      {
        "item_id":3001,
        "item_name":"Widgets",
        "item_quantity":10,
        "item_price":35.5,
        "item_supplier_id":"50004"
      }
    ]

    await SearchItemByName(testName)
      .then((response) => {
        expect(response.status).to.eql(200);
        expect(response.data).to.eql(expected);
    });

  });

  it("does NOT return an item by an incorrect name", async function () {
    const testName = "Wadgets";
    const expected = "ERR_BAD_REQUEST";

    await SearchItemByName(testName)
      .then((response) => {
        expect(response.response.status).to.eql(400);
        expect(response.code).to.eql(expected);
    });

  });
});

describe("3. POST /items/", function () {

  it("Creates a new item on the database", async function () {
    const testName = 'Bing-Bongs';
    const testId = 1;
    const testQuantity = 96;
    const testPrice = 40.20;
    const testSupplierId = '69420';
    const expected = {
        "status": "Success",
        "data": {
          "_name": testName,
          "_stockQuantity": testQuantity.toString(),
          "_price": testPrice.toString(),
          "_supplierId": testSupplierId
        }
      }

    await AddNewItem(testName, testId, testPrice, testQuantity, testSupplierId)
      .then((response) => {
        console.log(response.code);
        expect(response.status).to.eql(200);
        expect(response.data).to.eql(expected);
    });
  });

  after( function() { 
    console.log("deleting after adding");
    const testId = 1;
    RemoveItem(testId);
  })
})