const express = require("express");

const multer = require("multer");
const path = require("path");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const anecdoteControllers = require("./controllers/anecdoteControllers");
const artworkControllers = require("./controllers/artworkControllers");
const artistControllers = require("./controllers/artistControllers");
const userControllers = require("./controllers/userControllers");
const adminControllers = require("./controllers/adminControllers");

const validateAnecdote = require("./middlewares/validateAnecdote");
const validateUpdateAnecdote = require("./middlewares/validateUpdateAnecdote");
const validateArtwork = require("./middlewares/validateArtwork");

const validateUser = require("./middlewares/validateUser");
const hashPassword = require("./middlewares/hashPasswordUser");
const validateArtist = require("./middlewares/validateArtist");
const validatePassword = require("./middlewares/validatePassword");

router.get("/user/:id", userControllers.getUserById);
router.get("/user", userControllers.getUsers);
router.post("/user", validateUser, hashPassword, userControllers.addUser);
router.post(
  "/user/login",
  userControllers.getByMail,
  validatePassword,
  userControllers.userLogin
);
router.delete("/user/:id", userControllers.deleteUser);

router.get("/artwork", artworkControllers.getAllArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);
router.put("/artwork/:id", artworkControllers.updateArtwork);
router.post("/artwork", validateArtwork, artworkControllers.addArtwork);
router.delete("/artwork/:id", artworkControllers.deleteArtwork);

router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);
router.post("/anecdote", validateAnecdote, anecdoteControllers.addAnecdote);
router.put(
  "/anecdote/:id",
  validateUpdateAnecdote,
  anecdoteControllers.updateAnecdote
);

router.get("/artist", artistControllers.getArtists);
router.get("/artist/:id", artistControllers.getArtistById);
router.post("/artist", validateArtist, artistControllers.postArtist);

router.post("/admin", adminControllers.postAdmin);

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

router.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).send("No file uploaded.");
  }
  // Le nom du fichier stocké est accessible via req.file.filename
  const imageName = req.file.filename;
  console.info(imageName);
  return res
    .status(201)
    .send({ message: "Image uploaded successfully", filename: imageName });
});

/* ************************************************************************* */

module.exports = router;
