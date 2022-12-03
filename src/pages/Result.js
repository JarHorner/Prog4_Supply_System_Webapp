

import resultClasses from "../css/Result.module.css";

function Result() {

    return (
        <div className={resultClasses.resultPage}>
            <h1>Results</h1>
            <div className={resultClasses.informationRow}>
                <h3>ID:</h3>
                <p className={resultClasses.information}>item ID</p>
            </div>
            <div className={resultClasses.informationRow}>
                <h3>Quantity:</h3>
                <p className={resultClasses.information}>item quantity</p>
            </div>
            <div className={resultClasses.informationRow}>
                <h3>Price:</h3>
                <p className={resultClasses.information}>item price</p>
            </div>
            <div className={resultClasses.informationRow}>
                <h3>Supplier ID:</h3>
                <p className={resultClasses.information}>item supplier ID</p>
            </div>
        </div>
    );
}


export default Result;