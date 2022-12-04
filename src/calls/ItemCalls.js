const axios = require("axios");
const config = require("../config");

const ADDRESS = "http://35.209.74.28:8080/api";


function ShowAllItems() {
    return axios
    .get(ADDRESS + config.API.show_all_items)
    .then((response) => {
      return response.data;
    });
}

module.exports = ShowAllItems;