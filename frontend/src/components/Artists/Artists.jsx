import { useGlobalContext } from "../Context/GlobalContextProvider";
import "./Artists.scss";
import ArtistCard from "./Artistcard";

function Artists() {
  const { artists } = useGlobalContext();
  return (
    <main className="artistsContainer">
      {artists.map((e) => (
        <ArtistCard key={e.id} id={e.id} />
      ))}
    </main>
  );
}
export default Artists;
