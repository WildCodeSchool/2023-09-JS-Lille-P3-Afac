import Picassiettes from "../../assets/Picassiettes.png";
import DallE from "../../assets/Dall-e.png";
import Delabiere from "../../assets/Delabiere.png";
import Eastwood from "../../assets/Eastwood.png";
import "./ArtistCard.scss";

function ArtistCard() {
  return (
    <main className="artistsContainer">
      <section className="artistCard">
        <img
          src={DallE}
          alt="portrait de Salvador Dall-e"
          className="artistPic"
        />
        <h2 className="artistName">Salvador Dall-e</h2>
      </section>
      <section className="artistCard">
        <img
          src={Picassiettes}
          alt="portrait de Pablo Picassiettes"
          className="artistPic"
        />
        <h2 className="artistName">Pablo Picassiettes</h2>
      </section>
      <section className="artistCard">
        <img
          src={Delabiere}
          alt="portrait d'Eugène Delabière'"
          className="artistPic"
        />
        <h2 className="artistName">Eugène Delabière</h2>
      </section>
      <section className="artistCard">
        <img
          src={Eastwood}
          alt="portrait de Gustave Klimteastwood"
          className="artistPic"
        />
        <h2 className="artistName">Gustave Klimteastwood</h2>
      </section>
    </main>
  );
}

export default ArtistCard;
