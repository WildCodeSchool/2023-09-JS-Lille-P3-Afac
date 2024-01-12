import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const homeText =
  "Bienvenue dans notre musée virtuel. Vous retrouverez ici toutes les oeuvres de nos artistes réunionnais. Le principe est simple, vous pouvez visiter nos salles et naviguer en cliquant sur les petites pastilles au sol. Bonne visite !";

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
      title: "Rougail-Saucisses",
      technique: "Aquarelle",
      date: "2023",
      format: "1024 x 1024",
      src: "./src/assets/RougailSaucisse.jpg",
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
      artistId: 1,
    },
    {
      id: 2,
      title: "Reunion",
      technique: "Aquarelle",
      date: "2020",
      format: "1024 x 1024",
      src: "./src/assets/Reunion.jpg",
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
      artistId: 2,
    },
    {
      id: 3,
      title: "Pink Village",
      src: "./src/assets/pinkVillage.png",
      technique: "Dessin",
      date: "2017",
      format: "1790 x 1276",
      alt: "Dessin 'Pink Village' par Frida Khaloops",
      facts: [],
      artistId: 3,
    },
    {
      id: 4,
      title: "Abri-côtier",
      src: "./src/assets/Abri-côtier.png",
      technique: "Aquarelle",
      date: "2008",
      format: "1792 x 1220",
      alt: "Aquarelle 'Abri-côtier' par Marc Chacaille",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      artistId: 6,
    },
    {
      id: 5,
      title: "Le Piton",
      src: "./src/assets/Piton.png",
      technique: "Dessin",
      date: "2004",
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
      artistId: 5,
    },
    {
      id: 6,
      title: "Payet",
      src: "./src/assets/Payet.png",
      technique: "Aquarelle",
      date: "2023",
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
      artistId: 3,
    },
  ];

  const category = [
    {
      id: 1,
      name: "Tout",
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
      ArtworksFirstRoom,
      ArtworksSecondRoom,
      buttonInformations,
      artists,
      artworks,
      category,
      userProfil,
      favoriteArtwork,
      homeText,
    };
  }, [
    ArtworksFirstRoom,
    ArtworksSecondRoom,
    buttonInformations,
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
