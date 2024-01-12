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
          <FilterButton key={e.id} name={e.name} />
        ))}
      </section>
      <section className="cardContainer">
        {artworks.map((e) => (
          <ArtworkCard key={e.id} id={e.id} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
