const tables = require("../tables");

const getArtists = async (req, res, next) => {
  try {
    const artists = await tables.artist.readAll();
    res.json(artists);
  } catch (err) {
    next(err);
  }
};

const getArtistById = async (req, res, next) => {
  try {
    const artist = await tables.artist.readArtist(req.params.id);
    if (artist) {
      res.status(200).json(artist);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getArtists,
  getArtistById,
};
