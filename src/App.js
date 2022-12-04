import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";



import { ShowAllItems } from "./calls/ItemCalls"

import HOME from "./pages/Home";
import RESULT from "./pages/Result";
import ADD from "./pages/add";


function App() {
  return (
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<HOME />} />
            <Route path="/result" element={<RESULT />} />
            <Route path="/add" element={<ADD />} />
          </Routes>
    
    </BrowserRouter>
  );
}

export default App;
