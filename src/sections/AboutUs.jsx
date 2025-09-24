import Badge from "../components/Badge";
import React from "react";
import IconBadge from "../components/IconBadge";
import { CircleCheckBig, Users } from "lucide-react";
import AboutUsImage from "../assets/about-us-image.webp";
import MoreInfoButton from "../components/MoreInfoButton";

const AboutUs = () => {
  return (
    <section className="aboutus-container">
      <div className="section-header">
        <Badge className="bg-background" content={"Despre noi"} />
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
        <div className="aboutus-points">
          <div>
            <IconBadge icon={<CircleCheckBig color="white" size={22} />} />
            <p>
              Calitate Premium
              <span>Materiale și execuții impecabile</span>
            </p>
          </div>
          <div>
            <IconBadge icon={<Users color="white" size={22} />} />
            <p>
              Parteneri de Încredere
              <span>Experiență și competență garantată</span>
            </p>
          </div>
        </div>
      </div>
      <img className="w-110 rounded-4xl" src={AboutUsImage} alt="" />
    </section>
  );
};

export default AboutUs;
