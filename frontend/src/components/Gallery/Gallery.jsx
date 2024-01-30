import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Gallery.scss";
import ArtworkCard from "./ArtworkCard";
import FilterButton from "./FilterButton";

function Gallery() {
  const { category } = useGlobalContext();
  const { artworks } = useLoaderData();
  const [selectedArtworks, setSelectedArtworks] = useState(null);
  useEffect(() => {
    setSelectedArtworks(artworks);
  }, [artworks]);
  return (
    selectedArtworks && (
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
    )
  );
}

export default Gallery;
