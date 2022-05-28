import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Works from "./pages/Works";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import WorksGalery from "./pages/WorksGalery"

import "./styles/main.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/works"  element={<Works />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/works/:title" element={<WorksGalery />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
