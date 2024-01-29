const tables = require("../tables");

const getFavoritesByUserId = async (req, res, next) => {
  try {
    const favorites = await tables.favorite.read(req.params.id);
    res.status(200).json(favorites);
  } catch (err) {
    next(err);
  }
};

const addFavorite = async (req, res, next) => {
  const { artworkId, userId } = req.body;
  try {
    const favorite = await tables.favorite.add(userId, artworkId);
    res.status(201).json(favorite);
  } catch (err) {
    next(err);
  }
};

module.exports = { getFavoritesByUserId, addFavorite };
