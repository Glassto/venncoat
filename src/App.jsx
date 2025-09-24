import { useState } from "react";
import "./styles/App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import Steps from "./sections/Steps";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <AboutUs />
      <Steps />
    </>
  );
}

export default App;
