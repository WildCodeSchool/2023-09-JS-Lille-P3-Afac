import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./BackWall.scss";

function BackWall() {
  const { artworks, firstRoomWallClasses, firstRoomWallThumbnailClasses } =
    useGlobalContext();
  const rightWallArtworks = artworks.slice(0, 2);
  const rightWallClasses = firstRoomWallClasses.slice(0, 2);
  const rightWallThumbnail = firstRoomWallThumbnailClasses.slice(0, 2);

  rightWallArtworks.forEach((e, index) => {
    e.classNameArtwork = rightWallClasses[index];
    e.classNameThumbnail = rightWallThumbnail[index];
  });

  return (
    <main className="walls">
      {rightWallArtworks.map((e) => (
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

export default BackWall;
