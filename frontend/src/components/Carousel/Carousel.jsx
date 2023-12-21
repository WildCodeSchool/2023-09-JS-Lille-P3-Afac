import { useState } from "react";
import "./Carousel.scss";
import AliceCarousel from "react-alice-carousel";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (e) => {
    const currentIndex = e.item;
    setCurrentSlide(currentIndex);
  };
  return (
    <>
      <section className="carousel-container">
        <AliceCarousel
          autoPlay
          autoPlayInterval={9000}
          infinite
          onSlideChanged={handleSlideChange}
        >
          <img
            src="./src/assets/Abris-côtier.png"
            className="carousel-item"
            alt="Aquarelle de l'Abri-côtier"
          />
          <img
            src="./src/assets/Piton.png"
            className="carousel-item"
            alt="Dessin du Piton de la Fournaise"
          />
          <img
            src="./src/assets/paysage.png"
            className="carousel-item"
            alt="Aquarelle d'un paysage réunionnais"
          />
        </AliceCarousel>
        {currentSlide === 0 && (
          <section className="carousel-slide-visit_container carousel-first-slide-visit_container">
            <h1 className="carousel-slide-visit_text carousel-first-slide-visit_text">
              L'aquarelle réunionnaise
            </h1>
            <button
              type="button"
              className="carousel-slide-visit_button carousel-first-slide-visit_button"
            >
              Visiter
            </button>
          </section>
        )}
        {currentSlide === 1 && (
          <section className="carousel-slide-visit_container carousel-second-slide-visit_container">
            <h1 className="carousel-slide-visit_text carousel-second-slide-visit_text">
              Le dessin réunionnais
            </h1>
            <button
              type="button"
              className="carousel-slide-visit_button carousel-second-slide-visit_button"
            >
              Visiter
            </button>
          </section>
        )}

        {currentSlide === 2 && (
          <section className="carousel-slide-visit_container carousel-third-slide-visit_container">
            <h1 className="carousel-slide-visit_text carousel-third-slide-visit_text">
              Une âme d'artiste ?
            </h1>
            <button
              type="button"
              className="carousel-slide-visit_button carousel-third-slide-visit_button"
            >
              Publier
            </button>
          </section>
        )}
        {currentSlide === 3 && (
          <section className="carousel-slide-visit_container carousel-first-slide-visit_container">
            <h1 className="carousel-slide-visit_text carousel-first-slide-visit_text">
              L'aquarelle réunionnaise
            </h1>
            <button
              type="button"
              className="carousel-slide-visit_button carousel-first-slide-visit_button"
            >
              Visiter
            </button>
          </section>
        )}
      </section>
      <article className="hometext-container">
        <p className="hometext">
          Bienvenue dans notre musée virtuel. Vous retrouverez ici toutes les
          oeuvres de nos artistes réunionnais. Le principe est simple, vous
          pouvez visiter nos salles et naviguer en cliquant sur les petites
          pastilles au sol. Bonne visite !
        </p>
      </article>
    </>
  );
}

export default Carousel;
