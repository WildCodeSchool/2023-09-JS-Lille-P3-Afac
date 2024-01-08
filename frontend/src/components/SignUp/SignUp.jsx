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
  "Le mot de passe doit contenir au moins 8 caractères dont une lettre minuscule, une majuscule, un chiffre et 1 caractère spécial";
const validationSchema = yup
  .object({
    firstname: yup
      .string()
      .required("Prenom requis")
      .max(50)
      .matches(/^[a-zA-Z]+$/, "Ce champ ne doit contenir que des lettres"),
    lastname: yup
      .string()
      .required("Nom requis")
      .max(50)
      .matches(/^[a-zA-Z]+$/, "Ce champ ne doit contenir que des lettres"),
    email: yup
      .string()
      .required("E-mail requis")
      .email("Format d'e-mail invalide")
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
  const onSubmit = () => {
    setValidatedForm(true);
    reset();
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="title">Inscription</h1>
        <FormInput
          register={register}
          type="text"
          name="firstname"
          placeholder="Prenom"
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
          placeholder="E-mail"
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
          placeholder="Confirmer mot de passe"
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
