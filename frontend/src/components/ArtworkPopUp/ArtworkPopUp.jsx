import PropTypes from "prop-types";
import "./artworkPopUp.scss";
import { useGlobalContext } from "../contexts/GlobalContextProvider";

function ArtworkPopUp({ id, title, date, technique, format, src, artist }) {
  const { artwork, setPopUpDisplay } = useGlobalContext();
  const { facts } = artwork.find((element) => element.id === id);

  const handleClick = () => {
    setPopUpDisplay(false);
  };
  return (
    <article className="popUp">
      <nav className="popUp__nav">
        <label className="popUp__nav__label" htmlFor="close_button">
          Fermer
        </label>
        <input
          className="popUp__nav__button"
          type="button"
          id="close_button"
          name="close_button"
          onClick={handleClick}
        />
      </nav>
      <section className="popUp__content">
        <img src={src} alt="" className="popUp__content__img" />
        <hgroup className="popUp__content__info">
          <header>
            <h1 className="popUp__content__info__title">{title}</h1>
            <p className="popUp__content__info__details">{`${date} - ${technique} - ${format}`}</p>
          </header>
          {facts.map((element) => (
            <p key={element.id} className="popUp__content__info__fact">
              {element.fact}
            </p>
          ))}
          <h3 className="popUp__content__info__artist">{artist}</h3>
        </hgroup>
      </section>
    </article>
  );
}

ArtworkPopUp.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  technique: PropTypes.string.isRequired,
  format: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
};

export default ArtworkPopUp;
