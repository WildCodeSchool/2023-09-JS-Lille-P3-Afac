import * as Dialog from "@radix-ui/react-dialog";
import { Link, useNavigate } from "react-router-dom";
import "./LogInPopup.scss";
import { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function LogInPopup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setUserProfil } = useGlobalContext();

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
      const infos = await response.json();
      setUserProfil({
        id: infos.id,
        lastname: infos.lastname,
        firstname: infos.firstname,
        email: infos.email,
        src: infos.src,
      });
      navigate("/Profil");
    } else {
      setError(true);
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
              Email
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
              onKeyDown={(e) => e.key === "Enter" && handleConnection()}
            />
          </fieldset>
          {error && (
            <p className="infosError">Email ou mot de passe invalide</p>
          )}
          <section className="popUpClosingButtons">
            <Dialog.Close asChild>
              <Link to="/sign-up" className="button LogIn">
                S'inscrire
              </Link>
            </Dialog.Close>
            <button
              type="button"
              className="button LogIn"
              onClick={handleConnection}
            >
              Connexion
            </button>
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
