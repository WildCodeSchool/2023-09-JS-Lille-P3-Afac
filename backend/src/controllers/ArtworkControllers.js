const tables = require("../tables");

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

module.exports = { getArtworkById };
