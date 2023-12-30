import "./App.scss";
import ArtistModal from "./components/ArtistModal/ArtistModal";
import { useGlobalContext } from "./components/contexts/GlobalContextProvider";

function App() {
  const { artworks } = useGlobalContext();

  return (
    <main>
      {artworks.map((e) => (
        <ArtistModal id={e.artistId} />
      ))}
    </main>
  );
}

export default App;
