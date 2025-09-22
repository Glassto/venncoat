import React from "react";
import { CheckIcon } from "@heroicons/react/16/solid";

const ServicesCard = () => {
  const servicesCardsData = [
    {
      title: "Tencuială Premium",
      description:
        "Baza solidă pentru orice proiect, aplicată cu precizie pentru durabilitate și finisaje impecabile.",
      features: [
        "Suprafețe perfect nivelate",
        "Rezistență îndelungată",
        "Aplicare rapidă și curată",
      ],
    },
    {
      title: "Vopsitorie Profesională",
      description:
        "Culori uniforme și protecție pe termen lung, prin tehnici moderne și materiale premium.",
      features: [
        "Acoperire uniformă fără urme",
        "Paletă variată de culori",
        "Protecție împotriva uzurii",
      ],
    },
    {
      title: "Finisaje Decorative",
      description:
        "Detalii care transformă spațiile în experiențe vizuale, cu texturi și efecte personalizate.",
      features: [
        "Texturi și efecte personalizate",
        "Aspect premium și modern",
        "Întreținere ușoară",
      ],
    },
  ];

  return (
    <>
      {/* <div className="container my-10 grid gap-6 md:grid-cols-3">
        {servicesCardsData.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-zinc-300 bg-white p-6"
          >
            <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
            <p className="mb-6 text-sm text-zinc-700">{service.description}</p>
            <div className="flex flex-col gap-3">
              {service.features?.map((feature) => (
                <p>{feature}</p>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      <div className="services-cards-container">
        {servicesCardsData.map((service) => (
          <div key={service.title} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <ul className="features-list space-y-1.5">
              {service.features.map((feature) => (
                <li className="features-elements" key={service.title}>
                  <CheckIcon className="size-4 text-blue-900" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesCard;
