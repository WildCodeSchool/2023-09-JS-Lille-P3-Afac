/* eslint-disable consistent-return */
/* eslint-disable camelcase */
const Joi = require("joi");

const artworkSchema = Joi.object({
  title: Joi.string().required(),
  technique: Joi.string().required(),
  artwork_year: Joi.number().required(),
  format: Joi.string().required(),
  alt: Joi.string().required(),
  user_id_ar: Joi.number().required(),
});

const validateArtwork = (req, res, next) => {
  // eslint-disable-next-line camelcase
  const { title, technique, artwork_year, format, alt, user_id_ar } = req.body;

  const { error } = artworkSchema.validate(
    { title, technique, artwork_year, format, alt, user_id_ar },
    { abortEarly: false }
  );

  if (error) {
    res.status(404).json({ validationErrors: error.details });
  } else {
    if (!req.file) {
      return res.status(400).send("No file uploaded.");
    }
    const imageName = req.file.filename;
    req.body.source = `assets/images/${imageName}`;
    next();
  }
};

module.exports = validateArtwork;
