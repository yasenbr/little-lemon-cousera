import React from "react";
import { Link } from "react-router-dom";
import "./About.css";

function About() {
  return (
    <header>
      <article className="about-page-Container">
        <section className="about-page-heading-text">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p className="about-page-subsection">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </section>

        <section className="about-page-heading-image">
          <img
            src={require("../../assets/About-Page.jpg")}
            alt="Little Lemon restaurant cuisine"
          ></img>
        </section>
      </article>
    </header>
  );
}

export default About;
