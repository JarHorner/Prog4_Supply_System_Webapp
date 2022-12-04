const axios = require("axios");

const ADDRESS = "http://35.209.74.28:8080/api/items";


function ShowAllItems(address = ADDRESS) {
    return axios
    .get(address)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error;
    });
}

module.exports = ShowAllItems;