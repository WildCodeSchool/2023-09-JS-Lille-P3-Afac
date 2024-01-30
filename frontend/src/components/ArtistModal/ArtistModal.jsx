import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import "../ArtworkModal/artworkModal.scss";
import "./artistModal.scss";

function ArtistModal({ id, page }) {
  const { artworks, artists } = useLoaderData();
  const artist = artists.find((e) => e.id === id);
  const arts = artworks.filter((e) => e.user_id_ar === id);
  const triggers = {
    artist: (
      <button type="button" aria-label={artist.lastname} className="trigger">
        <img
          src={`${import.meta.env.VITE_BACKEND_URL}/${artist.src}`}
          alt={`portrait de ${artist.firstname} ${artist.lastname}`}
          className="artistPic"
        />
        <span className="artistName">
          {artist.firstname} {artist.lastname}
        </span>
      </button>
    ),
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggers[page]}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modalOverlay" />
        <Dialog.Content className="modal modal--artist">
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Fermer"
              className="modal__button"
            />
          </Dialog.Close>
          <figure className="modal__content">
            <img
              src={`${import.meta.env.VITE_BACKEND_URL}/${artist.src}`}
              alt=""
              className="modal__content__img"
            />
            <figcaption>
              <Dialog.Title className="modal__content__title">
                <cite>
                  {artist.firstname} {artist.lastname}
                </cite>
              </Dialog.Title>
              <Dialog.Description className="modal__content__biography">
                {artist.biography}
              </Dialog.Description>
            </figcaption>
          </figure>
          <section className="modal__artworks">
            <h3 className="modal__artworks__title">Ses Oeuvres</h3>
            <ul className="modal__artworks__list">
              {arts.map((e) => (
                <li key={e.id}>
                  <ArtworkModal id={e.id} page="artistModal" />
                </li>
              ))}
            </ul>
          </section>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

ArtistModal.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
};

export default ArtistModal;
