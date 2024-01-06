/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";

function FormInput({
  register,
  type,
  name,
  placeholder,
  passwordVisible,
  setPasswordVisible,
  togglePassword,
}) {
  const getType = () => {
    if (type === "password") {
      return passwordVisible ? "text" : "password";
    }
    return type;
  };

  return (
    <fieldset className="form__group">
      <label htmlFor={name} className="form__label">
        {placeholder}
      </label>
      <input
        type={getType()}
        name={name}
        id={name}
        placeholder={placeholder}
        className="form__input"
        {...register(name)}
      />
      {type === "password" && (
        <button
          type="button"
          name={togglePassword}
          id={togglePassword}
          className={
            passwordVisible
              ? "form__password form__password--show"
              : "form__password"
          }
          onClick={() => setPasswordVisible(!passwordVisible)}
        >
          <label htmlFor={togglePassword} className="form__password__label">
            Afficher/Cacher le Mot de Passe
          </label>
        </button>
      )}
    </fieldset>
  );
}

FormInput.propTypes = {
  register: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  passwordVisible: PropTypes.bool,
  setPasswordVisible: PropTypes.func,
  togglePassword: PropTypes.string,
};

FormInput.defaultProps = {
  passwordVisible: null,
  setPasswordVisible: null,
  togglePassword: null,
};

export default FormInput;
