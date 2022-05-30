import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Routers from "./routers"

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Works from "./pages/Works";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import KitchenCalc from "./pages/Kitchen";
import StairsCalc from "./pages/Stairs";
import DoorsCalc from "./pages/Doors";

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path={Routers.MAIN} element={<Main />} />
        <Route path={Routers.WORKS} element={<Works />} />
        <Route path={Routers.CATALOG} element={<Catalog />} />
        <Route path={Routers.CONTACTS} element={<Contacts />} />
        <Route path={Routers.KITCHENCALC} element={<KitchenCalc />} />
        <Route path={Routers.STAIRSCALC} element={<StairsCalc />} />
        <Route path={Routers.DOORSCALC} element={<DoorsCalc />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
