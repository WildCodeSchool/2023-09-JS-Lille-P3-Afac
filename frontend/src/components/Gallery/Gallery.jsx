import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";
import FilterButton from "./FilterButton";

function Gallery() {
  const { artworks, category } = useGlobalContext();
  return (
    <main className="galleryContainer">
      <section className="buttonContainer">
        {category.map((e) => (
          <FilterButton name={e.name} />
        ))}
      </section>
      <section className="cardContainer">
        {artworks.map((e) => (
          <ArtworkCard name={e.title} img={e.src} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
