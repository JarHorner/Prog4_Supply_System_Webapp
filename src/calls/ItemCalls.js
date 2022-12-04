import apiInstance from "../api";
import config from "../config";


export function ShowAllItems() {
    return apiInstance
    .get(config.API.show_all_items)
    .then((response) => {
      return response.data;
    });
    
}

export function SearchItemByName() {

    
}

export function AddNewItem(name, id, price, quantity, supID) {
  console.log('fired in call')
  return apiInstance.post(config.API.add_item,{
      name: name,
      stockQuantity: quantity, 
      price: price,
      supplierId: supID,
      id: id
  }).then((response) => {
    return response
  })
    
}