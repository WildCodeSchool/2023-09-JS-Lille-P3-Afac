import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./LeftWall.scss";

function LeftWall() {
  const { artworks, firstRoomWallClasses, firstRoomWallThumbnailClasses } =
    useGlobalContext();
  const leftWallArtworks = artworks.slice(4, 6);
  const leftWallClasses = firstRoomWallClasses.slice(4, 6);
  const leftWallThumbnail = firstRoomWallThumbnailClasses.slice(4, 6);

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

export default LeftWall;
