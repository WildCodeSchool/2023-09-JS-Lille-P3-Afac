import { useState } from "react";
import PropTypes from "prop-types";
import like from "../../assets/like.png";
import unlike from "../../assets/unlike.png";
import "./LikeFunction.scss";

function LikeFunction({ className }) {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  };

  return (
    <button
      type="button"
      className={className}
      aria-label="ajouter dans mes favoris"
      onClick={handleClick}
    >
      <img
        className="likePic"
        src={liked ? like : unlike}
        alt="liker l'oeuvre"
      />
    </button>
  );
}

LikeFunction.propTypes = {
  className: PropTypes.string.isRequired,
};

export default LikeFunction;
