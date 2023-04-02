import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/HomePage/Home";
import About from "./components/AboutPage/About";

import "./App.css";
import Menu from "./components/MenuPage/Menu";
import Reservation from "./components/ReservationPage/Reservation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/menu" exact element={<Menu />} />
          <Route path="/reservations" exact element={<Reservation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
