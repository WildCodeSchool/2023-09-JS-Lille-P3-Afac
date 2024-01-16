const tables = require("../tables");

const postArtist = async (req, res, next) => {
  try {
    const artist = tables.artist.add();
    if (artist) {
      res.status(201).json(artist);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = { postArtist };
