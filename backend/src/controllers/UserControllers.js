const tables = require("../tables");

const getUserByID = async (req, res, next) => {
  try {
    const user = await tables.user.read(req.params.id);
    if (user) {
      delete user.password_hash;
      res.status(200).json(user);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getUserByID,
};
