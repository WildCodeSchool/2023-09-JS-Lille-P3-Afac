import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import "../ArtworkModal/artworkModal.scss";
import "./artistModal.scss";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

function ArtistModal({ id }) {
  const { artworks, artists } = useGlobalContext();
  const artist = artists.find((e) => e.id === id);
  const arts = artworks.filter((e) => e.artistId === id);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button">{artist.name}</button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogOverlay" />
        <Dialog.Content className="dialogContent">
          <article className="popUp">
            <nav className="popUp__nav">
              <Dialog.Close asChild>
                <button
                  type="button"
                  aria-label="Fermer"
                  className="popUp__nav__button"
                />
              </Dialog.Close>
            </nav>
            <section className="popUp__content">
              <img src={artist.src} alt="" className="popUp__content__img" />
              <section className="popUp__content__info">
                <Dialog.Title className="popUp__content__info__title">
                  {artist.name}
                </Dialog.Title>
                <Dialog.Description className="popUp__content__info__biography">
                  {artist.biography}
                </Dialog.Description>
              </section>
            </section>
            <section className="popUp__content">
              <Dialog.Title className="popUp__content__title">
                Ses Oeuvres
              </Dialog.Title>
              <ul className="popUp__content__artworks">
                {arts.map((artwork) => (
                  <li>
                    <img
                      src={artwork.src}
                      alt={artwork.alt}
                      className="popUp__content__artworks__img"
                    />
                  </li>
                ))}
              </ul>
            </section>
          </article>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

ArtistModal.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ArtistModal;
