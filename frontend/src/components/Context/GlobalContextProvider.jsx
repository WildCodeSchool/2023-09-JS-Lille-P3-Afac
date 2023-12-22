import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const homeText =
  "Bienvenue dans notre musée virtuel. Vous retrouverez ici toutes les oeuvres de nos artistes réunionnais. Le principe est simple, vous pouvez visiter nos salles et naviguer en cliquant sur les petites pastilles au sol. Bonne visite !";

function GlobalContextProvider({ children }) {
  const contextValue = useMemo(() => {
    return { homeText };
  }, [homeText]);

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
