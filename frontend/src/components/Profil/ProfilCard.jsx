import ProfilPic from "../../assets/Profil.png";
import "./ProfilCard.scss";

function ProfilCard(userProfil) {
  const { name, lastname, email, password } = userProfil;
  return (
    <article className="profilCard">
      <img src={ProfilPic} alt="Profil" className="profilPic" />
      <section className="profilInfo">
        <p className="profilName">Prénom: {name}</p>
        <p className="profilLastname">Nom: {lastname}</p>
        <p className="profilEmail">E-mail: {email}</p>
        <p className="profilPassword"> Password: {password}</p>
        <button type="button" className="updateProfil">
          Modifier le profil
        </button>
      </section>
    </article>
  );
}

export default ProfilCard;
