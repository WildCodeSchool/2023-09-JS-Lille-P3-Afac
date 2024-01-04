import "./FavoriteArtwork.scss";

function FavoriteArtwork(artwork) {
  const { name, img } = artwork;
  return (
    <section className="FavoriteArtworkCard">
      <img src={img} alt={name} className="artwork" />
      <h2 className="favoriteArtworkCardTitle">{name}</h2>
    </section>
  );
}

export default FavoriteArtwork;
