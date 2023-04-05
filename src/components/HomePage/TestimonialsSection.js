import React from 'react'
import Boy from "../../assets/boy.png";
import Girl from "../../assets/girl.png"
import TestimonialCard from "./TestimonialCard";
import "./TestimonialsSection.css";

function TestimonialsSection() {
  return (
    <section className="testimonials-container">
      <article className="testimonials-header">
        <h1>Testimonials</h1>
      </article>

      <section className="testimonials-cards">
        <TestimonialCard className
          image={Boy}
          name="Antonio Lopez"
          description="This is the best Mediterranean food that I've ever had!"
        />
        <TestimonialCard
          image={Boy}
          name="Marckus Smith"
          description="Really loved the cozy vibes and 
                delicious food here."
        />
        <TestimonialCard
          image={Girl}
          name="Shely Bradley"
          description="I've had some great Mediterranean food before, but none of them beats
             Little Lemon in flavor and texture."
        />
        <TestimonialCard
          image={Boy}
          name="Antony Barlow"
          description="Great food, welcoming staff, cozy atmosphere. A great place to 
                treat your kids to."
        />
        <TestimonialCard
          image={Boy}
          name="Stephan Litvor"
          description="The food here really refreshed me after a late night shift
                at the local supply depot."
        />
        <TestimonialCard
          image={Girl}
          name="Andrea klopp"
          description="The food here was fire!! Everyone should try this place
                 out at least once if they live in Chicago."
        />
      </section>
    </section>
  );
}

export default TestimonialsSection