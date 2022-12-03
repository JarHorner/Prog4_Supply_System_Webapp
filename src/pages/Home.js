import React, { useState, useEffect } from "react";
import homeClasses from "../css/Home.module.css";
import { SearchItemByName } from "./calls/ItemCalls";

function Home() {
    const [searchInput,setSearchInput] = useState();
    
    const handleChange = (e) =>{
        SearchItemByName(e.target.value).then((data) => setSearchInput(data)); 
    }

    return (
        <div className={homeClasses.homePage}>
            <h1>Home</h1>
            <input 
                type="text"
                placeholder="Enter name of item"
                onChange={handleChange}
                value={searchInput}
                >
                    
            </input>
            <button className={homeClasses.enterButton}>Enter</button>
            <div className={homeClasses.itemsList}>
                {/*This is where the list of items go!*/}
                <div>item name 1</div>
                <div>item name 2</div>
                <div>item name 3</div>
                <div>item name 4</div>
                <div>item name 5</div>
                <div>item name 6</div>
            </div>
        </div>
    );
}


export default Home;