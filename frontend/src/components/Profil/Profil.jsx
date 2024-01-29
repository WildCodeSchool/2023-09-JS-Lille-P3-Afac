import { useGlobalContext } from "../Context/GlobalContextProvider";
import ProfilCard from "./ProfilCard";
import FavoriteArtwork from "./FavoriteArtwork";
import "./Profil.scss";

function Profil() {
  const { favoriteArtwork, userProfil } = useGlobalContext();
  return (
    userProfil && (
      <main className="profilPage">
        <section>
          <h2 className="profilTitle">Mon Profil</h2>
          <ProfilCard
            name={userProfil.firstname}
            lastname={userProfil.lastname}
            email={userProfil.email}
            src={userProfil.src}
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
    )
  );
}

export default Profil;
