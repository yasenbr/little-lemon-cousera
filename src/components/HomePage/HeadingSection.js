import React from 'react'
import { Link } from 'react-router-dom';

function HeadingSection() {
  return (
    <header>
      <article className="heading-Container">
        <section className="heading-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="subsection">
            We are a family owned Mediterranean restaurant, located on Maldove
            Street in Chicago, Illionis. We focus on traditional recipes served
            with a modern twist.
          </p>
          <br></br>
          <Link className="action-button" to="/reservations">
            Reserve a table
          </Link>
        </section>

        <section className="heading-image">
          <img
            src={require("../../assets/food/Reservation-image.avif")}
            alt="Little Lemon restaurant cuisine"
          ></img>
        </section>
      </article>
    </header>
  );
}

export default HeadingSection