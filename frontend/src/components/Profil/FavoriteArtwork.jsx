import "./FavoriteArtwork.scss";

function FavoriteArtwork(artwork) {
  const { name, img } = artwork;
  return (
    <figure className="FavoriteArtworkCard">
      <img src={img} alt={name} className="favoriteArtworkPic" />
      <figcaption className="favoriteArtworkCardTitle">{name}</figcaption>
    </figure>
  );
}

export default FavoriteArtwork;
