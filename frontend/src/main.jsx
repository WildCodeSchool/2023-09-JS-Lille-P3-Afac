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
import FrontWall from "./components/VirtualMuseum/SecondRoom/FrontWall";
import OnLeft from "./components/VirtualMuseum/SecondRoom/OnLeft";
import OnRight from "./components/VirtualMuseum/SecondRoom/OnRight";
import Gallery from "./components/Gallery/Gallery";
import NavBar from "./components/NavBar/NavBar";
import Artists from "./components/Artists/Artists";
import Profil from "./components/Profil/Profil";
import LogInPopup from "./components/LogInPopup/LogInPopup";
import SignUp from "./components/SignUp/SignUp";
import PostArtwork from "./components/PostArtwork/PostArtwork";
import ReturnMainMenuButton from "./components/ReturnMainMenuButton/ReturnMainMenuButton";
import LandscapeMessage from "./components/VirtualMuseum/LanscapeMessage/LandscapeMessage";

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
        <LandscapeMessage messageHidden="message__hidden" />
      </>
    ),
  },
  {
    path: "/VirtualMuseumSecondRoom",
    element: (
      <>
        <LandscapeMessage messageHidden="message__hidden" />
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
        <LandscapeMessage messageHidden="message__hidden" />
      </>
    ),
  },
  {
    path: "/VirtualMuseumSecondWall",
    element: (
      <>
        <SecondWall />
        <ReturnMainMenuButton />
        <LandscapeMessage messageHidden="message__hidden" />
      </>
    ),
  },
  {
    path: "/VirtualMuseumThirdWall",
    element: (
      <>
        <ThirdWall />
        <ReturnMainMenuButton />
        <LandscapeMessage messageHidden="message__hidden" />
      </>
    ),
  },
  {
    path: "/VirtualMuseumFrontWall",
    element: (
      <>
        <FrontWall />
        <ReturnMainMenuButton />
        <LandscapeMessage messageHidden="message__hidden" />
      </>
    ),
  },
  {
    path: "/VirtualMuseumOnLeft",
    element: (
      <>
        <OnLeft />
        <ReturnMainMenuButton />
        <LandscapeMessage messageHidden="message__hidden" />
      </>
    ),
  },
  {
    path: "/VirtualMuseumOnRight",
    element: (
      <>
        <OnRight />
        <ReturnMainMenuButton />
        <LandscapeMessage messageHidden="message__hidden" />
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
    path: "/LogInPopup",
    element: <LogInPopup />,
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
  {
    path: "/PostArtwork",
    element: (
      <>
        <NavBar />
        <PostArtwork />
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
