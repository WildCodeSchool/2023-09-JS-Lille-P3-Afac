import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import logoImg from "../../assets/VirtuArt.png";

function NavBar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbarLogo">
        <img src={logoImg} alt="logoVirtuArt" className="logo" />
      </Link>
      <ul className="navbarLink">
        <li>
          <Link to="/" className="navbarLink">
            S'inscrire
          </Link>
        </li>
        <li>
          <Link to="/About" className="navbarLink">
            A Propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
