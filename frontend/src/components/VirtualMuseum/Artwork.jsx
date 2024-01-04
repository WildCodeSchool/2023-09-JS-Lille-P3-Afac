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
        <h1 className="painter">{painter}</h1>
        <h2 className="date">{date}</h2>
        <h3 className="information">{information}</h3>
        <h4 className="title">{title}</h4>
        <p className="description">{description}</p>
      </article>
    </>
  );
}

export default Artwork;
