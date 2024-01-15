const tables = require("../tables");

const getArtists = async (req, res, next) => {
  try {
    const artists = await tables.artist.readAll();
    res.json(artists);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getArtists,
};
