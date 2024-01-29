import { createContext, useContext, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const homeText =
  "Bienvenue dans notre musée virtuel. Vous retrouverez ici toutes les oeuvres de nos artistes réunionnais. Le principe est simple, vous pouvez visiter nos salles et naviguer en cliquant sur les petites pastilles au sol. Bonne visite !";

function GlobalContextProvider({ children }) {
  const firstRoomClasses = [
    "firstArtworkBackRoom",
    "secondArtworkBackRoom",
    "secondArtworkRightSide",
    "firstArtworkRightSide",
    "secondArtworkLeftSide",
    "firstArtworkLeftSide",
  ];

  const firstRoomThumnailClasses = [
    "firstArtworkBackRoomInformations",
    "secondArtworkBackRoomInformations",
    "secondArtworkRightSideInformations",
    "firstArtworkRightSideInformations",
    "firstArtworkLeftSideInformations",
    "secondArtworkLeftSideInformations",
  ];

  const firstRoomWallClasses = [
    "leftArtworkBackWall",
    "rightArtworkBackWall",
    "secondArtworkRightWall",
    "firstArtworkRightWall",
    "secondArtworkLeftWall",
    "firstArtworkLeftWall",
  ];

  const firstRoomWallThumbnailClasses = [
    "leftArtworkBackWallInformations",
    "rightArtworkBackWallInformations",
    "secondArtworkRightWallInformations",
    "firstArtworkRightWallInformations",
    "firstArtworkLeftWallInformations",
    "secondArtworkLeftWallInformations",
  ];

  const secondRoomClasses = [
    "firstArtworkBackRoomSecondRoom",
    "secondArtworkBackRoomSecondRoom",
    "firstArtworkLeftSideSecondRoom",
    "secondArtworkLeftSideSecondRoom",
    "firstArtworkRightSideSecondRoom",
    "secondArtworkRightSideSecondRoom",
  ];

  const secondRoomThumnailClasses = [
    "firstArtworkBackRoomSecondRoomInformations",
    "secondArtworkBackRoomSecondRoomInformations",
    "firstArtworkLeftSideSecondRoomInformations",
    "secondArtworkLeftSideSecondRoomInformations",
    "firstArtworkRightSideSecondRoomInformations",
    "secondArtworkRightSideSecondRoomInformations",
  ];

  const secondRoomWallClasses = [
    "firstArtworkFrontRoomSecondRoom",
    "secondArtworkFrontRoomSecondRoom",
    "firstArtworkRightSideSecondRoom2",
    "secondArtworkRightSideSecondRoom3",
    "firstArtworkLeftSideSecondRoom2",
    "secondArtworkLeftSideSecondRoom1",
  ];

  const secondRoomWallThumbnailClasses = [
    "firstArtworkFrontRoomSecondRoomInformations",
    "secondArtworkFrontRoomSecondRoomInformations",
    "firstArtworkRightSideSecondInformations2",
    "secondArtworkRightSideSecondInformations3",
    "firstArtworkLeftSideSecondInformations",
    "secondArtworkLeftSideSecondInformations",
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

  const firstRoomButtonInformations = [
    {
      id: 1,
      url: "/VirtualMuseumFirstWall",
      className: "wallZoomBack",
      animationClassName: "zoom",
    },
    {
      id: 2,
      url: "/VirtualMuseumSecondWall",
      className: "wallZoomRight",
      animationClassName: "zoomRight",
    },
    {
      id: 3,
      url: "/VirtualMuseumThirdWall",
      className: "wallZoomLeft",
      animationClassName: "zoomLeft",
    },
  ];
  const secondRoomButtonInformations = [
    {
      id: 1,
      url: "/VirtualMuseumFrontWall",
      className: "secondRoomWallZoomFront",
      animationClassName: "zoomFront",
    },
    {
      id: 2,
      url: "/VirtualMuseumOnRight",
      className: "secondRoomWallZoomRight",
      animationClassName: "zoomOnRight",
    },
    {
      id: 3,
      url: "/VirtualMuseumOnLeft",
      className: "secondRoomWallZoomLeft",
      animationClassName: "zoomOnLeft",
    },
  ];

  const category = [
    {
      id: 1,
      name: "Tous",
    },
    {
      id: 2,
      name: "Dessin",
    },
    {
      id: 3,
      name: "Aquarelle",
    },
  ];

  const [users, setUsers] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/user`)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const [userProfil, setUserProfil] = useState(null);

  const [favorites, setFavorites] = useState(null);

  const getFavorites = async () => {
    const favoritesResponse = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/favorite/${userProfil.id}`
    );
    const userFavorites = await favoritesResponse.json();
    setFavorites(userFavorites);
  };

  const contextValue = useMemo(() => {
    return {
      firstRoomClasses,
      firstRoomThumnailClasses,
      firstRoomWallClasses,
      firstRoomWallThumbnailClasses,
      secondRoomClasses,
      secondRoomThumnailClasses,
      secondRoomWallClasses,
      secondRoomWallThumbnailClasses,
      ArtworksSecondRoom,
      firstRoomButtonInformations,
      secondRoomButtonInformations,
      category,
      homeText,
      users,
      setUsers,
      userProfil,
      setUserProfil,
      favorites,
      setFavorites,
      getFavorites,
    };
  }, [
    firstRoomClasses,
    firstRoomThumnailClasses,
    ArtworksSecondRoom,
    firstRoomButtonInformations,
    secondRoomButtonInformations,
    category,
    homeText,
    users,
    setUsers,
    userProfil,
    setUserProfil,
    favorites,
    setFavorites,
    getFavorites,
  ]);

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
