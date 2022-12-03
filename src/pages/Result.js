import { useNavigate } from "react-router-dom";



function Result() {
    const navigate = useNavigate();
    //const id = parseInt(useLocation().state.itemId);  

    
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
                    ITEM ID: <span>Value</span>
                </div>

                <div>
                    ITEM NAME: <span>Value</span>
                </div>

                <div>
                    ITEM QUANTITY: <span>Value</span>
                </div>

                <div>
                    ITEM PRICE: <span>Value</span>
                </div>

                <div>
                    ITEM'S SUPPLIER ID: <span>Value</span>
                </div>
            </div>
        </div>
    );
}


export default Result;