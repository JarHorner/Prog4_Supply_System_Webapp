import React, { useState, useEffect } from "react";
import CONTENTVIEW from "./ContentView";
import { useNavigate } from 'react-router-dom';
import { ShowAllItems,SearchItemById } from "../calls/ItemCalls"

const RESULTPAGEFINAL = "/result"
const ADDPAGEPATH = "/add"

function Home() {

    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [filteredItem,setFilteredItem] = useState([]); 
   
    //Show all items
    //Search by name
    //Add by name
    const handleChange = (e) =>{
        //const filteredItem = (items.filter((item) => item.item_name.toLowerCase() === e.target.value.toLowerCase()) ); 
        const itemCopy = items; 
        const filteredItem = (itemCopy.filter((item) => item.item_name.toLowerCase().includes(e.target.value.toLowerCase())) );  
        

        if(filteredItem.length > 0 && e.target.value !== ""){
            //SearchItemById(e.target.value).then((data) => setItems(data)); 
            setFilteredItem(filteredItem)
        }else{
            ShowAllItems().then((response) => setFilteredItem(response.data));        
        }
        
    }

    useEffect(() => {
        ShowAllItems().then((response) => {
            setItems(response.data);
            setFilteredItem(response.data); 
          })       
    } , [])


    return (
        <div id="bodyContent" className=" w-screen h-full flex flex-col">
            <div id="header" className=" p-5 h-16 items-center flex text-4xl ">
                Assignment 3
            </div>

            <div id="contentContainer" className="flex flex-col h-full">
                <div className="flex p-5 ">
                    <input 
                        className=" drop-shadow-xl p-2 w-full rounded-2xl" 
                        placeholder="Search by Name..." 
                        type="search"
                        onChange={handleChange}
                        //onClick={setFiltered(true)}
                        // value={searchInput}  
                        >   

                    </input>
                </div>
                <div className="mt-10">
                    <div className="pl-5  flex">
                        <div className="flex-1 text-2xl">
                            Current Items
                        </div>
                        <div className="flex-1 flex justify-end mr-10">
                            <button onClick={()=>{navigate(ADDPAGEPATH)}} className=" bg-blue-700 text-white p-2 w-10 rounded-full drop-shadow-xl">+</button>
                        </div>
                    </div>
                    <div className="p-2 flex flex-wrap justify-center items-center  ">
                    {
                            filteredItem.map(item =>
    
                                <CONTENTVIEW name={item.item_name} id={item.item_id} price={"$"+ item.item_price} page={RESULTPAGEFINAL}/>
                            )       
                      
                }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;