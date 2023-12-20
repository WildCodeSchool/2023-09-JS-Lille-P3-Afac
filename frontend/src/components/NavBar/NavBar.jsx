/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState } from "react";
import "./NavBar.scss";

function Nav() {
  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
      <a className="navbar__logo">Logo</a>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <a href="" className="navbar__link">
            S'inscrire
          </a>
        </li>
        <li className="navbar__item slideInDown-2">
          <a href="" className="navbar__link">
            Profil
          </a>
        </li>
        <li className="navbar__item slideInDown-3">
          <a href="" className="navbar__link">
            A Propos
          </a>
        </li>
        <li className="navbar__item slideInDown-4">
          <a href="" className="navbar__link">
            Contact
          </a>
        </li>
      </ul>
      <button className="navbar__burger" onClick={handleShowLinks}>
        <span className="burger-bar" />
      </button>
    </nav>
  );
}

export default Nav;
