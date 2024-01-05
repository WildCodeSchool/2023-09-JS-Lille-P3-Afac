import ProfilPic from "../../assets/Profil.png";
import "./ProfilCard.scss";

function ProfilCard(userProfil) {
  const { name, lastname, email, password } = userProfil;
  return (
    <section className="profilCard">
      <img src={ProfilPic} alt="Profil" className="profilPic" />
      <article className="profilInfo">
        <p className="profilName">Prénom: {name}</p>
        <p className="profilLastname">Nom: {lastname}</p>
        <p className="profilEmail">E-mail: {email}</p>
        <p className="profilPassword"> Password: {password}</p>
      </article>
    </section>
  );
}

export default ProfilCard;
