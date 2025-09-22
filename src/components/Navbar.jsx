import { useState } from "react";
import logo from "../assets/venncoat-logo.svg";
import ActionButton from "./ActionButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <button
        className="nav-mobile-btn"
        id="nav-mobile-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <XMarkIcon className="size-7 text-white" />
        ) : (
          <Bars3Icon className="size-7 text-white" />
        )}
      </button>
    </header>
  );
};

export default Navbar;
