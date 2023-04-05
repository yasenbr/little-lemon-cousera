import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer>
      <div >
        <section className="img-footer">
          <img
            src={require("../../assets/footer-logo.png")}
            alt="Little Lemon logo"
          ></img>
        </section>
        <section>
          <h1 className="footer-navigation">Navigation</h1>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
          </ul>
        </section>

        <section>
          <h1 className="footer-contact">Contact</h1>
          <div className="footer-links">
            <p>2395 Maldove Way, Chicago Illinois</p>
            <p>(532)-221-8564</p>
            <a
              href="mailto: info@littlelemon.com"
              target="_blank"
              rel="noreferrer"
            >
              info@littlelemon.com
            </a>
          </div>
        </section>
        <section>
          <h1 className="footer-connect">Connect</h1>
          <ul className="footer-links">
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noreferrer">
                Join us!
              </a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer