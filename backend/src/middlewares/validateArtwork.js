/* eslint-disable camelcase */
const Joi = require("joi");
const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Chemin de destination des fichiers uploadés
    cb(null, "public/assets/images/");
  },
  filename: (req, file, cb) => {
    // Construire le nom du fichier avec son nom d'origine et l'extension d'origine, autrement le fichier ne possède pas d'extension
    // le Date.now() permet de renommer le fichier afin qu'ils soient tous unique, c'est une façon simple de s'assurer de l'unicité des fichiers
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const upload = multer({ storage });

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
    upload.single("photo");
    const coucou = upload.filename;
    req.source = coucou;
    next();
  }
};

module.exports = validateArtwork;
