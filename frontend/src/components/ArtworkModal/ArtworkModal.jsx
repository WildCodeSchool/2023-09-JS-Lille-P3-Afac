import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./artworkModal.scss";

function ArtworkModal({ id, page }) {
  const { artworks, artists } = useGlobalContext();
  const artwork = artworks.find((e) => e.id === id);
  const artist = artists.find((e) => e.id === artwork.artistId);
  const triggers = {
    gallery: (
      <button type="button" aria-label={artwork.alt} className="trigger">
        <img
          src={artwork.src}
          alt={`portrait de ${artwork.alt}`}
          className="artworkPic"
        />
        <span className="artworkTitle">{artwork.title}</span>
      </button>
    ),
    artistModal: (
      <button
        type="button"
        aria-label={artwork.alt}
        className="modal__artworks__list__button"
      >
        <img
          src={artwork.src}
          alt={artwork.alt}
          className="modal__artworks__list__button__img"
        />
      </button>
    ),
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{triggers[page]}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="modalOverlay" />
        <Dialog.Content className="modal modal--artwork">
          <Dialog.Close asChild>
            <button
              type="button"
              aria-label="Fermer"
              className="modal__button"
            />
          </Dialog.Close>
          <img
            src={artwork.src}
            alt={artwork.alt}
            className="modal__content__img"
          />
          <figure className="modal__content__info">
            <figcaption>
              <Dialog.Title className="modal__content__info__title">
                {artwork.title}
              </Dialog.Title>
              <Dialog.Description className="modal__content__info__details">{`${artwork.date} - ${artwork.technique} - ${artwork.format}`}</Dialog.Description>
            </figcaption>
            {artwork.facts.map((e) => (
              <p key={e.id} className="modal__content__info__fact">
                {e.fact}
              </p>
            ))}
            <cite className="modal__content__info__artist">{artist.name}</cite>
          </figure>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

ArtworkModal.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
};

export default ArtworkModal;
