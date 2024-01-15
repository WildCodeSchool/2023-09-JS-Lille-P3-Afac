const tables = require("../tables");

const getArtworkById = async (req, res, next) => {
  try {
    // Fetch a specific item from the database based on the provided ID
    const artwork = await tables.artwork.read(req.params.id);

    // If the item is not found, respond with HTTP 404 (Not Found)
    // Otherwise, respond with the item in JSON format
    if (artwork) {
      res.status(200).json(artwork);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    // Pass any errors to the error-handling middleware
    next(err);
  }
};

module.exports = { getArtworkById };
