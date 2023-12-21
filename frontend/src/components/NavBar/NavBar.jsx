import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function Nav() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarLogo">
        AFAC 974
      </Link>
      <ul className="navbar__links">
        <li className="navbar__item slideInDown-1">
          <Link to="/" className="navbarLink">
            S'inscrire
          </Link>
        </li>
        <li className="navbar__item slideInDown-3">
          <Link to="/" className="navbarLink">
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
