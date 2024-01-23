import { useGlobalContext } from "../Context/GlobalContextProvider";
import ProfilCard from "./ProfilCard";
import FavoriteArtwork from "./FavoriteArtwork";
import "./Profil.scss";

function Profil() {
  const { userProfil, favoriteArtwork } = useGlobalContext();
  return (
    <main className="profilPage">
      <section className="profil Container">
        <h2 className="profilTitle">Mon profil</h2>
        <ProfilCard
          name={userProfil.name}
          lastname={userProfil.lastname}
          email={userProfil.email}
          password={userProfil.password}
        />
      </section>

      <button type="button" className="postArtworkButton">
        Soumettre votre oeuvre
      </button>

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
