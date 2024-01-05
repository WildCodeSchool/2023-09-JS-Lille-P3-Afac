import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./components/Context/GlobalContextProvider";
import App from "./App";
import Gallery from "./components/Gallery/Gallery";
import Artists from "./components/Artists/Artists";
import Profil from "./components/Profil/Profil";
import NavBar from "./components/NavBar/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Gallery",
    element: <Gallery />,
  },
  {
    path: "/Artists",
    element: <Artists />,
  },
  {
    path: "/Profil",
    element: (
      <>
        <NavBar />
        <Profil />
      </>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <GlobalContextProvider>
      <RouterProvider router={router} />
    </GlobalContextProvider>
  </React.StrictMode>
);
