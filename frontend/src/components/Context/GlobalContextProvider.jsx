import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const artists = [
    {
      name: "Salvador Dall-e",
      img: "./src/assets/Dall-e.png",
    },
    {
      name: "Pablo Picassiettes",
      img: "./src/assets/Picassiettes.png",
    },
    {
      name: "Eugène Delabière",
      img: "./src/assets/Delabiere.png",
    },
    {
      name: "Gustave Klimteastwood",
      img: "./src/assets/Klimteastwood.png",
    },
  ];
  const artwork = [
    {
      name: "Le Piton",
      img: "./src/assets/Piton.png",
    },
    {
      name: "Abris-côtier",
      img: "./src/assets/Abris-côtier.png",
    },
    {
      name: "Le Tampon",
      img: "./src/assets/LeTampon.png",
    },
  ];
  const category = [
    {
      name: "Dessin",
    },
    {
      name: "Aquarelle",
    },
  ];
  const about = [
    {
      name: "About",
      src: "./src/components/AboutPage/AboutPage.jsx",
    },
  ];
  const contextValue = useMemo(() => {
    return {
      artists,
      artwork,
      category,
      about,
    };
  });

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}
export { GlobalContextProvider, useGlobalContext };

GlobalContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
