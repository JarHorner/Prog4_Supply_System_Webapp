import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import navbarClasses from "./css/Navbar.module.css";

import { ShowAllItems } from "./calls/ItemCalls"
import HOME from "./pages/Home"
import RESULT from "./pages/Result"


function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    ShowAllItems().then((data) => {
      console.log(data);
      setItems(data);
    })
  })

  return (
    <BrowserRouter className={navbarClasses.Navbar}>
      <div className={navbarClasses.Nav}>
        <div className={navbarClasses.navLogo}>
          <Link
            className={navbarClasses.NavLink}
            to="/"
            activestyle="true"
          >
            Home
          </Link>
        </div>

        <div className={navbarClasses.navMenu}>
          <Link
            className={navbarClasses.NavLink}
            to="/result"
            activestyle="true"
          >
            Results
          </Link>
        </div>
      </div>
      <div>
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/result" element={<RESULT />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
