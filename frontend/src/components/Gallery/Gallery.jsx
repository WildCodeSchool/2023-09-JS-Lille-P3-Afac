import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";
import FilterButton from "./FilterButton";
import NavBar from "../NavBar/NavBar";

function Gallery() {
  const { artwork } = useGlobalContext();
  const { category } = useGlobalContext();
  return (
    <main className="galleryContainer">
      <NavBar />
      <section className="buttonContainer">
        {category.map((e) => (
          <FilterButton name={e.name} />
        ))}
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
