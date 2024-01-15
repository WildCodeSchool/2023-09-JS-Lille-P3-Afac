const tables = require("../tables");

const getArtistById = async (req, res, next) => {
  try {
    const artist = await tables.artist.read(req.params.id);

    if (artist) {
      res.status(200).json(artist);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { getArtistById };
