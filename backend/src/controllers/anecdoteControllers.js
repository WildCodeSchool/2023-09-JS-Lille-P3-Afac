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

module.exports = {
  addAnecdote,
};
