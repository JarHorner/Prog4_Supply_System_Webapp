import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { ShowAllItems,SearchItemById } from "../calls/ItemCalls"


function Result() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const id = parseInt(useLocation().state.itemId);  

    useEffect(() => {
        SearchItemById(id).then((data) => {
            setItems(data[0]);
          })  
    } , [])
    
    return (
        <div id="bodyContent" className=" w-screen h-screen flex flex-col bg-neutral-100">
            <div id="header" className=" p-5 h-16 items-center flex text-2xl ">
                <button onClick={() => { navigate(-1) }} >{"<  Assignment 3"}</button>
            </div>
            <div className="pt-2 px-5">
                Showing Item Information for Selected Item
            </div>
            <div id="contentContainer" className=" flex flex-col h-full bg-white m-2 rounded-2xl drop-shadow-2xl p-2">


                <div>
                    ITEM ID: <span>{items.item_id}</span>
                </div>

                <div>
                    ITEM NAME: <span>{items.item_name}</span>
                </div>

                <div>
                    ITEM QUANTITY: <span>{items.item_quantity}</span>
                </div>

                <div>
                    ITEM PRICE: <span>{items.item_price}</span>
                </div>

                <div>
                    ITEM'S SUPPLIER ID: <span>{items.item_supplier_id}</span>
                </div>
            </div>
        </div>
    );
}


export default Result;