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

export function AddNewItem() {

    
}