/* eslint-disable camelcase */
const Joi = require("joi");

const artworkSchema = Joi.object({
  title: Joi.string().required(),
  technique: Joi.string().required(),
  artwork_year: Joi.number().required(),
  format: Joi.string().required(),
  alt: Joi.string().required(),
  source: Joi.string().required(),
  user_id_ar: Joi.number().required(),
});

const validateArtwork = (req, res, next) => {
  const { title, technique, artwork_year, format, source, alt, user_id_ar } =
    req.body;

  const { error } = artworkSchema.validate(
    { title, technique, artwork_year, format, source, alt, user_id_ar },
    { abortEarly: false }
  );

  if (error) {
    res.status(404).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateArtwork;
