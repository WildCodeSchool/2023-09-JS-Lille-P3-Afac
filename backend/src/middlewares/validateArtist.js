const Joi = require("joi");

const artistSchema = Joi.object({
  biography: Joi.string().required(),
  userId: Joi.number().required(),
});

const validateArtist = (req, res, next) => {
  const { biography } = req.body;
  const userId = req.body.user_id;

  const { error } = artistSchema.validate(
    { biography, userId },
    { abortEarly: false }
  );

  if (error) {
    res.status(400).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateArtist;
