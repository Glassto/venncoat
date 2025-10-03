import React from "react";
import ActionButton from "./ActionButton";
import SplitText from "../gsap/SplitText";

const HeroContent = () => {
  return (
    <div className="hero-content">
      {/* <h1>
        Redefinim <span>Industria de Finisaje</span>
      </h1> */}
      <SplitText
        text={"Redefinim\nIndustria de Finisaje"}
        className="hero-title"
        delay={70}
        duration={0.4}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-200px"
        textAlign="left"
      />
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
