import * as Dialog from "@radix-ui/react-dialog";
import { Link, useNavigate } from "react-router-dom";
import "./LogInPopup.scss";
import { useState } from "react";

function LogInPopup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConnection = async () => {
    const data = { email, password };
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/login`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.status === 200) {
      navigate("/");
    }
  };

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
              e-mail
            </label>
            <input
              value={email}
              onChange={handleEmailChange}
              type="email"
              className="input"
              id="UserName"
              placeholder="Entrez votre email"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label" htmlFor="Password">
              Mot de passe
            </label>
            <input
              value={password}
              onChange={handlePasswordChange}
              type="password"
              className="input"
              id="Password"
              placeholder="Entrez votre mot de passe"
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
              <button
                type="button"
                className="button LogIn PopUP"
                onClick={handleConnection}
              >
                Connexion
              </button>
            </Dialog.Close>
            <Dialog.Close asChild>
              <button
                type="button"
                className="closingButton"
                aria-label="fermer"
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
