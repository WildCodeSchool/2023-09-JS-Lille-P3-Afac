import PropTypes from "prop-types";
import ArtistModal from "../ArtistModal/ArtistModal";

import "./ArtistCard.scss";

function ArtistCard({ id }) {
  return (
    <figure className="artistCard">
      <ArtistModal id={id} page="artist" />
    </figure>
  );
}

ArtistCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ArtistCard;
