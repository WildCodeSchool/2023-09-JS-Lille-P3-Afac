import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalContextProvider } from "./components/Context/GlobalContextProvider";
import App from "./App";
import VirtualMuseum from "./components/VirtualMuseum/FirstRoom/FirstRoom";
import SecondRoom from "./components/VirtualMuseum/SecondRoom/SecondRoom";
import FirstWall from "./components/VirtualMuseum/FirstRoom/BackWall";
import SecondWall from "./components/VirtualMuseum/FirstRoom/RightWall";
import ThirdWall from "./components/VirtualMuseum/FirstRoom/LeftWall";
import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/NavBar/NavBar";
import Artists from "./components/Artists/Artists";
import Profil from "./components/Profil/Profil";
import SignUp from "./components/SignUp/SignUp";
import ReturnMainMenuButton from "./components/ReturnMainMenuButton/ReturnMainMenuButton";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/VirtualMuseumFirstRoom",
    element: (
      <>
        <VirtualMuseum />
        <ReturnMainMenuButton />
      </>
    ),
  },
  {
    path: "/VirtualMuseumSecondRoom",
    element: (
      <>
        <SecondRoom />
        <ReturnMainMenuButton />
      </>
    ),
  },
  {
    path: "/VirtualMuseumFirstWall",
    element: (
      <>
        <FirstWall />
        <ReturnMainMenuButton />
      </>
    ),
  },
  {
    path: "/VirtualMuseumSecondWall",
    element: (
      <>
        <SecondWall />
        <ReturnMainMenuButton />
      </>
    ),
  },
  {
    path: "/VirtualMuseumThirdWall",
    element: (
      <>
        <ThirdWall />
        <ReturnMainMenuButton />
      </>
    ),
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
  {
    path: "/Sign-Up",
    element: (
      <>
        <NavBar />
        <SignUp />
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
