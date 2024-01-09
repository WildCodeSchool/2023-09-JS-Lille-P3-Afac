import "./ArtworkCard.scss";
import PropTypes from "prop-types";

function ArtworkCard({ name, img }) {
  return (
    <>
      <img src={img} alt={name} className="artwork" />
      <h2>{name}</h2>
    </>
  );
}

ArtworkCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default ArtworkCard;
