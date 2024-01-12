import { Link } from "react-router-dom";
import { useState } from "react";
import arrow from "../../../assets/arrow.png";
import "./SecondRoom.scss";
import Artwork from "../Artwork";
import AnimationButton from "../AnimationButton";
import { useGlobalContext } from "../../Context/GlobalContextProvider";

function SecondRoom() {
  const { ArtworksSecondRoom, secondRoomButtonInformations } =
    useGlobalContext();
  const [animation] = useState(false);

  return (
    <main className="secondRoom">
      {ArtworksSecondRoom.map((e) => (
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
      <Link to="/VirtualMuseumFirstRoom">
        <img
          src={arrow}
          alt="flèche pour passer dans la première salle du musée virtuel"
          className="moveOnTheFirstRoom"
        />
      </Link>
      {secondRoomButtonInformations.map((e) => (
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

export default SecondRoom;
