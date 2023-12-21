import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import "../ArtworkModal/artworkModal.scss";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

function ArtistModal({ id }) {
  const { artworks, artists } = useGlobalContext();
  const artist = artists.find((e) => e.id === id);
  const arts = artworks.filter((e) => e.artistId === id);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button type="button" className="Button violet">
          {artist.name}
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogOverlay" />
        <Dialog.Content className="dialogContent">
          <article className="popUp">
            <nav className="popUp__nav">
              <label className="popUp__nav__label" htmlFor="close_button">
                Fermer
              </label>
              <Dialog.Close asChild>
                <input
                  className="popUp__nav__button"
                  type="button"
                  id="close_button"
                  name="close_button"
                />
              </Dialog.Close>
            </nav>
            <section className="popUp__content">
              <img src={artist.src} alt="" className="popUp__content__img" />
              <hgroup className="popUp__content__info">
                <header>
                  <Dialog.Title className="popUp__content__info__title">
                    {artist.name}
                  </Dialog.Title>
                  <Dialog.Description className="popUp__content__info__details">
                    {artist.biography}
                  </Dialog.Description>
                </header>
              </hgroup>
            </section>
            <section>
              <h3 className="popUp__content__info__artist">Ses Oeuvres</h3>
              <ul>
                {arts.map((artwork) => (
                  <li>
                    <img src={artwork.src} alt="" />
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
