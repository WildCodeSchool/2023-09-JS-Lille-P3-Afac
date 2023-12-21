import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";

function Gallery() {
  const { artwork } = useGlobalContext();
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
        {artwork.map((e) => (
          <ArtworkCard name={e.name} img={e.img} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
