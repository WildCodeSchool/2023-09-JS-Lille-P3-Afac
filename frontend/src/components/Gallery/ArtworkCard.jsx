import Piton from "../../assets/Piton.png";
import LeTampon from "../../assets/LeTampon.png";
import "./ArtworkCard.scss";

function ArtworkCard() {
  return (
    <section>
      <div className="card">
        <img
          src={Piton}
          alt="dessin du Piton de la fournaise"
          className="artwork"
        />
        <h2 className="artworkTitle">Le Piton</h2>
      </div>

      <div className="card">
        <img
          src={LeTampon}
          alt="dessin du Piton de la fournaise"
          className="artwork"
        />
        <h2 className="artworkTitle">Le Tampon</h2>
      </div>
    </section>
  );
}

export default ArtworkCard;
