import { useLoaderData } from "react-router-dom";
import "./Artists.scss";
import ArtistCard from "./Artistcard";

function Artists() {
  const { artists } = useLoaderData();
  return (
    artists && (
      <main className="artistsContainer">
        {artists.map((e) => (
          <ArtistCard key={e.id} id={e.id} />
        ))}
      </main>
    )
  );
}
export default Artists;
