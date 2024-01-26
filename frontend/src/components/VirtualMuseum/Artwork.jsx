/* eslint-disable camelcase */
function Artwork(Artworks) {
  const {
    img,
    classNameArtwork,
    classNameThumbnail,
    painter,
    date,
    technique,
    format,
    title,
    description,
    artists,
  } = Artworks;

  const artist = artists.find((e) => e.id === painter);

  return (
    <>
      <img src={img} alt="" className={classNameArtwork} />
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
