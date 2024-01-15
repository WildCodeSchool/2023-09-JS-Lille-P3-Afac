const Joi = require("joi");

const factSchema = Joi.object({
  fact: Joi.string().required(),
  artist_id: Joi.number().required(),
});

const validateAnecdote = (req, res, next) => {
  const artworkId = req.body.artwork_id;
  const { fact } = req.body;

  const { error } = factSchema.validate(
    { fact, artworkId },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateAnecdote;
