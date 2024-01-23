const tables = require("../tables");

const getUserById = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await tables.user.readAll();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUserById,
  getUsers,
};
