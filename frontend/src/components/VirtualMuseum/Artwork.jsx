function Artwork(Artworks) {
  const {
    img,
    classNameArtwork,
    classNameThumbnail,
    painter,
    date,
    information,
    title,
    description,
  } = Artworks;

  return (
    <>
      <img src={img} alt="" className={classNameArtwork} />
      <article className={classNameThumbnail}>
        <p className="painter">{painter}</p>
        <p className="date">{date}</p>
        <p className="information">{information}</p>
        <p className="title">{title}</p>
        <p className="description">{description}</p>
      </article>
    </>
  );
}

export default Artwork;
