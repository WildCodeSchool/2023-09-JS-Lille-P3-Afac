const argon = require("argon2");
const jwt = require("jsonwebtoken");

const validatePassword = async (req, res, next) => {
  const { password } = req.body;

  if (await argon.verify(req.password_hash, password)) {
    const token = jwt.sign(
      {
        id: req.userId,
        lastname: req.lastname,
        firstname: req.firstname,
        email: req.email,
        src: req.src,
      },
      process.env.APP_SECRET,
      { expiresIn: "24h" }
    );
    res.cookie("access_token", token, { httpOnly: true });
    next();
  } else {
    res.status(404).send("Invalid Password");
  }
};

module.exports = validatePassword;
