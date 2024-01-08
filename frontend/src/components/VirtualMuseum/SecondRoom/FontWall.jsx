import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./FontWall.scss";

function FontWall() {
  const firstArtwork = {
    img: "./src/assets/Payet.png",
    classNameArtwork: "firstArtworkFontRoomSecondRoom",
    classNameThumbnail: "firstArtworkFontRoomSecondRoomInformations",
    painter: "Salvador Dall-E",
    date: "2022-???",
    information: "Aquarelle (800cm x 500cm)",
    title: "Le réunionnais ultime",
    description: "Le plus grand réunionnais de l'histoire",
  };

  const secondArtwork = {
    img: "./src/assets/playaWithFrame.png",
    classNameArtwork: "firstArtworkLeftSideSecondRoom",
    classNameThumbnail: "firstArtworkLeftSideSecondRoomInformations",
    painter: "Frida Kahloops",
    date: "1976-2002",
    information: "Aquarelle (1000cm x 700cm)",
    title: "Plage réunionnaise",
    description: "Plage de l'ile de la Réunion",
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
      <Link to="/VirtualMuseumSecondRoom">
        <img
          src={arrow}
          alt="flèche pour dézoomer"
          className="moveOnTheSecondRoom"
          aria-label="flèche pour dézoomer"
        />
      </Link>
    </main>
  );
}

export default FontWall;
