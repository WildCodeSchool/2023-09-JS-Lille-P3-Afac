import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./RightWall.scss";

function RightWall() {
  const firstArtwork = {
    img: "./src/assets/rougailWithFrame.png",
    classNameArtwork: "secondArtworkRightWall",
    classNameThumbnail: "secondArtworkRightWallInformations",
    painter: "Salvador Dall-E",
    date: "2022-???",
    information: "Aquarelle (800cm x 600cm)",
    title: "Abris-côtier",
    description: "Paysage de la côte réunionnaise pendant l'été 2021",
  };

  const secondArtwork = {
    img: "./src/assets/partyWithFrame.png",
    classNameArtwork: "firstArtworkRightWall",
    classNameThumbnail: "firstArtworkRightWallInformations",
    painter: "Claude Monnaie",
    date: "2022-???",
    information: "Dessin (600cm x 400cm)",
    title: "Piton de la fournaise",
    description: "Paysage du piton de la fournaise",
  };

  return (
    <main className="walls">
      <Artwork
        img={firstArtwork.img}
        classNameArtwork={firstArtwork.classNameArtwork}
        classNameThumbnail={firstArtwork.classNameThumbnail}
        painter={firstArtwork.painter}
        date={firstArtwork.date}
        information={firstArtwork.information}
        title={firstArtwork.title}
        description={firstArtwork.description}
      />
      <Artwork
        img={secondArtwork.img}
        classNameArtwork={secondArtwork.classNameArtwork}
        classNameThumbnail={secondArtwork.classNameThumbnail}
        painter={secondArtwork.painter}
        date={secondArtwork.date}
        information={secondArtwork.information}
        title={secondArtwork.title}
        description={secondArtwork.description}
      />
      <Link to="/VirtualMuseumFirstRoom">
        <img
          src={arrow}
          alt="flèche pour dézoomer"
          className="moveOnTheFirstRoom"
          aria-label="flèche pour dézoomer"
        />
      </Link>
    </main>
  );
}

export default RightWall;
