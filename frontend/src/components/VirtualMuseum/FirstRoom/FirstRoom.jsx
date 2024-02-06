import { useNavigate, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "../../../assets/arrow.png";
import "./FirstRoom.scss";
import Artwork from "../Artwork";
import AnimationButton from "../AnimationButton";
import { useGlobalContext } from "../../Context/GlobalContextProvider";

function FirstRoom() {
  const {
    firstRoomButtonInformations,
    firstRoomClasses,
    firstRoomThumnailClasses,
  } = useGlobalContext();
  const { artworks } = useLoaderData();
  const navigate = useNavigate();
  const [animation, setAnimate] = useState(false);
  const handleClick = () => {
    setAnimate(true);
  };
  useEffect(() => {
    if (animation) {
      setTimeout(() => {
        navigate("/VirtualMuseumSecondRoom");
      }, 4000);
    }
  }, [animation]);

  const artworksFirstRoom = artworks.slice(0, 6);
  artworksFirstRoom.forEach((e, index) => {
    e.classNameArtwork = firstRoomClasses[index];
    e.classNameThumbnail = firstRoomThumnailClasses[index];
  });

  return (
    <main className="firstRoom">
      {artworksFirstRoom.map((e) => (
        <Artwork
          key={e.id}
          classNameArtwork={e.classNameArtwork}
          classNameThumbnail={e.classNameThumbnail}
          painter={e.user_id_ar}
          date={e.artwork_year}
          technique={e.technique}
          format={e.format}
          title={e.title}
          alt={e.description}
          id={e.id}
        />
      ))}
      <button
        type="button"
        aria-label="bouton pour aller dans la deuxième salle du musée virtuel"
        className={`moveOnTheSecondRoom  ${animation ? "animate" : ""}`}
        onClick={handleClick}
      >
        <img
          src={arrow}
          alt="Flèche pour aller dans la deuxième salle du musée"
          className="arrow"
        />
      </button>
      {firstRoomButtonInformations.map((e) => (
        <AnimationButton
          key={e.id}
          url={e.url}
          className={e.className}
          animationClassName={e.animationClassName}
          animation={animation}
        />
      ))}
    </main>
  );
}

export default FirstRoom;
