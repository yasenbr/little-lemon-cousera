import React from "react";
import Nav from "./components/Navigation/Nav";
import Footer from "./components/Footer/Footer";
import Routing from "./components/Routing";
import "./App.css";

function App() {
  return (
    <>
      <Nav />
      <Routing/>
      <Footer />
    </>
  );
}

export default App;
