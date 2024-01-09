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
    img: "./src/assets/fusionColorWithFrame.png",
    classNameArtwork: "secondArtworkBackRoomSecondRoom",
    classNameThumbnail: "secondArtworkBackRoomSecondRoomInformations",
    painter: "Auguste Reblanc",
    date: "1876-2021",
    information: "Aquarelle (1000cm x 800cm)",
    title: "L'ile de la Réunion",
    description: "L'ile de la Réunion avec de fortes nuances roses et bleues",
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
