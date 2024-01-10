import "./ArtworkCard.scss";
import PropTypes from "prop-types";
import ArtworkModal from "../ArtworkModal/ArtworkModal";

function ArtworkCard({ id }) {
  return (
    <figure className="card">
      <ArtworkModal id={id} page="gallery" />
    </figure>
  );
}

ArtworkCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ArtworkCard;
