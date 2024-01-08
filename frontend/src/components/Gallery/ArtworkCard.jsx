import "./ArtworkCard.scss";

function ArtworkCard(artwork) {
  const { name, img } = artwork;
  return (
    <section className="card">
      <img src={img} alt={name} className="artwork" />
      <h2 className={name}>{name}</h2>
    </section>
  );
}

export default ArtworkCard;
