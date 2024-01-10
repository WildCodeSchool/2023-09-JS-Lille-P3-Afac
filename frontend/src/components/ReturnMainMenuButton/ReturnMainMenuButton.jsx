import { Link } from "react-router-dom";
import { useState } from "react";
import "./ReturnMainMenuButton.scss";

function ReturnMainMenuButton() {
  const [popupMessage, setPopupMessage] = useState("");
  function HandleEvent() {
    setPopupMessage(
      <article className="messagePopUp">
        Voulez-vous vraiment revenir sur l'écran d'accueil ?
        <footer className="areYouSureButton">
          <Link to="/" className="backtoMainMenu">
            Oui
          </Link>
          <button
            type="button"
            className="backtoMainMenu"
            onKeyDown={() => setPopupMessage("")}
            onClick={() => setPopupMessage("")}
          >
            Non
          </button>
        </footer>
      </article>
    );
  }
  return (
    <>
      <button
        type="button"
        className="backMainMenuButton"
        onKeyDown={HandleEvent}
        onClick={HandleEvent}
        aria-label="Fermer la page de jeu"
      >
        X
      </button>
      {popupMessage}
    </>
  );
}

export default ReturnMainMenuButton;
