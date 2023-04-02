import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <menu>
      <ul>
        <Link to="/">
          <img
            src={require("../../assets/nav-logo.png")}
            alt="Linkttle Lemon logo"
            className="logo"
          ></img>
        </Link>
        <Link className="hover-effect" to="/">
          <h1>Home</h1>
        </Link>
        <Link className="hover-effect" to="/about">
          <h1>About</h1>
        </Link >
        <Link className="hover-effect" to="/menu"><h1>Menu</h1></Link>
        <Link className="hover-effect" to="/reservations">
          <h1>Reservations</h1>
        </Link>
      </ul>
    </menu>
  );
}

export default Nav;
