import { useState } from "react";
import "./signUp.scss";

function SignUp() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);

  return (
    <main className="container">
      <form action="" className="form">
        <h1 className="title">Inscription</h1>
        <fieldset className="form__group">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Prenom"
            className="form__input"
            required
          />
          <label htmlFor="name" className="form__label">
            Prenom
          </label>
        </fieldset>
        <fieldset className="form__group">
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Nom"
            className="form__input"
            required
          />
          <label htmlFor="lastname" className="form__label">
            Nom
          </label>
        </fieldset>
        <fieldset className="form__group">
          <input
            type="email"
            name="e-mail"
            id="e-mail"
            placeholder="E-mail"
            className="form__input"
            required
          />
          <label htmlFor="e-mail" className="form__label">
            E-mail
          </label>
        </fieldset>
        <fieldset className="form__group">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            id="password"
            placeholder="Mot de passe"
            className="form__input"
            required
          />
          <label htmlFor="password" className="form__label">
            Mot de passe
          </label>
          <button
            type="button"
            name="togglePassword"
            id="togglePassword"
            className={
              passwordVisible
                ? "form__password form__password--show"
                : "form__password"
            }
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            <label htmlFor="togglePassword" className="form__password__label">
              Afficher/Cacher le Mot de Passe
            </label>
          </button>
        </fieldset>
        <fieldset className="form__group">
          <input
            type={passwordConfirmVisible ? "text" : "password"}
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirmer mot de passe"
            className="form__input"
            required
          />
          <label htmlFor="passwordConfirm" className="form__label">
            Confirmer mot de passe
          </label>
          <button
            type="button"
            name="togglePasswordConfirm"
            id="togglePasswordConfirm"
            className={
              passwordConfirmVisible
                ? "form__password form__password--show"
                : "form__password"
            }
            onClick={() => setPasswordConfirmVisible(!passwordConfirmVisible)}
          >
            <label
              htmlFor="togglePasswordConfirm"
              className="form__password__label"
            >
              Afficher/Cacher le Mot de Passe
            </label>
          </button>
        </fieldset>
        <input type="submit" value="M'INSCRIRE" className="form__submit" />
      </form>
    </main>
  );
}

export default SignUp;
