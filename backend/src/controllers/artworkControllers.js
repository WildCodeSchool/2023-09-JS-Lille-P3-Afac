const tables = require("../tables");

const getAllArtwork = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAll();
    res.json(artworks);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllArtwork,
};
