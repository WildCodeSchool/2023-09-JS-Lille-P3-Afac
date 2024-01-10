import { useGlobalContext } from "../Context/GlobalContextProvider";
import ArtistCard from "./Artistcard";
import "./Artists.scss";

function Artists() {
  const { artists } = useGlobalContext();
  return (
    <main className="artistsContainer">
      {artists.map((e) => (
        <ArtistCard name={e.name} img={e.src} />
      ))}
    </main>
  );
}
export default Artists;
