const Joi = require("joi");

const artistSchema = Joi.object({
  biography: Joi.string().required(),
  userId: Joi.number().required(),
});

const validateArtist = (req, res, next) => {
  const { biography } = req.body.biography;
  const userId = req.body.user_id;

  const { error } = artistSchema.validate(
    { biography, userId },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateArtist;
