import "./HomePageMenu.scss";
import HomePageMenuLink from "./HomePageMenuButton/HomePageMenuLink";

function HomePageMenu() {
  return (
    <nav className="homepage-menu-container">
      <HomePageMenuLink
        to="/"
        type="button"
        className="homepage-menu-button homepage-menu-museum-button"
        label="Musée virtuel"
      />
      <HomePageMenuLink
        to="/"
        type="button"
        className="homepage-menu-button homepage-menu-gallery-button"
        label="Collection"
      />
      <HomePageMenuLink
        to="/"
        type="button"
        className="homepage-menu-button homepage-menu-artists-button"
        label="Nos artistes"
      />
    </nav>
  );
}

export default HomePageMenu;
