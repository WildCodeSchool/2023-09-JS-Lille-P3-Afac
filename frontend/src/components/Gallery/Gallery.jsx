import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Gallery.scss";
import ArtworkModal from "../ArtworkModal/ArtworkModal";
import FilterButton from "./FilterButton";

function Gallery() {
  const { artworks, category } = useGlobalContext();
  return (
    <main className="galleryContainer">
      <section className="buttonContainer">
        {category.map((e) => (
          <FilterButton key={e.id} name={e.name} />
        ))}
      </section>
      <section className="cardContainer">
        {artworks.map((e) => (
          <ArtworkModal key={e.id} id={e.id} page="gallery" />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
