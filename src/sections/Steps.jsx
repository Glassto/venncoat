import React from "react";
import Badge from "../components/Badge";

const Steps = () => {
  return (
    <section className="steps-container">
      <div className="section-header">
        <Badge content={"Etape și Organizare"} />
        <h1 className="section-title">
          Organizare, planificare și execuție la cele mai înalte standarde
        </h1>
        <p className="section-description">
          Credem că fiecare client merită să știe exact ce urmează. Îți
          prezentăm etapele prin care trecem împreună, astfel încât să ai
          claritate și încredere în tot ceea ce facem.
        </p>
      </div>
    </section>
  );
};

export default Steps;
