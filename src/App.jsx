import { useState } from "react";
import "./styles/App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Steps from "./sections/Steps";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Steps />
      <Contact />
    </>
  );
}

export default App;
