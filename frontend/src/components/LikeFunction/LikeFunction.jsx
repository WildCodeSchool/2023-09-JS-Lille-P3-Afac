import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import PropTypes from "prop-types";
import like from "../../assets/like.png";
import unlike from "../../assets/unlike.png";
import "./LikeFunction.scss";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function LikeFunction({ className, id }) {
  const { artworks } = useLoaderData();
  const { favorites, getFavorites, userProfil } = useGlobalContext();
  const [liked, setLiked] = useState(null);

  useEffect(() => {
    if (favorites && favorites.find((e) => e.artwork_id === id)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [favorites]);

  const handleClick = async () => {
    if (liked) {
      const favorite = favorites.find((e) => e.artwork_id === id);
      await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/api/favorite/${favorite.id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );
    } else {
      const artwork = artworks.find((e) => e.id === id);
      const data = {
        artworkId: artwork.id,
        userId: userProfil.id,
      };
      await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/favorite/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    getFavorites();
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
