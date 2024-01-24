const tables = require("../tables");

const updateArtwork = async (req, res, next) => {
  const artwork = req.body;
  try {
    const result = await tables.artwork.update(req.params.id, artwork);
    if (result.affectedRows === 0) {
      res.sendStatus(404);
    } else {
      res.sendStatus(201);
    }
  } catch (err) {
    next(err);
  }
};

const addArtwork = async (req, res, next) => {
  const artwork = req.body;

  try {
    const insertId = await tables.artwork.createArtwork(artwork);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const getAllArtwork = async (req, res, next) => {
  try {
    const artworks = await tables.artwork.readAll();
    res.json(artworks);
  } catch (err) {
    next(err);
  }
};

const getArtworkById = async (req, res, next) => {
  try {
    const artwork = await tables.artwork.read(req.params.id);
    if (artwork) {
      res.status(200).json(artwork);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  addArtwork,
  getAllArtwork,
  getArtworkById,
  updateArtwork,
};
