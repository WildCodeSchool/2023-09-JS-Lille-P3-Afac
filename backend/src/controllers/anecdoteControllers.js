const tables = require("../tables");

const getAnecdoteByArtworkId = async (req, res, next) => {
  try {
    const anecdote = await tables.anecdote.readAnecdote(req.params.id);
    if (anecdote) {
      res.status(200).json(anecdote);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAnecdoteByArtworkId,
};
