import React from "react";
import Badge from "../components/Badge";
import ServicesCard from "../components/ServicesCard";

const Services = () => {
  return (
    <section className="services-container">
      <Badge className="mx-auto" content={"Servicii"} />
      <div className="section-header mx-auto text-center">
        <h1 className="section-title">
          Mai mult decât finisaje, zidim experiențe care durează
        </h1>
        <p className="section-description">
          Soluții profesionale de finisaje adaptate nevoilor tale rezidențiale
          și industriale:
        </p>
      </div>
      <ServicesCard />
    </section>
  );
};

export default Services;
