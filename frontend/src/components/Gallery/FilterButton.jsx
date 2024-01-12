function FilterButton(category) {
  const { name } = category;

  return (
    <button type="button" className="artworkType">
      {name}
    </button>
  );
}

export default FilterButton;
