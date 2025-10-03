import { useRef, useEffect, useState } from "react";
import Badge from "../components/Badge";
import pointsTexture from "../assets/points-texture.webp";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <section className="contact-section">
      <img className="top-texture" src={pointsTexture} alt="" />
      <img className="bottom-texture" src={pointsTexture} alt="" />
      <section className="contact-container">
        <div className="section-header mx-auto text-center">
          <Badge className="dark-badge" content={"Contact"} />
          <h1 className="section-title px-20 text-white">
            Descoperă cum putem aduce valoare spațiului tău
          </h1>
          <p className="section-description px-16 text-neutral-400">
            Ia legătura cu echipa noastră pentru o consultanță și ofertă
            adaptată nevoilor proiectului tău
          </p>
        </div>
        <div className="contact-options">
          <div className="contact-info">
            <h2>Informații de contact:</h2>
            <div className="contact-badge">
              <div className="icon">
                <Phone color="white" size={22} />
              </div>
              <p className="info">
                Apelează-ne
                <span>+40 742 456 789</span>
              </p>
            </div>
            <div className="contact-badge">
              <div className="icon">
                <Mail color="white" size={22} />
              </div>
              <p className="info">
                Trimite-ne email
                <span>contact.venncoat@gmail.com</span>
              </p>
            </div>
            <div className="contact-badge">
              <div className="icon">
                <MapPin color="white" size={22} />
              </div>
              <p className="info">
                Vizitează-ne
                <span>Suceava, România</span>
              </p>
            </div>
          </div>
          <div className="contact-form">
            <h2>Solicită gratuit o ofertă:</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
