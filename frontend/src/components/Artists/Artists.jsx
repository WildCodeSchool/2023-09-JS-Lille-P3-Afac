import { useLoaderData } from "react-router-dom";
import "./Artists.scss";
import ArtistCard from "./Artistcard";

function Artists() {
  const { artists } = useLoaderData();
  return (
    artists && (
      <main className="artistsContainer">
        <h1 className="artistTitle">Nos artistes</h1>
        <section className="artistBox">
          {artists.map((e) => (
            <ArtistCard key={e.id} id={e.id} />
          ))}
        </section>
      </main>
    )
  );
}
export default Artists;
