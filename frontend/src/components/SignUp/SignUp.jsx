/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "./FormInput";
import "./signUp.scss";

YupPassword(yup);
const passwordRequirements =
  "Le mot de passe doit contenir au moins 8 caractères dont une lettre minuscule, une majuscule, un chiffre et un caractère spécial";
const validationSchema = yup
  .object({
    firstname: yup
      .string()
      .required("Prénom requis")
      .max(50)
      .matches(
        /^([a-zA-Z]|[à-ü]|[À-Ü])+$/,
        "Ce champ ne doit contenir que des lettres"
      ),
    lastname: yup
      .string()
      .required("Nom requis")
      .max(50)
      .matches(
        /^([a-zA-Z]|[à-ü]|[À-Ü])+$/,
        "Ce champ ne doit contenir que des lettres"
      ),
    email: yup
      .string()
      .required("E-mail requis")
      .email("Format d'email invalide")
      .max(255),
    password: yup
      .string()
      .minLowercase(1, passwordRequirements)
      .minUppercase(1, passwordRequirements)
      .minNumbers(1, passwordRequirements)
      .minSymbols(1, passwordRequirements)
      .min(8, passwordRequirements)
      .required("Mot de passe requis"),
    passwordConfirm: yup
      .string()
      .required("Veuillez confirmer votre mot de passe")
      .oneOf(
        [yup.ref("password"), null],
        "Les mots de passe doivent correspondre"
      ),
  })
  .required();

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
  });
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordConfirmVisible, setPasswordConfirmVisible] = useState(false);
  const [validatedForm, setValidatedForm] = useState(false);
  const onSubmit = async () => {
    const values = getValues();
    const data = {
      lastname: values.lastname,
      firstname: values.firstname,
      email: values.email,
      src: "/src/assets/Profil.png",
      password: values.password,
    };

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/user`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );
    if (response.status === 201) {
      reset();
      setValidatedForm(true);
    }
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="registrationTitle">Inscription</h1>
        <FormInput
          register={register}
          type="text"
          name="firstname"
          placeholder="Prénom"
          errorMessage={errors.firstname ? errors.firstname.message : ""}
        />
        <FormInput
          register={register}
          type="text"
          name="lastname"
          placeholder="Nom"
          errorMessage={errors.lastname ? errors.lastname.message : ""}
        />
        <FormInput
          register={register}
          type="email"
          name="email"
          placeholder="Email"
          errorMessage={errors.email ? errors.email.message : ""}
        />
        <FormInput
          register={register}
          type="password"
          name="password"
          placeholder="Mot de passe"
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
          togglePassword="togglePassword"
          errorMessage={errors.password ? errors.password.message : ""}
        />
        <FormInput
          register={register}
          type="password"
          name="passwordConfirm"
          placeholder="Confirmer votre mot de passe"
          passwordVisible={passwordConfirmVisible}
          setPasswordVisible={setPasswordConfirmVisible}
          togglePassword="togglePasswordConfirm"
          errorMessage={
            errors.passwordConfirm ? errors.passwordConfirm.message : ""
          }
        />
        <label htmlFor="submit" className="form__label--hidden">
          M'inscrire
        </label>
        <input
          name="submit"
          id="submit"
          type="submit"
          value="M'INSCRIRE"
          className="form__submit"
        />
        {validatedForm && (
          <p className="form__message form__message--success">
            Votre compte à été créé avec succès!
          </p>
        )}
      </form>
    </main>
  );
}

export default SignUp;
