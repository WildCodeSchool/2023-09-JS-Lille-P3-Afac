import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [artworks, setArtworks] = useState([
    {
      id: 1,
      title: "Rougail-Saucisses",
      technique: "Aquarelle",
      date: "2023",
      format: "1024 x 1024",
      src: "./src/assets/images/RougailSaucisse.jpg",
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
      src: "./src/assets/images/Reunion.jpg",
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
      title: "Le Tampon",
      technique: "Aquarelle",
      date: "2012",
      format: "1790 x 1276",
      src: "./src/assets/images/LeTampon.png",
      alt: "Aquarelle 'Le Tampon' par Eugène Delabière",
      facts: [],
      artistId: 7,
    },
    {
      id: 4,
      title: "Abris-côtier",
      technique: "Aquarelle",
      date: "2008",
      format: "1792 x 1220",
      src: "./src/assets/images/Abris-côtier.png",
      alt: "Aquarelle 'Abris-côtier' par Marc Chacaille",
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
      technique: "Dessin",
      date: "2004",
      format: "1282 x 852",
      src: "./src/assets/images/Piton.png",
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
      title: "Rougail-Saucisses",
      technique: "Aquarelle",
      date: "2023",
      format: "1024 x 1024",
      src: "./src/assets/images/RougailSaucisse.jpg",
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
      id: 7,
      title: "Rougail-Saucisses",
      technique: "Aquarelle",
      date: "2023",
      format: "1024 x 1024",
      src: "./src/assets/images/RougailSaucisse.jpg",
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
  ]);

  const [artists, setArtists] = useState([
    {
      id: 1,
      name: "Salvador Dall-E",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/dalle.png",
    },
    {
      id: 2,
      name: "Pablo Picassiettes",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/picassiettes.png",
    },
    {
      id: 3,
      name: "Frida Kahloops",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/kahloops.png",
    },
    {
      id: 4,
      name: "Claude Monnaie",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/monnaie.png",
    },
    {
      id: 5,
      name: "Auguste Reblanc",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/reblanc.png",
    },
    {
      id: 6,
      name: "Marc Chacaille",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/chacaille.png",
    },
    {
      id: 7,
      name: "Eugène Delabière",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/delabiere.png",
    },
    {
      id: 8,
      name: "Gustave Klimteastwood",
      biography:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur sapiente cum illo distinctio quas facere quia. Totam sunt voluptate tempore nulla ea, unde, debitis aliquam molestiae perspiciatis, maxime expedita eos!",
      src: "./src/assets/images/klimteastwood.png",
    },
  ]);
  const contextValue = useMemo(() => {
    return { artworks, setArtworks, artists, setArtists };
  }, [artworks, artists]);

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
