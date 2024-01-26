import { Link, useLoaderData } from "react-router-dom";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import arrow from "../../../assets/arrow.png";
import Artwork from "../Artwork";
import "./RightWall.scss";

function RightWall() {
  const { firstRoomWallClasses, firstRoomWallThumbnailClasses } =
    useGlobalContext();
  const { artworks } = useLoaderData();
  const rightWallArtworks = artworks.slice(2, 4);
  const rightWallClasses = firstRoomWallClasses.slice(2, 4);
  const rightWallThumbnail = firstRoomWallThumbnailClasses.slice(2, 4);

  rightWallArtworks.forEach((e, index) => {
    e.classNameArtwork = rightWallClasses[index];
    e.classNameThumbnail = rightWallThumbnail[index];
  });

  return (
    <main className="walls">
      {rightWallArtworks.map((e) => (
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
          alt="flèche pour dézoomer"
          className="moveOnTheFirstRoom"
          aria-label="flèche pour dézoomer"
        />
      </Link>
    </main>
  );
}

export default RightWall;
