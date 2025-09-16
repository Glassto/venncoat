import React from "react";
import ActionButton from "./ActionButton";

const HeroContent = () => {
  return (
    <div className="hero-content">
      <h1>
        Redefinim <span>Industria de Finisaje</span>
      </h1>
      <h2>
        Îmbinăm tehnologia, expertiza și creativitatea pentru a redefini <br />{" "}
        modul în care sunt realizate finisajele.
      </h2>
      <div className="values">
        <div className="element"></div>
        <h3>
          Ne caracterizează:
          <span>INOVAȚIA ✦ CALITATEA ✦ DURABILITATEA </span>
        </h3>
      </div>
      <div className="cta-buttons">
        <ActionButton />
        <button className="our-work">Vezi Lucrările Noastre</button>
      </div>
    </div>
  );
};

export default HeroContent;
