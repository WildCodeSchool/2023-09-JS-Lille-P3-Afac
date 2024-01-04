import "./ArtistCard.scss";

function ArtistCard(artists) {
  const { name, img } = artists;
  return (
    <section className="artistCard">
      <img src={img} alt={`portrait de ${name}`} className="artistPic" />
      <h2 className="artistName">{name}</h2>
    </section>
  );
}

export default ArtistCard;
