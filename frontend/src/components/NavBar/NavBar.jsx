import React from "react";
import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.scss";
import logoImg from "../../assets/LogoVA.png";
import LogInPopup from "../LogInPopup/LogInPopup";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function NavBar({ transparent }) {
  const { userProfil, setUserProfil } = useGlobalContext();
  const navigate = useNavigate();
  const handleClick = () => {
    setUserProfil(null);
    navigate("/");
  };
  return (
    <nav className={`navbar ${transparent}`}>
      <Link to="/" className="navbarLogo">
        <img src={logoImg} alt="logoVirtuArt" className="logo" />
      </Link>
      <ul className="navbarLink">
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          {userProfil ? (
            <Link to="/Profil">{userProfil.firstname}</Link>
          ) : (
            <LogInPopup />
          )}
        </li>
        {userProfil && (
          <li>
            <button
              type="button"
              className="signOutButton"
              onClick={handleClick}
              aria-label="Se déconnecter"
            />
          </li>
        )}
      </ul>
    </nav>
  );
}
NavBar.propTypes = {
  transparent: PropTypes.string,
};
NavBar.defaultProps = {
  transparent: "",
};
export default NavBar;
