import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendingMachine />} />
        <Route path="soda" element={<Soda />} />
        <Route path="chips" element={<Chips />} />
        <Route path="candy" element={<Candy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
