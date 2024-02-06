/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable consistent-return */
/* eslint-disable func-names */
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/assets/images/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({ storage });

const multerUpload = upload.single("photo");

const uploadImage = (req, res, next) => {
  multerUpload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json({ error: err.message });
    }
    if (err) {
      return res
        .status(500)
        .json({ error: "An unknown error occurred during the file upload." });
    }
    next();
  });
};

module.exports = uploadImage;
