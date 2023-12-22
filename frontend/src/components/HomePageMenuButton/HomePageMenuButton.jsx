function HomePageMenuButtons() {
  return (
    <section className="homepage-menu-container">
      <nav className="homepage-menu-buttons-container">
        <button
          type="button"
          className="homepage-menu-button homepage-menu-museum-button"
        >
          Musée virtuel
        </button>
        <button
          type="button"
          className="homepage-menu-button homepage-menu-gallery-button"
        >
          Collection
        </button>
        <button
          type="button"
          className="homepage-menu-button homepage-menu-artists-button"
        >
          Nos artistes
        </button>
      </nav>
    </section>
  );
}

export default HomePageMenuButtons;
