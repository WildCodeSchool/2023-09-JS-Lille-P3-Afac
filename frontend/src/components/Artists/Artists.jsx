import { useGlobalContext } from "../Context/GlobalContextProvider";
import ArtistCard from "./Artistcard";
import "./Artists.scss";
import NavBar from "../NavBar/NavBar";

function Artists() {
  const { artists } = useGlobalContext();
  return (
    <main className="artistsContainer">
      <NavBar />
      {artists.map((e) => (
        <ArtistCard name={e.name} img={e.img} />
      ))}
    </main>
  );
}
export default Artists;
