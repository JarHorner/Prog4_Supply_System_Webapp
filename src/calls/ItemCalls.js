import apiInstance from "../api";
import config from "../config";


export function ShowAllItems() {
    return apiInstance
    .get(config.API.show_all_items)
    .then((response) => {
      return response.data;
    });
    
}

export function SearchItemById(identifier) {

  return apiInstance
  .get(config.API.get_item+identifier,{
  
  })
  .then((response) => {
    return response.data
  })
    
}

export function AddNewItem() {

    
}