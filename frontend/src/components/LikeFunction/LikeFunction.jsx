import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import like from "../../assets/like.png";
import unlike from "../../assets/unlike.png";
import "./LikeFunction.scss";

function LikeFunction({ className, id }) {
  const { favorites } = useLoaderData();
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (favorites && favorites.find((e) => e.artwork_id === id)) {
      setLiked(true);
    }
  }, []);

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
