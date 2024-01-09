import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import ArtworkCard from "../Gallery/ArtworkCard";
import "./artworkModal.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function ArtworkModal({ id, page }) {
  const { artworks, artists } = useGlobalContext();
  const artwork = artworks.find((e) => e.id === id);
  const artist = artists.find((e) => e.id === artwork.artistId);
  // Modal triggers for each page
  const triggers = {
    gallery: (
      <section className="card">
        <ArtworkCard name={artwork.title} img={artwork.src} />
      </section>
    ),
    artistModal: (
      <img
        src={artwork.src}
        alt={artwork.alt}
        className="modal__artworks__list__img"
      />
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
