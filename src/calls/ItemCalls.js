const axios = require("axios");
//import axios from "axios";

const ADDRESS = "http://35.209.74.28:8080/api/items/";


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

function SearchItemByName(itemName) {
  return axios
  .get(ADDRESS + itemName)
  .then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });
}

function AddNewItem(name, id, price, quantity, supID) {
  return axios
    .post(ADDRESS,{
      name: name,
      stockQuantity: quantity, 
      price: price,
      supplierId: supID,
      id: id
  }).then((response) => {
    return response;
  })
  .catch((error) => {
    return error;
  });    
}

function RemoveItem(id) {
  return axios
    .delete(ADDRESS + `delete/${id}`,{
      id: id
  }).then((response) => {
    return response
  })
  .catch((error) => {
    return error;
  });    
}

module.exports = {ShowAllItems, SearchItemByName, AddNewItem, RemoveItem };
