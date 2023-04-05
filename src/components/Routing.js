
import { Routes, Route } from "react-router-dom";
import Home from "./HomePage/Home";
import About from "./AboutPage/About";
import Menu from "./MenuPage/Menu";
import Reservation from "./ReservationPage/Reservation";

function Routing() {
  return (
      <Routes>
        <Route path="/"  element={<Home />} />
        <Route path="/about"  element={<About />} />
        <Route path="/menu"  element={<Menu />} />
        <Route path="/reservations"  element={<Reservation />} />
      </Routes>
  );
}

export default Routing