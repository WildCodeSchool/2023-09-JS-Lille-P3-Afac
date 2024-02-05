import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
            src={`${import.meta.env.VITE_BACKEND_URL}/${userProfil.src}`}
          />
        </section>
        <Link to="/postartwork" className="postArtworkButton">
          Soumettre votre oeuvre
        </Link>

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
