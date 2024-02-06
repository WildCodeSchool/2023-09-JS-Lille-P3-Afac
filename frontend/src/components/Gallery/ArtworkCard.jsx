import "./ArtworkCard.scss";
import PropTypes from "prop-types";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import LikeFunction from "../LikeFunction/LikeFunction";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function ArtworkCard({ id }) {
  const { userProfil } = useGlobalContext();
  return (
    <figure className="card">
      {userProfil && <LikeFunction className="buttonLike" id={id} />}
      <ArtworkModal id={id} page="gallery" />
    </figure>
  );
}

ArtworkCard.propTypes = {
  id: PropTypes.number.isRequired,
};

export default ArtworkCard;
