import React from "react";
import logo from "../assets/venncoat-logo.svg";
import ActionButton from "./ActionButton";

const Navbar = () => {
  return (
    <header>
      <div className="nav-logo">
        <img className="logo" src={logo} alt="Venncoat Logo" />
      </div>
      <div className="nav-menu">
        <ul>
          <li>Acasă </li>
          <li>Servicii </li>
          <li>Despre </li>
          <li>Testimoniale</li>
        </ul>
      </div>
      <div className="nav-actions">
        <ActionButton />
      </div>
    </header>
  );
};

export default Navbar;
