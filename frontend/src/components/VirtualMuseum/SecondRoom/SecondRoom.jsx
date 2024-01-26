import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import "./SecondRoom.scss";
import Artwork from "../Artwork";
import AnimationButton from "../AnimationButton";
import { useGlobalContext } from "../../Context/GlobalContextProvider";

function SecondRoom() {
  const {
    artworks,
    secondRoomButtonInformations,
    secondRoomClasses,
    secondRoomThumnailClasses,
  } = useGlobalContext();
  const artworksSecondRoom = artworks.slice(6, 12);
  artworksSecondRoom.forEach((e, index) => {
    e.classNameArtwork = secondRoomClasses[index];
    e.classNameThumbnail = secondRoomThumnailClasses[index];
  });

  return (
    <main className="secondRoom">
      {artworksSecondRoom.map((e) => (
        <Artwork
          key={e.id}
          img={e.source}
          classNameArtwork={e.classNameArtwork}
          classNameThumbnail={e.classNameThumbnail}
          painter={e.user_id_ar}
          date={e.artwork_year}
          technique={e.technique}
          format={e.format}
          title={e.title}
          description={e.alt}
          id={e.id}
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
        />
      ))}
    </main>
  );
}

export default SecondRoom;
