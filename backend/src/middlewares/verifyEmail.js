const tables = require("../tables");

const verifyEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await tables.user.findByMail(email);
    if (user) {
      res.status(401).send("Email already exists");
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const getByMail = async (req, res, next) => {
  const { email } = req.body;
  try {
    const user = await tables.user.findByMail(email);
    if (user) {
      req.userId = user.id;
      req.lastname = user.lastname;
      req.firstname = user.firstname;
      req.email = user.email;
      req.src = user.src;
      req.password_hash = user.password_hash;
      next();
    } else {
      res.status(404).send("Invalid email");
    }
  } catch (err) {
    res.sendStatus(500);
  }
};

module.exports = { verifyEmail, getByMail };
