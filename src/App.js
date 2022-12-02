import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import navbarClasses from "./css/Navbar.module.css";

import HOME from "./pages/Home"
import RESULT from "./pages/Result"


function App() {
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
