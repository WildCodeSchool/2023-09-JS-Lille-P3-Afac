import { createContext, useContext, useMemo } from "react";
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
  const secondRoomButtonInformations = [
    {
      url: "/VirtualMuseumFrontWall",
      className: "secondRoomWallZoomFront",
      animationClassName: "zoomFront",
    },
    {
      url: "/VirtualMuseumOnRight",
      className: "secondRoomWallZoomRight",
      animationClassName: "zoomOnRight",
    },
    {
      url: "/VirtualMuseumOnLeft",
      className: "secondRoomWallZoomLeft",
      animationClassName: "zoomOnLeft",
    },
  ];

  const artists = [
    {
      id: 1,
      name: "Salvador Dall-e",
      src: "./src/assets/Dall-e.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 2,
      name: "Pablo Picassiettes",
      src: "./src/assets/Picassiettes.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 3,
      name: "Frida Kahloops",
      src: "./src/assets/kahloops.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 4,
      name: "Claude Monnaie",
      src: "./src/assets/monnaie.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 5,
      name: "Auguste Reblanc",
      src: "./src/assets/reblanc.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 6,
      name: "Marc Chacaille",
      src: "./src/assets/chacaille.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 7,
      name: "Eugène Delabière",
      src: "./src/assets/Delabiere.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 8,
      name: "Gustave Klimteastwood",
      src: "./src/assets/Klimteastwood.png",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
  ];

  const artworks = [
    {
      id: 1,
      title: "Abris-côtier",
      technique: "Aquarelle",
      format: "(800cm x 600cm)",
      artwork_year: "2022",
      source: "./src/assets/shelterWithFrame.png",
      alt: "Paysage de la côte réunionnaise pendant l'été 2021",
      user_id_ar: 1,
    },
    {
      id: 2,
      title: "Piton de la fournaise",
      technique: "Dessin",
      format: "(600cm x 400cm)",
      artwork_year: "2022",
      source: "./src/assets/PeakWithFrame.png",
      alt: "Paysage du piton de la fournaise",
      user_id_ar: 2,
    },
    {
      id: 3,
      source: "./src/assets/rougailWithFrame.png",
      technique: "Aquarelle",
      format: "(1000cm x 800cm)",
      user_id_ar: 4,
      artwork_year: "1876-2021",
      title: "Le rougail saucisse local",
      alt: "Le plat traditionnel réunionnais par excellence",
    },
    {
      id: 4,
      source: "./src/assets/partyWithFrame.png",
      technique: "Aquarelle",
      format: "(600cm x 500cm)",
      user_id_ar: 6,
      artwork_year: "1898-1987",
      title: "Soirée traditionnelle réunionnaise",
      alt: "Une soirée animée et tradionnelle de l'ile de la Réunion",
    },
    {
      id: 5,
      source: "./src/assets/villageWithFrame.png",
      technique: "Dessin",
      format: "(900cm x 500cm)",
      user_id_ar: 3,
      artwork_year: "1898-1987",
      title: "Village de la Réunion",
      alt: "Une journée classique dans un village de la Réunion",
    },
    {
      id: 6,
      source: "./src/assets/womanWithWholeFrame.png",
      technique: "Aquarelle",
      format: "(1200cm x 700cm)",
      user_id_ar: 7,
      artwork_year: "1976-2002",
      title: "Femme réunionnaise",
      alt: "Une femme sur la plage de l'ile de la Réunion",
    },
    {
      id: 7,
      source: "./src/assets/Payet.png",
      artwork_year: "2022-???",
      technique: "Aquarelle",
      format: "(800cm x 500cm)",
      title: "Le réunionnais ultime",
      alt: "Le plus grand réunionnais de l'histoire",
      user_id_ar: "Salvador Dall-E",
    },
    {
      id: 8,
      source: "./src/assets/fusionColorWithFrame.png",
      user_id_ar: "Auguste Reblanc",
      artwork_year: "1876-2021",
      technique: "Aquarelle",
      format: "(1000cm x 800cm)",
      title: "L'ile de la Réunion",
      alt: "L'ile de la Réunion avec de fortes nuances roses et bleues",
    },
    {
      id: 9,
      source: "./src/assets/playaWithFrame.png",
      user_id_ar: "Frida Kahloops",
      artwork_year: "1976-2002",
      technique: "Aquarelle",
      format: "(1000cm x 700cm)",
      title: "Plage réunionnaise",
      alt: "Plage de l'ile de la Réunion",
    },
    {
      id: 10,
      source: "./src/assets/blueWithFrame.png",
      user_id_ar: "Auguste Reblanc",
      artwork_year: "1876-2021",
      technique: "Aquarelle",
      format: "(1000cm x 800cm)",
      title: "L'ile de la Réunion",
      alt: "L'ile de la Réunion avec de fortes nuances bleues",
    },
    {
      id: 11,
      source: "./src/assets/pinkVillage.png",
      user_id_ar: "Auguste Reblanc",
      artwork_year: "1876-2021",
      technique: "Aquarelle",
      format: "(1000cm x 800cm)",
      title: "L'ile de la Réunion",
      alt: "L'ile de la Réunion avec de fortes nuances roses",
    },
    {
      id: 12,
      source: "./src/assets/roseVillageWithFrame.png",
      user_id_ar: "Auguste Reblanc",
      artwork_year: "1876-2021",
      technique: "Aquarelle",
      format: "(1000cm x 800cm)",
      title: "L'ile de la Réunion",
      alt: "L'ile de la Réunion avec de fortes nuances roses",
    },
    {
      id: 13,
      title: "Rougail-Saucisses",
      technique: "Aquarelle",
      artwork_year: "2023",
      format: "1024 x 1024",
      source: "./src/assets/RougailSaucisse.jpg",
      alt: "Aquarelle 'Rougail-Saucisses' par Salvador Dall-E",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
        {
          id: 2,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
        {
          id: 3,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      user_id_ar: 1,
    },
    {
      id: 14,
      title: "Reunion",
      technique: "Aquarelle",
      artwork_year: "2020",
      format: "1024 x 1024",
      source: "./src/assets/Reunion.jpg",
      alt: "Aquarelle 'Reunion' par Pablo Picassiettes",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
        {
          id: 2,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      user_id_ar: 2,
    },
    {
      id: 15,
      title: "Pink Village",
      source: "./src/assets/pinkVillage.png",
      technique: "Dessin",
      artwork_year: "2017",
      format: "1790 x 1276",
      alt: "Dessin 'Pink Village' par Frida Khaloops",
      facts: [],
      artistId: 3,
    },
    {
      id: 16,
      title: "Abri-côtier",
      source: "./src/assets/Abri-côtier.png",
      technique: "Aquarelle",
      artwork_year: "2008",
      format: "1792 x 1220",
      alt: "Aquarelle 'Abri-côtier' par Marc Chacaille",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      user_id_ar: 6,
    },
    {
      id: 17,
      title: "Le Piton",
      source: "./src/assets/Piton.png",
      technique: "Dessin",
      artwork_year: "2004",
      format: "1282 x 852",
      alt: "Aquarelle 'Le Piton' par Auguste Reblanc",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
        {
          id: 2,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      user_id_ar: 5,
    },
    {
      id: 18,
      title: "Payet",
      source: "./src/assets/Payet.png",
      technique: "Aquarelle",
      artwork_year: "2023",
      format: "1282 x 852",
      alt: "Aquarelle 'Payet' par Frida Kahloops",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
        {
          id: 2,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      user_id_ar: 3,
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

  const userProfil = {
    name: "Jonathan",
    lastname: "Selin",
    email: "jonathan.selin@wild.com",
    password: "***********",
  };

  const favoriteArtwork = [
    {
      name: "Le Piton",
      img: "./src/assets/Piton.png",
    },
    {
      name: "Abris-côtier",
      img: "./src/assets/Abri-côtier.png",
    },
  ];

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
      artists,
      artworks,
      category,
      userProfil,
      favoriteArtwork,
      homeText,
    };
  }, [
    firstRoomClasses,
    firstRoomThumnailClasses,
    ArtworksSecondRoom,
    firstRoomButtonInformations,
    secondRoomButtonInformations,
    artists,
    artworks,
    category,
    userProfil,
    favoriteArtwork,
    homeText,
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
