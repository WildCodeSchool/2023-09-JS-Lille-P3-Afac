import PropTypes from "prop-types";
import { useLoaderData } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import "./artworkModal.scss";
import LikeFunction from "../LikeFunction/LikeFunction";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function ArtworkModal({ id, page, className }) {
  const { artworks, artists } = useLoaderData();
  const { userProfil } = useGlobalContext();
  const artwork = artworks.find((e) => e.id === id);
  const artist = artists.find((e) => e.id === artwork.user_id_ar);
  const triggers = {
    gallery: (
      <button type="button" aria-label={artwork.alt} className="trigger">
        <img
          src={artwork.source}
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
          src={artwork.source}
          alt={artwork.alt}
          className="modal__artworks__list__button__img"
        />
      </button>
    ),
    museumArtwork: <img src={artwork.source} alt="" className={className} />,
  };

  return (
    artworks && (
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
              src={artwork.source}
              alt={artwork.alt}
              className="modal__content__img"
            />
            <figure className="modal__content__info">
              <figcaption className="modalLikeButton">
                {userProfil && (
                  <Dialog.Close asChild>
                    <LikeFunction className="artworkCardLikeButton" id={id} />
                  </Dialog.Close>
                )}
                <Dialog.Title className="modal__content__info__title">
                  {artwork.title}
                </Dialog.Title>
                <Dialog.Description className="modal__content__info__details">{`${artwork.artwork_year} - ${artwork.technique} - ${artwork.format}`}</Dialog.Description>
              </figcaption>
              <cite className="modal__content__info__artist">
                {`${artist.firstname} ${artist.lastname}`}
              </cite>
            </figure>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  );
}

ArtworkModal.propTypes = {
  id: PropTypes.number.isRequired,
  page: PropTypes.string.isRequired,
  className: PropTypes.string,
};

ArtworkModal.defaultProps = {
  className: "",
};
export default ArtworkModal;
