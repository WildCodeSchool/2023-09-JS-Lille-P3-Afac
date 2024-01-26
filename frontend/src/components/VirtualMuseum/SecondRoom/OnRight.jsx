import { Link } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./OnRight.scss";

function OnRight() {
  const { artworks, secondRoomWallClasses, secondRoomWallThumbnailClasses } =
    useGlobalContext();
  const rightWallArtworks = artworks.slice(10, 12);
  const rightWallClasses = secondRoomWallClasses.slice(4, 6);
  const rightWallThumbnail = secondRoomWallThumbnailClasses.slice(4, 6);

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
          id={e.id}
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

export default OnRight;
