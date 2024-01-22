const tables = require("../tables");

const getArtists = async (req, res, next) => {
  try {
    const artists = await tables.artist.readAll();
    res.json(artists);
  } catch (err) {
    next(err);
  }
};

const postArtist = async (req, res, next) => {
  const newArtist = req.body;
  try {
    const artist = tables.artist.addArtist(newArtist);
    if (artist) {
      res.status(201).json(artist);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getArtists,
  postArtist,
};
