import { useEffect, useState } from "react";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import ProfilCard from "./ProfilCard";
import "./Profil.scss";
import ArtworkModal from "../ArtworkModal/ArtworkModal";

function Profil() {
  const { userProfil, getFavorites, favorites } = useGlobalContext();
  const [favoriteArtwork, setFavoriteArtworks] = useState(null);

  useEffect(() => {
    getFavorites();
  }, []);

  useEffect(() => {
    setFavoriteArtworks(favorites);
  }, [favorites]);

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
          {favoriteArtwork &&
            favoriteArtwork.map((e) => (
              <ArtworkModal id={e.artwork_id} page="artistModal" />
            ))}
        </section>
      </main>
    )
  );
}

export default Profil;
