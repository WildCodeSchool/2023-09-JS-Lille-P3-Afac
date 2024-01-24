import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./OnLeft.scss";

function OnLeft() {
  const { artworks, secondRoomWallClasses, secondRoomWallThumbnailClasses } =
    useGlobalContext();
  const leftWallArtworks = artworks.slice(8, 10);
  const leftWallClasses = secondRoomWallClasses.slice(2, 4);
  const leftWallThumbnail = secondRoomWallThumbnailClasses.slice(2, 4);

  leftWallArtworks.forEach((e, index) => {
    e.classNameArtwork = leftWallClasses[index];
    e.classNameThumbnail = leftWallThumbnail[index];
  });

  return (
    <main className="walls">
      {leftWallArtworks.map((e) => (
        <Artwork
          img={e.source}
          classNameArtwork={e.classNameArtwork}
          classNameThumbnail={e.classNameThumbnail}
          painter={e.user_id_ar}
          date={e.artwork_year}
          technique={e.technique}
          format={e.format}
          title={e.title}
          description={e.alt}
        />
      ))}
      <Link to="/VirtualMuseumSecondRoom">
        <img
          src={arrow}
          alt="flèche pour dézoomer"
          className="moveOnTheFirstRoom"
        />
      </Link>
    </main>
  );
}

export default OnLeft;
