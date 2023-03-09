import React from "react";
// import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
  return (
    <menu>
      <ul>
        <li to="/">
          <img
            src={require("../assets/nav-logo.png")}
            alt="Little Lemon logo"
            className="logo"
          ></img>
        </li>
        <li className="hover-effect" to="/">
          <h1>Home</h1>
        </li>
        <li className="hover-effect" to="/about">
          <h1>About</h1>
        </li>
        <a
          className="hover-effect"
          href={require("../assets/menu.webp")}
          target="_blank"
          rel="noreferrer"
        >
          <h1>Menu</h1>
        </a>
        <li className="hover-effect" to="/reservations">
          <h1>Reservations</h1>
        </li>
        <li className="hover-effect" to="/order">
          <h1>Order</h1>
        </li>
        <li className="hover-effect" to="/login">
          <h1>Login</h1>
        </li>
      </ul>
    </menu>
  );
}

export default Nav;
