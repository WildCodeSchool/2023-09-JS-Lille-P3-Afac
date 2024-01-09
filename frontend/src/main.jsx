import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./components/Context/GlobalContextProvider";
import App from "./App";
import VirtualMuseum from "./components/VirtualMuseum/FirstRoom/FirstRoom";
import FirstWall from "./components/VirtualMuseum/FirstRoom/BackWall";
import SecondWall from "./components/VirtualMuseum/FirstRoom/RightWall";
import ThirdWall from "./components/VirtualMuseum/FirstRoom/LeftWall";
import SecondRoom from "./components/VirtualMuseum/SecondRoom/SecondRoom";
import FontWall from "./components/VirtualMuseum/SecondRoom/FontWall";
import OnLeft from "./components/VirtualMuseum/SecondRoom/OnLeft";
import OnRight from "./components/VirtualMuseum/SecondRoom/OnRight";
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
    path: "/VirtualMuseumFirstRoom",
    element: <VirtualMuseum />,
  },
  {
    path: "/VirtualMuseumFirstWall",
    element: <FirstWall />,
  },
  {
    path: "/VirtualMuseumSecondWall",
    element: <SecondWall />,
  },
  {
    path: "/VirtualMuseumThirdWall",
    element: <ThirdWall />,
  },
  {
    path: "/VirtualMuseumSecondRoom",
    element: <SecondRoom />,
  },
  {
    path: "/VirtualMuseumFontWall",
    element: <FontWall />,
  },
  {
    path: "/VirtualMuseumOnLeft",
    element: <OnLeft />,
  },
  {
    path: "/VirtualMuseumOnRight",
    element: <OnRight />,
  },
  {
    path: "/Gallery",
    element: (
      <>
        <NavBar />
        <Gallery />
      </>
    ),
  },
  {
    path: "/Artists",
    element: (
      <>
        <NavBar />
        <Artists />
      </>
    ),
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
