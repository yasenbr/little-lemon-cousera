import React from "react";
import "./TestimonialCard.css"


function TestimonialCard(props) {
  const [image, name, description] = [
    props.image,
    props.name,
    props.description,
  ];
  return (
    <article className="testimonial-card">
      <img src={image} alt="person Icon"></img>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}

export default TestimonialCard;
