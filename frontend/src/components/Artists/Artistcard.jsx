import "./ArtistCard.scss";

function ArtistCard(artists) {
  const { name, img } = artists;
  return (
    <>
      <img src={img} alt={`portrait de ${name}`} className="artistPic" />
      <figcaption className="artistName">{name}</figcaption>
    </>
  );
}

export default ArtistCard;
