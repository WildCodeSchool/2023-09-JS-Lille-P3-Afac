import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import "./SecondRoom.scss";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import Artwork from "../Artwork";

function SecondRoom() {
  const { ArtworksSecondRoom } = useGlobalContext();
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
          alt="flèche pour passer dans la première salle du musée"
          className="moveOnTheFirstRoom"
          aria-label="flèche pour aller dans la première salle du musée virtuel"
        />
      </Link>
    </main>
  );
}

export default SecondRoom;
