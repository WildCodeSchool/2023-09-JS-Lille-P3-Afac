import { useLoaderData } from "react-router-dom";
import ArtworkModal from "../ArtworkModal/ArtworkModal";

/* eslint-disable camelcase */
function Artwork(Artworks) {
  const {
    classNameArtwork,
    classNameThumbnail,
    painter,
    date,
    technique,
    format,
    title,
    description,
    id,
  } = Artworks;
  const { artists } = useLoaderData();
  const artist = artists.find((e) => e.id === painter);

  return (
    <>
      <ArtworkModal page="museumArtwork" id={id} className={classNameArtwork} />
      <article className={classNameThumbnail}>
        <p className="painter">{`${artist.firstname} ${artist.lastname}`}</p>
        <p className="date">{date}</p>
        <p className="information">{`${technique} ${format}`}</p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </article>
    </>
  );
}

export default Artwork;
