import Badge from "../components/Badge";
import React from "react";

const AboutUs = () => {
  return (
    <section className="aboutus-container">
      <Badge content={"Despre noi"} />
      <div className="section-header">
        <h1 className="section-title">
          De la bază la detaliu, suntem partenerul tău de încredere
        </h1>
        <p className="section-description">
          Punem clientul în centrul fiecărui proiect. Ascultăm, planificăm și
          executăm cu grijă, astfel încât rezultatul final să depășească
          așteptările. Inovația în materiale, tehnicile moderne și pasiunea
          pentru detaliu ne diferențiază și ne ajută să creăm spații funcționale
          și estetice.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
