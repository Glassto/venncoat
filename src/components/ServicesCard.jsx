import React from "react";
import { CheckIcon } from "@heroicons/react/16/solid";
import MoreInfoButton from "./MoreInfoButton";
import { BrickWallShield, Paintbrush, Sparkles } from "lucide-react";
import IconBadge from "./IconBadge";

const ServicesCard = () => {
  const servicesCardsData = [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
      <div className="services-cards-container">
        {servicesCardsData.map((service) => (
          <div key={service.id} className="service-card">
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <ul className="features-list space-y-1.5">
              {service.features.map((feature, id) => (
                <li className="features-elements" key={id}>
                  <CheckIcon className="size-4 text-blue-900" />
                  {feature}
                </li>
              ))}
            </ul>
            {service.id === 1 ? (
              <div className="absolute-icon-badge">
                <BrickWallShield color="white" size={22} />
              </div>
            ) : service.id === 2 ? (
              <div className="absolute-icon-badge">
                <Paintbrush color="white" size={22} />
              </div>
            ) : service.id === 3 ? (
              <div className="absolute-icon-badge">
                <Sparkles color="white" size={22} />
              </div>
            ) : null}
            <MoreInfoButton />
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesCard;
