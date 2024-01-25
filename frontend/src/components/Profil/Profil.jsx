import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../Context/GlobalContextProvider";
import ProfilCard from "./ProfilCard";
import FavoriteArtwork from "./FavoriteArtwork";
import "./Profil.scss";

function Profil() {
  const { favoriteArtwork, setUserProfil, userProfil } = useGlobalContext();
  const { id } = useParams();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setUserProfil(data);
      })
      .catch((err) => console.error(err));
  }, [id]);
  return (
    userProfil && (
      <main className="profilPage">
        <section className="profilContainer">
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
