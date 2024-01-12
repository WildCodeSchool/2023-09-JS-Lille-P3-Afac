import { useState } from "react";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";
import FilterButton from "./FilterButton";

function Gallery() {
  const { artworks, category } = useGlobalContext();
  const [selectedArtworks, setSelectedArtworks] = useState(artworks);
  return (
    <main className="galleryContainer">
      <section className="buttonContainer">
        {category.map((e) => (
          <FilterButton
            key={e.id}
            name={e.name}
            setSelectedArtworks={setSelectedArtworks}
          />
        ))}
      </section>
      <section className="cardContainer">
        {selectedArtworks.map((e) => (
          <ArtworkCard key={e.id} id={e.id} />
        ))}
      </section>
    </main>
  );
}

export default Gallery;
