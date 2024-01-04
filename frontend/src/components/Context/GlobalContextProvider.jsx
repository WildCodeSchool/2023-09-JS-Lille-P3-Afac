import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const ArtworksFirstRoom = [
    {
      img: "./src/assets/shelterWithFrame.png",
      classNameArtwork: "firstArtworkBackRoom",
      classNameThumbnail: "firstArtworkBackRoomInformations",
      painter: "Salvador Dall-E",
      date: "2022-???",
      information: "Aquarelle (800cm x 600cm)",
      title: "Abris-côtier",
      description: "Paysage de la côte réunionnaise pendant l'été 2021",
    },
    {
      img: "./src/assets/PeakWithFrame.png",
      classNameArtwork: "secondArtworkBackRoom",
      classNameThumbnail: "secondArtworkBackRoomInformations",
      painter: "Claude Monnaie",
      date: "2022-???",
      information: "Dessin (600cm x 400cm)",
      title: "Piton de la fournaise",
      description: "Paysage du piton de la fournaise",
    },
    {
      img: "./src/assets/rougailWithFrame.png",
      classNameArtwork: "secondArtworkRightSide",
      classNameThumbnail: "secondArtworkRightSideInformations",
      painter: "Auguste Reblanc",
      date: "1876-2021",
      information: "Aquarelle (1000cm x 800cm)",
      title: "Le rougail saucisse local",
      description: "Le plat traditionnel réunionnais par excellence",
    },
    {
      img: "./src/assets/partyWithFrame.png",
      classNameArtwork: "firstArtworkRightSide",
      classNameThumbnail: "firstArtworkRightSideInformations",
      painter: "Pablo Picassiette",
      date: "1898-1987",
      information: "Aquarelle (600cm x 500cm)",
      title: "Soirée traditionnelle réunionnaise",
      description: "Une soirée animée et tradionnelle de l'ile de la Réunion",
    },
    {
      img: "./src/assets/villageWithFrame.png",
      classNameArtwork: "secondArtworkLeftSide",
      classNameThumbnail: "secondArtworkLeftSideInformations",
      painter: "Pablo Picassiette",
      date: "1898-1987",
      information: "Dessin (900cm x 500cm)",
      title: "Village de la Réunion",
      description: "Une journée classique dans un village de la Réunion",
    },
    {
      img: "./src/assets/womanWithFrame.png",
      classNameArtwork: "firstArtworkLeftSide",
      classNameThumbnail: "firstArtworkLeftSideInformations",
      painter: "Frida Kahloops",
      date: "1976-2002",
      information: "Aquarelle (1200cm x 700cm)",
      title: "Femme réunionnaise",
      description: "Une femme sur la plage de l'ile de la Réunion",
    },
  ];

  const ArtworksSecondRoom = [
    {
      img: "./src/assets/Payet.png",
      classNameArtwork: "firstArtworkBackRoomSecondRoom",
      classNameThumbnail: "firstArtworkBackRoomSecondRoomInformations",
      painter: "Salvador Dall-E",
      date: "2022-???",
      information: "Aquarelle (800cm x 500cm)",
      title: "Le réunionnais ultime",
      description: "Le plus grand réunionnais de l'histoire",
    },
    {
      img: "./src/assets/playaWithFrame.png",
      classNameArtwork: "firstArtworkLeftSideSecondRoom",
      classNameThumbnail: "firstArtworkLeftSideSecondRoomInformations",
      painter: "Frida Kahloops",
      date: "1976-2002",
      information: "Aquarelle (1000cm x 700cm)",
      title: "Plage réunionnaise",
      description: "Plage de l'ile de la Réunion",
    },
    {
      img: "./src/assets/blueWithFrame.png",
      classNameArtwork: "secondArtworkLeftSideSecondRoom",
      classNameThumbnail: "secondArtworkLeftSideSecondRoomInformations",
      painter: "Auguste Reblanc",
      date: "1876-2021",
      information: "Aquarelle (1000cm x 800cm)",
      title: "L'ile de la Réunion",
      description: "L'ile de la Réunion avec de fortes nuances bleues",
    },
    {
      img: "./src/assets/roseVillageWithFrame.png",
      classNameArtwork: "secondArtworkRightSideSecondRoom",
      classNameThumbnail: "secondArtworkRightSideSecondRoomInformations",
      painter: "Auguste Reblanc",
      date: "1876-2021",
      information: "Aquarelle (1000cm x 800cm)",
      title: "L'ile de la Réunion",
      description: "L'ile de la Réunion avec de fortes nuances roses",
    },
    {
      img: "./src/assets/pinkVillage.png",
      classNameArtwork: "firstArtworkRightSideSecondRoom",
      classNameThumbnail: "firstArtworkRightSideSecondRoomInformations",
      painter: "Auguste Reblanc",
      date: "1876-2021",
      information: "Aquarelle (1000cm x 800cm)",
      title: "L'ile de la Réunion",
      description: "L'ile de la Réunion avec de fortes nuances roses",
    },
    {
      img: "./src/assets/fusionColorWithFrame.png",
      classNameArtwork: "secondArtworkBackRoomSecondRoom",
      classNameThumbnail: "secondArtworkBackRoomSecondRoomInformations",
      painter: "Auguste Reblanc",
      date: "1876-2021",
      information: "Aquarelle (1000cm x 800cm)",
      title: "L'ile de la Réunion",
      description: "L'ile de la Réunion avec de fortes nuances roses et bleues",
    },
  ];

  const buttonInformations = [
    {
      url: "/VirtualMuseumFirstWall",
      className: "wallZoomBack",
      animationClassName: "zoom",
    },
    {
      url: "/VirtualMuseumSecondWall",
      className: "wallZoomRight",
      animationClassName: "zoomRight",
    },
    {
      url: "/VirtualMuseumThirdWall",
      className: "wallZoomLeft",
      animationClassName: "zoomLeft",
    },
  ];
  
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

  const contextValue = useMemo(() => {
    return {
      ArtworksFirstRoom,
      ArtworksSecondRoom,
      buttonInformations,
      artists,
      artwork,
      category,
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
