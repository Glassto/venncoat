import React from "react";
import Badge from "../components/Badge";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Steps = () => {
  return (
    <section className="steps-container">
      <div className="section-header">
        <Badge content={"Etape și Organizare"} />
        <h1 className="section-title">
          Organizare, planificare și execuție <br /> la cele mai înalte
          standarde
        </h1>
        <p className="section-description">
          Credem că fiecare client merită să știe exact ce urmează. Îți
          prezentăm etapele prin care trecem împreună, astfel încât să ai
          claritate și încredere în tot ceea ce facem.
        </p>
      </div>
      <div className="steps-cards-container">
        <div className="interaction">
          <div className="ping"></div>
          <ArrowLongLeftIcon className="size-6" />
          <p>Derulați</p>
          <ArrowLongRightIcon className="size-6" />
        </div>
        <div className="steps-cards no-scrollbar">
          <div className="step-card">
            <div className="step-number">
              <div className="step-badge">1</div>
              <div className="step-bar"></div>
            </div>
            <div className="step-header">
              <h2 className="step-title">
                Inspectăm Spațiul și Propunem Soluții
              </h2>
              <p className="step-description">
                Venim la fața locului, analizăm starea actuală și discutăm{" "}
                <span>toate opțiunile</span>. Educăm clientul despre etape,
                materiale și <span>cele mai bune soluții</span> pentru{" "}
                <span>nevoile lui</span>.
              </p>
            </div>
          </div>
          <div className="step-card">
            <div className="step-number">
              <div className="step-badge">2</div>
              <div className="step-bar"></div>
            </div>
            <div className="step-header">
              <h2 className="step-title">
                Inspectăm Spațiul și Propunem Soluții
              </h2>
              <p className="step-description">
                Venim la fața locului, analizăm starea actuală și discutăm{" "}
                <span>toate opțiunile</span>. Educăm clientul despre etape,
                materiale și <span>cele mai bune soluții</span> pentru{" "}
                <span>nevoile lui</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
