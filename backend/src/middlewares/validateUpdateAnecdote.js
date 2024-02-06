const Joi = require("joi");

const factSchema = Joi.object({
  fact: Joi.string().required(),
});

const validateUpdateAnecdote = (req, res, next) => {
  const { fact } = req.body;

  const { error } = factSchema.validate({ fact }, { abortEarly: false });

  if (error) {
    res.status(400).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateUpdateAnecdote;
