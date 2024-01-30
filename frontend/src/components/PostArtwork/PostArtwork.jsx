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
    title: yup.string().required("Nom de l'oeuvre requis").max(100),
    alt: yup.string().required("Description de l'oeuvre requise").max(250),
    format: yup.string().required("Format requis").max(255),
    artwork_year: yup.string().required("Date requise").max(80),
  })
  .required();

function PostArtwork() {
  const [imageUrl, setImageUrl] = useState(null);
  const [image, setImage] = useState(null);

  function onImageChange(e) {
    const file = e.target.files[0];

    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setImageUrl(objectUrl);
      setImage(file);
    }
  }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (image) {
  //     console.info(image);
  //     const formData = new FormData();
  //     const imageFetch = image;
  //     formData.append("image", imageFetch);
  //     await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/upload`, {
  //       method: "POST",
  //       body: formData,
  //     });
  //   }
  // };
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
    getValues,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      title: "",
      alt: "",
      format: "",
      artwork_year: "",
    },
  });
  const [validatedForm, setValidatedForm] = useState(false);
  const onSubmit = async (e) => {
    e.preventDefault();

    if (image) {
      const values = getValues();
      const formImage = new FormData();
      formImage.append("photo", image);
      setValidatedForm(true);
      setImageUrl(null);
      reset();

      values.alt = "halte là";
      values.user_id_ar = 3;
      values.technique = "dessin";
      formImage.append("title", values.title);
      formImage.append("technique", values.technique);
      formImage.append("artwork_year", values.artwork_year);
      formImage.append("format", values.format);
      formImage.append("alt", values.alt);
      formImage.append("user_id_ar", values.user_id_ar);

      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/artwork`, {
        method: "POST",
        body: formImage,
        cache: "default",
      });
    }
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
          name="title"
          placeholder="Nom de l'oeuvre"
          errorMessage={errors.title ? errors.title.message : ""}
        />
        <FormInput
          register={register}
          type="text"
          name="alt"
          placeholder="Description de l'oeuvre"
          errorMessage={errors.alt ? errors.alt.message : ""}
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
          type="text"
          name="artwork_year"
          placeholder="Année de l'oeuvre"
          errorMessage={errors.artwork_year ? errors.artwork_year.message : ""}
        />
        <FormInput
          register={register}
          type="text"
          name="anecdote"
          placeholder="Anecdote(s)"
          errorMessage={
            errors.passwordConfirm ? errors.passwordConfirm.message : ""
          }
        />{" "}
        <button
          type="submit"
          className="form__submit"
          aria-label="Je poste mon oeuvre"
          onSubmit={onSubmit}
        >
          Je poste mon oeuvre
        </button>
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
