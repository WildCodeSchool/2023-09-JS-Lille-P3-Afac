import "./ProfilCard.scss";

function ProfilCard(infoProfil) {
  const { name, lastname, email, src } = infoProfil;

  return (
    <article className="profilCard">
      <img src={src} alt="Profil" className="profilPic" />
      <section className="profilInfo">
        <p className="profilName">Prénom: {name}</p>
        <p className="profilLastname">Nom: {lastname}</p>
        <p className="profilEmail">E-mail: {email}</p>
        <p className="profilPassword"> Password: **********</p>
        Modifier le profil
      </section>
    </article>
  );
}

export default ProfilCard;
