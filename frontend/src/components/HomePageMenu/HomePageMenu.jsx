import HomePageMenuLink from "./HomePageMenuLink/HomePageMenuLink";
import "./HomePageMenu.scss";

function HomePageMenu() {
  return (
    <nav className="homepage-menu-container">
      <HomePageMenuLink
        to="/VirtualMuseumFirstRoom"
        type="button"
        className="homepage-menu-button homepage-menu-museum-button"
        label="Musée virtuel"
      />
      <HomePageMenuLink
        to="/Gallery"
        type="button"
        className="homepage-menu-button homepage-menu-gallery-button"
        label="Collection"
      />
      <HomePageMenuLink
        to="/Artists"
        type="button"
        className="homepage-menu-button homepage-menu-artists-button"
        label="Nos artistes"
      />
    </nav>
  );
}

export default HomePageMenu;
