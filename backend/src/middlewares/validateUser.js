const Joi = require("joi");

const userSchema = Joi.object({
  lastname: Joi.string().max(50).required(),
  firstname: Joi.string().max(50).required(),
  email: Joi.string().email().max(255).required(),
  src: Joi.string().max(50).required(),
  password: Joi.string().max(100).required(),
});

const validateUser = (req, res, next) => {
  const { lastname, firstname, email, src, password } = req.body;

  const { error } = userSchema.validate(
    { lastname, firstname, email, src, password },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateUser;
