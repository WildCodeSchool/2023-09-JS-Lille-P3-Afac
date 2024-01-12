import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./NavBar.scss";
import logoImg from "../../assets/LogoVA.png";
import LogInPopup from "../LogInPopup/LogInPopup";

function NavBar({ transparent }) {
  return (
    <nav className={`navbar ${transparent}`}>
      <Link to="/" className="navbarLogo">
        <img src={logoImg} alt="logoVirtuArt" className="logo" />
      </Link>
      <ul className="navbarLink">
        <li>
          <LogInPopup />
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
NavBar.propTypes = {
  transparent: PropTypes.string.isRequired,
};

export default NavBar;
