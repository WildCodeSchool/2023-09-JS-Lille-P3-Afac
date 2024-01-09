import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import "./artworkModal.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function ArtworkModal({
  id,
  title,
  date,
  technique,
  format,
  src,
  alt,
  artistId,
}) {
  const { artworks, artists } = useGlobalContext();
  const { facts } = artworks.find((e) => e.id === id);
  const artist = artists.find((e) => e.id === artistId);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button">{title}</button>
      </Dialog.Trigger>
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
          <img src={src} alt={alt} className="modal__content__img" />
          <figure className="modal__content__info">
            <figcaption>
              <Dialog.Title className="modal__content__info__title">
                {title}
              </Dialog.Title>
              <Dialog.Description className="modal__content__info__details">{`${date} - ${technique} - ${format}`}</Dialog.Description>
            </figcaption>
            {facts.map((e) => (
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
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  technique: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  artistId: PropTypes.number.isRequired,
};

export default ArtworkModal;
