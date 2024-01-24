const tables = require("../tables");

const postAdmin = async (req, res, next) => {
  const newAdmin = req.body;
  try {
    const admin = await tables.administrator.addAdmin(newAdmin);
    if (admin) {
      res.status(201).json(admin);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = { postAdmin };
