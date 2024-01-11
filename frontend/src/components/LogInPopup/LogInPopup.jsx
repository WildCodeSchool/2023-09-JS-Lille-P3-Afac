import * as Dialog from "@radix-ui/react-dialog";
import { Link } from "react-router-dom";
import "./LogInPopup.scss";

function LogInPopup() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="navbarLink">
          S'identifier
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogOverlay" />
        <Dialog.Content className="dialogContent">
          <Dialog.Title className="dialogTitle">
            Connexion à mon espace
          </Dialog.Title>
          <Dialog.Description className="dialogDescription">
            Déjà inscrit ? Connectez-vous.
          </Dialog.Description>
          <fieldset className="fieldset">
            <label className="label" htmlFor="UserName">
              Nom d'utilisateur
            </label>
            <input className="input" id="UserName" placeholder="email" />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label" htmlFor="Password">
              Mot de passe
            </label>
            <input
              type="password"
              className="input"
              id="Password"
              placeholder="Password"
            />
          </fieldset>
          <section className="popUpClosingButtons">
            <Dialog.Close asChild>
              <p className="popUpPasswordlink">Mot de passe oublié?</p>
            </Dialog.Close>
            <Dialog.Close asChild>
              <Link to="/sign-up" className="popUpPasswordlink">
                S'inscrire
              </Link>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button type="button" className="button LogIn PopUP">
                Connexion
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                type="button"
                className="closingButton"
                aria-label="Close"
              >
                x
              </button>
            </Dialog.Close>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default LogInPopup;
