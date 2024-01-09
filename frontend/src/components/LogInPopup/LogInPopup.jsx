import * as Dialog from "@radix-ui/react-dialog";
import "./LogInPopup.scss";

function LogInPopup() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="Button LogIn">
          Connexion
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
          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Dialog.Close asChild>
              <button type="button" className="Button LogIn">
                Connexion
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button type="button" className="ClosingButton" aria-label="Close">
              x
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default LogInPopup;
