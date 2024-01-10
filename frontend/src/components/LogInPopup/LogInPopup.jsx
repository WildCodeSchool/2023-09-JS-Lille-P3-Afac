import * as Dialog from "@radix-ui/react-dialog";
import "./LogInPopup.scss";

function LogInPopup() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="Button LogIn">
          S'identifier
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Connexion</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Veuillez vous connecter afin d'accéder à toutes les fonctionnalités
            du site.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="UserName">
              Nom d'utilisateur
            </label>
            <input className="Input" id="UserName" placeholder="email" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="Password">
              Mot de passe
            </label>
            <input
              type="password"
              className="Input"
              id="Password"
              placeholder="Password"
            />
          </fieldset>
          <section className="PopUpClosingButtons">
            <linkTo className="ForgottenPassword">Mot de passe oublié?</linkTo>
            <Dialog.Close asChild>
              <button type="button" className="Button LogIn PopUP">
                Connexion
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                type="button"
                className="ClosingButton"
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
