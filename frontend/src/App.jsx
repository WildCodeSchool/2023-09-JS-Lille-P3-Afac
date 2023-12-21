import "./App.scss";
import { useGlobalContext } from "./components/contexts/GlobalContextProvider";
import ArtworkModal from "./components/ArtworkModal/ArtworkModal";
// import ArtistModal from "./components/ArtistModal/ArtistModal";

function App() {
  const { artworks } = useGlobalContext();

  return (
    <main>
      {artworks.map((e) => (
        <ArtworkModal
          key={e.id}
          id={e.id}
          title={e.title}
          technique={e.technique}
          date={e.date}
          format={e.format}
          src={e.src}
          artistId={e.artistId}
        />
      ))}
    </main>
  );
}

export default App;
