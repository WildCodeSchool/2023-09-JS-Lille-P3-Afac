import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <Link href="icon" className="navbar__logo">
        AFAC 974
      </Link>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link href="s'inscrire" className="navbar__link">
            S'inscrire
          </Link>
        </li>
        <li className="navbar__item slideInDown-2">
          <Link href="profil" className="navbar__link">
            Profil
          </Link>
        </li>
        <li className="navbar__item slideInDown-3">
          <Link href="a propos" className="navbar__link">
            A Propos
          </Link>
        </li>
        <li className="navbar__item slideInDown-4">
          <Link href="contact" className="navbar__link">
            Contact
          </Link>
        </li>
      </ul>
      <button
        type="button"
        aria-label="menu-burger"
        className="navbar__burger"
        onClick={handleShowLinks}
      >
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Nav;
