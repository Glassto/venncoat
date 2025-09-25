import React from "react";
import Badge from "../components/Badge";
import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";

const Steps = () => {
  const stepsCardsData = [
    {
      id: 1,
      title: "Inspectăm Spațiul și Propunem Soluții",
      description: (
        <>
          Venim la fața locului, analizăm starea actuală și discutăm{" "}
          <span>toate opțiunile</span>. Educăm clientul despre etape, materiale
          și <span>cele mai bune soluții</span> pentru <span>nevoile lui</span>.
        </>
      ),
    },
    {
      id: 2,
      title: "Măsurăm și Oferim Devizul Complet",
      description: (
        <>
          Calculăm cu atenție toate suprafețele și vă prezentăm un{" "}
          <span>preț final clar</span>. Fără <span>costuri ascunse</span>, fără
          surprize - cât scrie în deviz, atât plătiți.
        </>
      ),
    },
    {
      id: 3,
      title: "Stabilim Perioada Contractuală și a Lucrării",
      description: (
        <>
          <span>Discutăm și fixăm</span> împreună <span>data începerii</span> și
          timpul estimat pentru
          <span>finalizare</span>, astfel încât să se potrivească perfect cu{" "}
          <span>programul clientului</span>.
        </>
      ),
    },
    {
      id: 4,
      title: "Semnăm Contractul în Scris",
      description: (
        <>
          Ne asumăm <span>responsabilitatea</span> în scris pentru toate
          detaliile proiectului. <span>Fără promisiuni vagi</span> - fiecare
          etapă este clar <span>stabilită și semnată</span>.
        </>
      ),
    },
    {
      id: 5,
      title: "Planificăm Logistic și Pregătim Șantierul",
      description: (
        <>
          Asigurăm materiale, <span>organizăm</span> echipa și{" "}
          <span>protejăm</span> spațiul existent (podele, mobilier, etc) pentru
          o <span>lucrare curată și eficientă</span>.
        </>
      ),
    },
    {
      id: 6,
      title: "Executăm Lucrarea Impecabil",
      description: (
        <>
          Începem exact la data stabilită și lucrăm cu{" "}
          <span>atenție la detalii</span>. Păstrăm șantierul ordonat și lăsăm{" "}
          <span>spațiul curat la final</span>.
        </>
      ),
    },
    {
      id: 7,
      title: "Oferim Suport și după Finalizare",
      description: (
        <>
          <span>Răspundem la telefon</span> și suntem <span>disponibili</span>{" "}
          pentru orice întrebare sau nevoie, chiar și{" "}
          <span>după încheierea proiectului.</span>
        </>
      ),
    },
  ];

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
          {stepsCardsData.map((step) => (
            <div key={step.id} className="step-card">
              <div className="step-number">
                <div className="step-badge">{step.id}</div>
                <div className="step-bar"></div>
              </div>
              <div className="step-header">
                <h2 className="step-title">{step.title}</h2>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;
