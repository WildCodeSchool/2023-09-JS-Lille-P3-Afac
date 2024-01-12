import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import arrow from "../../../assets/arrow.png";
import "./FirstRoom.scss";
import Artwork from "../Artwork";
import AnimationButton from "../AnimationButton";
import { useGlobalContext } from "../../Context/GlobalContextProvider";

function FirstRoom() {
  const { ArtworksFirstRoom, firstRoomButtonInformations } = useGlobalContext();
  const [animation, setAnimate] = useState(false);

  const navigate = useNavigate();
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

  return (
    <main className="firstRoom">
      {ArtworksFirstRoom.map((e) => (
        <Artwork
          key={e.id}
          img={e.img}
          classNameArtwork={e.classNameArtwork}
          classNameThumbnail={e.classNameThumbnail}
          painter={e.painter}
          date={e.date}
          information={e.information}
          title={e.title}
          description={e.description}
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
