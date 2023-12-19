import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";

function Gallery() {
  return (
    <main className="galleryContainer">
      <section className="buttonContainer">
        <button type="button" className="artworkType">
          Dessins
        </button>
        <button type="button" className="artworkType">
          Aquarelles
        </button>
      </section>
      <section className="cardContainer">
        <ArtworkCard />
      </section>
    </main>
  );
}

export default Gallery;
