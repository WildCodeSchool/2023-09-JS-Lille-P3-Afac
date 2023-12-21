import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [artwork, setArtwork] = useState([
    {
      id: 1,
      title: "Rougail-Saucisses",
      technique: "Aquarelle",
      date: "2023",
      format: "1024 x 1024",
      src: "./src/assets/images/RougailSaucisse.jpg",
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
      artist: "Salvador Dall-E",
    },
    {
      id: 2,
      title: "Reunion",
      technique: "Aquarelle",
      date: "2020",
      format: "1024 x 1024",
      src: "./src/assets/images/Reunion.jpg",
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
      artist: "Pablo Picassiettes",
    },
    {
      id: 3,
      title: "Le Tampon",
      technique: "Aquarelle",
      date: "2012",
      format: "1790 x 1276",
      src: "./src/assets/images/LeTampon.png",
      facts: [],
      artist: "Eugène Delabière",
    },
    {
      id: 4,
      title: "Abris-côtier",
      technique: "Aquarelle",
      date: "2008",
      format: "1792 x 1220",
      src: "./src/assets/images/Abris-côtier.png",
      facts: [
        {
          id: 1,
          fact: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quia harum. Vitae recusandae iste magnam, ad voluptatum atque facere quas deleniti ex aperiam. Non, eligendi accusantium sit laudantium blanditiis nobis.",
        },
      ],
      artist: "Marc Chacaille",
    },
    {
      id: 5,
      title: "Le Piton",
      technique: "Dessin",
      date: "2004",
      format: "1282 x 852",
      src: "./src/assets/images/Piton.png",
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
      artist: "Auguste Reblanc",
    },
  ]);

  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Salvador Dall-E",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 2,
      name: "Pablo Picassiettes",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 3,
      name: "Frida Kahloops",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 4,
      name: "Claude Monnaie",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 5,
      name: "Auguste Reblanc",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 6,
      name: "Marc Chacaille",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 7,
      name: "Eugène Delabière",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
    {
      id: 8,
      name: "Gustave Klimteastwood",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
    },
  ]);
  const contextValue = useMemo(() => {
    return { artwork, setArtwork, artists, setArtists };
  }, [artwork, artists]);

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
