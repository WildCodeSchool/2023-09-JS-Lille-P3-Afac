import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import ArtworkCard from "../Gallery/ArtworkCard";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./artworkModal.scss";

function ArtworkModal({ id, page }) {
  // Import artworks and artists array from the context
  const { artworks, artists } = useGlobalContext();
  // Using the id to find the corresponding artwork
  const artwork = artworks.find((e) => e.id === id);
  // Using the id to find the corresponding artist
  const artist = artists.find((e) => e.id === artwork.artistId);
  // Modal triggers for each page
  const triggers = {
    // Trigger when inside the Gallery page
    gallery: (
      <section className="card">
        <ArtworkCard name={artwork.title} img={artwork.src} />
      </section>
    ),
    // Trigger when inside the artist modal
    artistModal: (
      <button
        type="button"
        aria-label={artwork.title}
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
    // Using Radix UI Dialog, Documentation : https://www.radix-ui.com/primitives/docs/components/dialog

    <Dialog.Root>
      {/* Trigger contains the element that will open the modal on click */}
      <Dialog.Trigger asChild>{triggers[page]}</Dialog.Trigger>
      <Dialog.Portal>
        {/* Overlay traps the keyboard focus inside the modal */}
        <Dialog.Overlay className="modalOverlay" />
        {/* Content contains everything we want to display inside the modal */}
        <Dialog.Content className="modal modal--artwork">
          {/* Close contains the element that will close the modal on click */}
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
              {/* The content inside Title will be announced when the modal opens */}
              <Dialog.Title className="modal__content__info__title">
                {artwork.title}
              </Dialog.Title>
              {/* Description is an optional element that announces its content when the modal opens */}
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
