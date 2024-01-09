import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import ArtistCard from "../Artists/Artistcard";
import "../ArtworkModal/artworkModal.scss";
import "./artistModal.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import ArtworkModal from "../ArtworkModal/ArtworkModal";

function ArtistModal({ id, page }) {
  const { artworks, artists } = useGlobalContext();
  const artist = artists.find((e) => e.id === id);
  const arts = artworks.filter((e) => e.artistId === id);
  // Modal triggers for each page
  const triggers = {
    artist: (
      <section className="artistCard">
        <ArtistCard name={artist.name} img={artist.src} />
      </section>
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
            <img src={artist.src} alt="" className="modal__content__img" />
            <figcaption>
              <Dialog.Title className="modal__content__title">
                <cite>{artist.name}</cite>
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
