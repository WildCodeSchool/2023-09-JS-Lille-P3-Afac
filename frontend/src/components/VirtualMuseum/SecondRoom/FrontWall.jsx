import { Link, useLoaderData } from "react-router-dom";
import arrow from "../../../assets/arrow.png";
import { useGlobalContext } from "../../Context/GlobalContextProvider";
import Artwork from "../Artwork";
import "./FrontWall.scss";

function FontWall() {
  const { secondRoomWallClasses, secondRoomWallThumbnailClasses } =
    useGlobalContext();
  const { artworks } = useLoaderData();
  const frontWallArtworks = artworks.slice(6, 8);
  const frontWallClasses = secondRoomWallClasses.slice(0, 2);
  const frontWallThumbnail = secondRoomWallThumbnailClasses.slice(0, 2);

  frontWallArtworks.forEach((e, index) => {
    e.classNameArtwork = frontWallClasses[index];
    e.classNameThumbnail = frontWallThumbnail[index];
  });

  return (
    <main className="walls">
      {frontWallArtworks.map((e) => (
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

export default FontWall;
