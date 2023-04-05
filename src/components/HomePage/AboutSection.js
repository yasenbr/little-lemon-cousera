import React from "react";
import "./AboutSection.css";

function AboutSection() {
  return (
    <article className="about-us-container">
      <section className="about-heading">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="about-subtext">
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
      </section>

      <section className="double-image">
        <img
          className="about-img-2"
          src={require("../../assets/About-us2.jpg")}
          alt="Little Lemon restaurant cuisine 2"
        ></img>
        <img
          className="about-img-1"
          src={require("../../assets/About-us.jpg")}
          alt="Little Lemon restaurant cuisine 1"
        ></img>
      </section>
    </article>
  );
}

export default AboutSection;
