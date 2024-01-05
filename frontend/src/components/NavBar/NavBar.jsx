import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarLogo">
        AFAC 974
      </Link>
      <ul className="navbarLinks">
        <li className="navbarItem">
          <Link to="/" className="navbarLink">
            S'inscrire
          </Link>
        </li>
        <li className="navbarItem">
          <Link to="/About" className="navbarLink">
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
