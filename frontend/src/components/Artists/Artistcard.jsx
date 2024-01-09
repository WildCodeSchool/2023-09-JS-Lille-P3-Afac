import "./ArtistCard.scss";

function ArtistCard(artists) {
  const { name, img } = artists;
  return (
    <>
      <img src={img} alt={`portrait de ${name}`} className="artistPic" />
      <h2 className="artistName">{name}</h2>
    </>
  );
}

export default ArtistCard;
