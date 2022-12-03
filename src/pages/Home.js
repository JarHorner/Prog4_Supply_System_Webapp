
import CONTENTVIEW from "./ContentView";
import { useNavigate } from 'react-router-dom';

const RESULTPAGEFINAL = "/result"
const ADDPAGEPATH = "/add"

function Home() {

    const navigate = useNavigate();

    //Show all items
    //Search by name
    //Add by name

    return (
        <div id="bodyContent" className=" w-screen h-full flex flex-col">
            <div id="header" className=" p-5 h-16 items-center flex text-4xl ">
                Assignment 3
            </div>

            <div id="contentContainer" className="flex flex-col h-full">
                <div className="flex p-5 ">
                    <input className=" drop-shadow-xl p-2 w-full rounded-2xl" placeholder="Search by Name..." type="search"></input>
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
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        <CONTENTVIEW name="testItem" id="1" price="$5.00" page={RESULTPAGEFINAL} />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Home;