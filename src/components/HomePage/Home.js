import React from "react";
import Nav from "../Navigation/Nav";
import HeadingSection from "./HeadingSection";
import WeekSpecials from "./WeekSpecials";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import Footer from "../Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <Nav />
      <HeadingSection/>
      <WeekSpecials/>
      <TestimonialsSection/>
      <AboutSection/>
      <Footer/>
    </div>
  );
}

export default Home;
