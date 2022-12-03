

import homeClasses from "../css/Home.module.css";

function Home() {

    return (
        <div className={homeClasses.homePage}>
            <h1>Home</h1>
            <input 
                type="text"
                placeholder="Enter name of item">
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