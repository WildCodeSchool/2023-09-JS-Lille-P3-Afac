import { useState } from "react";
import "./Carousel.scss";
import AliceCarousel from "react-alice-carousel";
import NavBar from "../NavBar/NavBar";
import HomePageMenuLink from "../HomePageMenu/HomePageMenuLink/HomePageMenuLink";
import { useGlobalContext } from "../Context/GlobalContextProvider";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const { homeText } = useGlobalContext();

  const handleSlideChange = (e) => {
    const currentIndex = e.item;
    setCurrentSlide(currentIndex);
  };

  return (
    <>
      <NavBar transparent="navbar_transparent" />
      <main className="carousel-container">
        <AliceCarousel
          autoPlay
          autoPlayInterval={9000}
          infinite
          autoPlayControls
          onSlideChanged={handleSlideChange}
          keyboardNavigation="true"
        >
          <img
            src="./src/assets/paysage.png"
            className="carousel-item"
            alt="Aquarelle de l'Abri-côtier"
          />
          <img
            src="./src/assets/Saint-Denis.png"
            className="carousel-item"
            alt="Dessin du Piton de la Fournaise"
          />
          <img
            src="./src/assets/Abri-côtier.png"
            className="carousel-item"
            alt="Aquarelle d'un paysage réunionnais"
          />
        </AliceCarousel>
        {(currentSlide === -1 || currentSlide === 2) && (
          <article className="carousel-slide-visit_container carousel-third-slide-visit_container">
            <h2 className="carousel-slide-visit_text carousel-third-slide-visit_text">
              Une âme d'artiste ?
            </h2>
            <HomePageMenuLink
              to="/"
              type="button"
              className="carousel-slide-visit_button carousel-third-slide-visit_button"
              label="Publier"
            />
          </article>
        )}
        {(currentSlide === 0 || currentSlide === 3) && (
          <article className="carousel-slide-visit_container carousel-first-slide-visit_container">
            <h2 className="carousel-slide-visit_text carousel-first-slide-visit_text">
              L'aquarelle réunionnaise
            </h2>
            <HomePageMenuLink
              to="/Gallery"
              type="button"
              className="carousel-slide-visit_button carousel-first-slide-visit_button"
              label="Visiter"
            />
          </article>
        )}
        {currentSlide === 1 && (
          <article className="carousel-slide-visit_container carousel-second-slide-visit_container">
            <h2 className="carousel-slide-visit_text carousel-second-slide-visit_text">
              Le dessin réunionnais
            </h2>
            <HomePageMenuLink
              to="/Gallery"
              type="button"
              className="carousel-slide-visit_button carousel-second-slide-visit_button"
              label="Visiter"
            />
          </article>
        )}
        <article className="hometext-container">
          <p className="hometext">{homeText}</p>
        </article>
      </main>
    </>
  );
}

export default Carousel;
