import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import YupPassword from "yup-password";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from "../SignUp/FormInput";
import "./PostArtwork.scss";

YupPassword(yup);
const validationSchema = yup
  .object({
    artworkName: yup.string().required("Nom de l'oeuvre requis").max(100),
    description: yup
      .string()
      .required("Description de l'oeuvre requise")
      .max(250),
    format: yup.string().required("Format requis").max(255),
    date: yup.string().required("Date requise").max(80),
  })
  .required();

function PostArtwork() {
  const [imageUrl, setImageUrl] = useState(null);

  function onImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
    }
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      artworkName: "",
      description: "",
      format: "",
      date: "",
    },
  });
  const [validatedForm, setValidatedForm] = useState(false);
  const onSubmit = () => {
    setValidatedForm(true);
    reset();
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <h1 className="postTitle">Poster mon oeuvre</h1>
        <label htmlFor="photo">Je sélectionne mon oeuvre :</label>
        <input
          type="file"
          id="photo"
          name="photo"
          accept=".jpeg,.png"
          onChange={onImageChange}
          className="addImage"
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Selected artwork"
            className="selectedArtwork"
          />
        )}
        <FormInput
          register={register}
          type="text"
          name="artworkName"
          placeholder="Nom de l'oeuvre"
          errorMessage={errors.artworkName ? errors.artworkName.message : ""}
        />
        <FormInput
          register={register}
          type="text"
          name="description"
          placeholder="Description de l'oeuvre"
          errorMessage={errors.description ? errors.description.message : ""}
        />
        <FormInput
          register={register}
          type="text"
          name="format"
          placeholder="Format"
          errorMessage={errors.format ? errors.format.message : ""}
        />
        <FormInput
          register={register}
          type="date"
          name="date"
          placeholder="Date de l'oeuvre"
          errorMessage={errors.date ? errors.date.message : ""}
        />
        <FormInput
          register={register}
          type="text"
          name="anecdote"
          placeholder="Anecdote(s)"
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
          value="Je poste mon oeuvre"
          className="form__submit"
        />
        {validatedForm && (
          <p className="form__message form__message--success">
            Merci ! Votre post est en cours d'analyse par nos équipes
          </p>
        )}
      </form>
    </main>
  );
}

export default PostArtwork;
