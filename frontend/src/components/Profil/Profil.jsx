import { useGlobalContext } from "../Context/GlobalContextProvider";
import ProfilCard from "./ProfilCard";
import FavoriteArtwork from "./FavoriteArtwork";
import "./Profil.scss";

function Profil() {
  const { userProfil, favoriteArtwork } = useGlobalContext();
  return (
    <main className="profilContainer">
      <h2 className="profilTitle">Mon Profil</h2>
      {userProfil.map((e) => (
        <ProfilCard
          name={e.name}
          lastname={e.lastname}
          email={e.email}
          password={e.password}
        />
      ))}
      <section className="favoriteArtworkContainer">
        <h3 className="favoriteTitle">Mes oeuvres favorites</h3>
        {favoriteArtwork.map((e) => (
          <FavoriteArtwork
            name={e.name}
            img={e.img}
            className="favoriteArtwork"
          />
        ))}
      </section>
    </main>
  );
}

export default Profil;
