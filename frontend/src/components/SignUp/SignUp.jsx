/* eslint-disable react/jsx-props-no-spreading */
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "./FormInput";
import "./signUp.scss";

YupPassword(yup);
const passRequirements =
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
      .minLowercase(1, passRequirements)
      .minUppercase(1, passRequirements)
      .minNumbers(1, passRequirements)
      .minSymbols(1, passRequirements)
      .min(8, passRequirements)
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
        />
        <span className="form__error">
          {errors.firstname ? errors.firstname.message : ""}
        </span>
        <FormInput
          register={register}
          type="text"
          name="lastname"
          placeholder="Nom"
        />
        <span className="form__error">
          {errors.lastname ? errors.lastname.message : ""}
        </span>
        <FormInput
          register={register}
          type="email"
          name="email"
          placeholder="E-mail"
        />
        <span className="form__error">
          {errors.email ? errors.email.message : ""}
        </span>
        <FormInput
          register={register}
          type="password"
          name="password"
          placeholder="Mot de passe"
          passwordVisible={passwordVisible}
          setPasswordVisible={setPasswordVisible}
          togglePassword="togglePassword"
        />
        <span className="form__error">
          {errors.password ? errors.password.message : ""}
        </span>
        <FormInput
          register={register}
          type="password"
          name="passwordConfirm"
          placeholder="Confirmer mot de passe"
          passwordVisible={passwordConfirmVisible}
          setPasswordVisible={setPasswordConfirmVisible}
          togglePassword="togglePasswordConfirm"
        />
        <span className="form__error">
          {errors.passwordConfirm ? errors.passwordConfirm.message : ""}
        </span>
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
          <span className="form__success">
            Votre compte à été créé avec succès!
          </span>
        )}
      </form>
    </main>
  );
}

export default SignUp;
