import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import like from "../../assets/like.png";
import unlike from "../../assets/unlike.png";
import "./LikeFunction.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function LikeFunction({ className, id }) {
  const { favorites } = useGlobalContext();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (favorites && favorites.find((e) => e.artwork_id === id)) {
      setLiked(true);
    }
  }, [favorites]);

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
  id: PropTypes.number.isRequired,
};

export default LikeFunction;
