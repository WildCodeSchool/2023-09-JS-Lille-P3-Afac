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
  try {
    const artwork = {};
    artwork.title = req.body.title;
    artwork.technique = req.body.technique;
    artwork.artwork_year = req.body.artwork_year;
    artwork.format = req.body.format;
    artwork.source = req.body.source;
    artwork.alt = req.body.alt;
    artwork.user_id_ar = req.body.user_id_ar;
    const insertId = await tables.artwork.createArtwork(artwork);
    res.status(201).json({ insertId });
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    const imageName = req.file.filename;
    return res
      .status(201)
      .send({ message: "Image uploaded successfully", filename: imageName });
  } catch (err) {
    next(err);
  }
  return null;
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

const deleteArtwork = async (req, res, next) => {
  try {
    const deletedArtwork = await tables.artwork.delete(req.params.id);
    if (deletedArtwork.affectedRows === 0) {
      res.status(404);
    } else {
      res.sendStatus(204);
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
  deleteArtwork,
};
