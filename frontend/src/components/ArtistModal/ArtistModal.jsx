import PropTypes from "prop-types";
import * as Dialog from "@radix-ui/react-dialog";
import ArtistCard from "../Artists/Artistcard";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "../ArtworkModal/artworkModal.scss";
import "./artistModal.scss";

function ArtistModal({ id, page }) {
  // Import artworks and artists array from the context
  const { artworks, artists } = useGlobalContext();
  // Using the id to find the corresponding artist
  const artist = artists.find((e) => e.id === id);
  // Using the id to find all the corresponding artworks
  const arts = artworks.filter((e) => e.artistId === id);
  // Modal triggers for each page
  const triggers = {
    artist: (
      <button type="button" aria-label={artist.name} className="artistCard">
        <ArtistCard name={artist.name} img={artist.src} />
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
        <Dialog.Content className="modal modal--artist">
          {/* Close contains the element that will close the modal on click */}
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
              {/* The content inside Title will be announced when the modal opens */}
              <Dialog.Title className="modal__content__title">
                <cite>{artist.name}</cite>
              </Dialog.Title>
              {/* Description is an optional element that announces its content when the modal opens */}
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
