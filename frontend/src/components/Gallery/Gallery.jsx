import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";

function Gallery() {
  return (
    <div className="galleryContainer">
      {/* <Navbar /> */}
      <div className="buttonContainer">
        <button type="button" className="artworkType">
          Dessins
        </button>
        <button type="button" className="artworkType">
          Aquarelles
        </button>
      </div>
      <div className="cardContainer">
        <ArtworkCard ClassName="card" />
      </div>
    </div>
  );
}

export default Gallery;
