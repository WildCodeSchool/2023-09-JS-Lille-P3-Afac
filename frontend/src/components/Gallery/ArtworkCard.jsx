import "./ArtworkCard.scss";
import PropTypes from "prop-types";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import LikeFunction from "../LikeFunction/LikeFunction";

function ArtworkCard({ id }) {
  return (
    <figure className="card">
      <LikeFunction className="buttonLike" id={id} />
      <ArtworkModal id={id} page="gallery" />
    </figure>
  );
}

ArtworkCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ArtworkCard;
