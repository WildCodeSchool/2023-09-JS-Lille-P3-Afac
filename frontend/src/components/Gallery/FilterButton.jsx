import { useGlobalContext } from "../Context/GlobalContextProvider";

function FilterButton(category) {
  const { name, setSelectedArtworks } = category;
  const { artworks } = useGlobalContext();

  const handleClick = () => {
    if (name !== "Tous") {
      const selection = artworks.filter((e) => e.technique === name);
      setSelectedArtworks(selection);
    } else {
      setSelectedArtworks(artworks);
    }
  };

  return (
    <button type="button" className="artworkType" onClick={handleClick}>
      {name}
    </button>
  );
}

export default FilterButton;
