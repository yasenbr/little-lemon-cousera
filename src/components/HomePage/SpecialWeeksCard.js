import React from 'react';
import { Link } from "react-router-dom";
import "./SpecialWeeksCard.css";

function SpecialWeeksCard(props) {
    const[image, name, price, description] = [props.image, props.name, props.price, props.description];
  return (
    <article className="spacial-card">
      <img src={image} alt="Special menu" />
      <section className="special-card-content">
        <h1>{name}</h1>
        <h3>{price}</h3>
        <p>{description}</p>
        <Link className="action-button" to="/order">
          Order Now
        </Link>
      </section>
    </article>
  );
}

export default SpecialWeeksCard