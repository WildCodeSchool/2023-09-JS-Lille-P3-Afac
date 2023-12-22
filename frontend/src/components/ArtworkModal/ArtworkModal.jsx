import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import "./artworkModal.scss";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

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
  const { facts } = artworks.find((element) => element.id === id);
  const artist = artists.find((e) => e.id === artistId);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild />
      {/* { Add element to trigger the modal } */}
      <Dialog.Portal>
        <Dialog.Overlay className="dialogOverlay" />
        <Dialog.Content className="dialogContent">
          <article className="popUp">
            <nav className="popUp__nav">
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Close"
                  className="popUp__nav__button"
                />
              </Dialog.Close>
            </nav>
            <section className="popUp__content">
              <img src={src} alt={alt} className="popUp__content__img" />
              <hgroup className="popUp__content__info">
                <Dialog.Title className="popUp__content__info__title">
                  {title}
                </Dialog.Title>
                <Dialog.Description className="popUp__content__info__details">{`${date} - ${technique} - ${format}`}</Dialog.Description>
                {facts.map((element) => (
                  <Dialog.Description
                    key={element.id}
                    className="popUp__content__info__fact"
                  >
                    {element.fact}
                  </Dialog.Description>
                ))}
                <Dialog.Description className="popUp__content__info__artist">
                  {artist.name}
                </Dialog.Description>
              </hgroup>
            </section>
          </article>
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
