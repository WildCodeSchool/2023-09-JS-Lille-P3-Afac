const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { password } = req.body;

    const hashedPassword = await argon2.hash(password);

    req.body.password_hash = hashedPassword;
    delete req.body.password;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = hashPassword;
