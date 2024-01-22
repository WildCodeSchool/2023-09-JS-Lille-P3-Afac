const tables = require("../tables");

const addAnecdote = async (req, res, next) => {
  const anecdote = req.body;

  try {
    const insertId = await tables.anecdote.create(anecdote);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

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
  addAnecdote,
  getAnecdoteByArtworkId,
};
