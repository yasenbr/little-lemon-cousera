import React from "react";
import Nav from "../Navigation/Nav";
import HeadingSection from "./HeadingSection";
import WeekSpecials from "./WeekSpecials";
import TestimonialsSection from "./TestimonialsSection";
import AboutSection from "./AboutSection";
import Footer from "../Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <div>
      <HeadingSection/>
      <WeekSpecials/>
      <TestimonialsSection/>
      <AboutSection/>
    </div>
  );
}

export default Home;
