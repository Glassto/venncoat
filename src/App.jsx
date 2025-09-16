import { useState } from "react";
import "./styles/App.css";
import Hero from "./sections/Hero";
import Navbar from "./components/Navbar";
import Services from "./sections/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
}

export default App;
