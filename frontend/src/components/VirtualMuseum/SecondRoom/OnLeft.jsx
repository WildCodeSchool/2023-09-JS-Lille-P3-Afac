import { Link } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./OnLeft.scss";

function OnLeft() {
  const firstArtwork = {
    img: "./src/assets/blueWithFrame.png",
    classNameArtwork: "secondArtworkLeftSideSecondRoom",
    classNameThumbnail: "secondArtworkLeftSideSecondRoomInformations",
    painter: "Auguste Reblanc",
    date: "1876-2021",
    information: "Aquarelle (1000cm x 800cm)",
    title: "L'ile de la Réunion",
    description: "L'ile de la Réunion avec de fortes nuances bleues",
  };

  const secondArtwork = {
    img: "./src/assets/roseVillageWithFrame.png",
    classNameArtwork: "secondArtworkRightSideSecondRoom",
    classNameThumbnail: "secondArtworkRightSideSecondRoomInformations",
    painter: "Auguste Reblanc",
    date: "1876-2021",
    information: "Aquarelle (1000cm x 800cm)",
    title: "L'ile de la Réunion",
    description: "L'ile de la Réunion avec de fortes nuances roses",
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

export default OnLeft;
