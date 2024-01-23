const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  try {
    // eslint-disable-next-line camelcase
    const { password_hash } = req.body;

    const hashedPassword = await argon2.hash(password_hash);

    req.body.hashedPassword = hashedPassword;
    delete req.body.password_hash;

    next();
  } catch (err) {
    next(err);
  }
};

module.exports = hashPassword;
