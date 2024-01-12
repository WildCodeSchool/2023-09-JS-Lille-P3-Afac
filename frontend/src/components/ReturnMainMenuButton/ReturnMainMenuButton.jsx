import { useNavigate } from "react-router-dom";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import "./ReturnMainMenuButton.scss";

function ReturnMainMenuButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <button
          aria-label="Bouton pour revenir au menu principal"
          type="button"
          className="openModal"
        >
          X
        </button>
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="AlertDialogOverlay" />
        <AlertDialog.Content className="AlertDialogContent">
          <AlertDialog.Title
            className="AlertDialogTitle"
            aria-label="Bouton pour retourner au menu principal"
          >
            Voulez-vous vraiment revenir au menu principal ?
          </AlertDialog.Title>
          <article className="mainMenuContainer">
            <AlertDialog.Cancel asChild>
              <button
                type="button"
                className="areYouSureButton"
                aria-label="Je ne souhaite pas retourner au menu principal"
              >
                Non
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                type="button"
                className="areYouSureButton"
                onClick={handleClick}
                aria-label="Je retourne sur le menu principal"
              >
                Oui
              </button>
            </AlertDialog.Action>
          </article>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
}

export default ReturnMainMenuButton;
