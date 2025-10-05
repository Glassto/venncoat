import { useState } from "react";
import Badge from "../components/Badge";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const faqData = [
  {
    id: 1,
    question: "Ce tipuri de finisaje oferiți?",
    answer:
      "Oferim o gamă variată de finisaje interioare și exterioare, inclusiv tencuieli decorative, zugrăveli premium, vopsitorii lavabile și aplicări speciale pentru protecție și estetică.",
  },
  {
    id: 2,
    question: "Furnizați și materialele sau trebuie să le asigur eu?",
    answer:
      "Putem colabora în ambele moduri: fie folosim materialele noastre profesionale, testate și recomandate, fie lucrăm cu materialele alese de client, în funcție de preferințe și buget.",
  },
  {
    id: 3,
    question: "Cum se stabilește prețul lucrărilor?",
    answer:
      "Putem colabora în ambele moduri: fie folosim materialele noastre profesionale, testate și recomandate, fie lucrăm cu materialele alese de client, în funcție de preferințe și buget.",
  },
  {
    id: 4,
    question: "Cât durează finalizarea unui proiect?",
    answer:
      "Putem colabora în ambele moduri: fie folosim materialele noastre profesionale, testate și recomandate, fie lucrăm cu materialele alese de client, în funcție de preferințe și buget.",
  },
  {
    id: 5,
    question: "Ce garanție oferiți pentru lucrările executate?",
    answer:
      "Putem colabora în ambele moduri: fie folosim materialele noastre profesionale, testate și recomandate, fie lucrăm cu materialele alese de client, în funcție de preferințe și buget.",
  },
  {
    id: 6,
    question: "Cum pot solicita o ofertă?",
    answer:
      "Putem colabora în ambele moduri: fie folosim materialele noastre profesionale, testate și recomandate, fie lucrăm cu materialele alese de client, în funcție de preferințe și buget.",
  },
];

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(1);

  return (
    <section className="faq-container">
      <div className="section-header min-w-lg">
        <Badge content={"Întrebări Frecvente"} />
        <h1 className="section-title">
          Ai întrebări?
          <br /> Noi avem răspunsurile!
        </h1>
        <p className="section-description">
          De la servicii și materiale până la termene și costuri, am pregătit
          răspunsuri pentru tine.
        </p>
      </div>
      <div className="faq-questions">
        {faqData.map((faq) => (
          <div key={faq.id} className="faq-question group">
            <button
              className={`faq-title ${activeQuestion === faq.id ? "active" : ""}`}
              onClick={() => {
                setActiveQuestion(activeQuestion === faq.id ? null : faq.id);
                console.log(faq.id);
              }}
            >
              {faq.question}
              <ChevronDownIcon
                className={`size-6 transition-all duration-900 ${activeQuestion === faq.id ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`faq-answer ${activeQuestion === faq.id ? "max-h-30" : "max-h-0"}`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
