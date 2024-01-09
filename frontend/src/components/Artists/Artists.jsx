import { useGlobalContext } from "../Context/GlobalContextProvider";
import ArtistModal from "../ArtistModal/ArtistModal";
import "./Artists.scss";

function Artists() {
  const { artists } = useGlobalContext();
  return (
    <main className="artistsContainer">
      {artists.map((e) => (
        <ArtistModal key={e.id} id={e.id} page="artist" />
      ))}
    </main>
  );
}
export default Artists;
