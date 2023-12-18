import { createContext, useContext, useMemo } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const contextValue = useMemo(() => {
    return {};
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
