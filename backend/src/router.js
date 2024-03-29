const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const anecdoteControllers = require("./controllers/anecdoteControllers");
const artworkControllers = require("./controllers/artworkControllers");
const artistControllers = require("./controllers/artistControllers");
const userControllers = require("./controllers/userControllers");
const adminControllers = require("./controllers/adminControllers");
const favoriteControllers = require("./controllers/favoriteControllers");

const validateAnecdote = require("./middlewares/validateAnecdote");
const validateUpdateAnecdote = require("./middlewares/validateUpdateAnecdote");
const validateArtwork = require("./middlewares/validateArtwork");

const validateUser = require("./middlewares/validateUser");
const hashPassword = require("./middlewares/hashPasswordUser");
const validateArtist = require("./middlewares/validateArtist");
const validatePassword = require("./middlewares/validatePassword");
const uploadImage = require("./middlewares/uploadImage");

const verifyEmail = require("./middlewares/verifyEmail");

router.get("/user/:id", userControllers.getUserById);
router.get("/user", userControllers.getUsers);
router.post(
  "/user",
  verifyEmail.verifyEmail,
  validateUser,
  hashPassword,
  userControllers.addUser
);
router.post(
  "/user/login",
  verifyEmail.getByMail,
  validatePassword,
  userControllers.userLogin
);
router.delete("/user/:id", userControllers.deleteUser);

router.get("/artwork", artworkControllers.getAllArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);
router.put("/artwork/:id", artworkControllers.updateArtwork);
router.post(
  "/artwork",
  uploadImage,
  validateArtwork,
  artworkControllers.addArtwork
);
router.delete("/artwork/:id", artworkControllers.deleteArtwork);

router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);
router.post("/anecdote", validateAnecdote, anecdoteControllers.addAnecdote);
router.put(
  "/anecdote/:id",
  validateUpdateAnecdote,
  anecdoteControllers.updateAnecdote
);

router.get("/favorite/:id", favoriteControllers.getFavoritesByUserId);
router.post("/favorite/", favoriteControllers.addFavorite);
router.delete("/favorite/:id", favoriteControllers.deleteFavorite);

router.get("/artist", artistControllers.getArtists);
router.get("/artist/:id", artistControllers.getArtistById);
router.post("/artist", validateArtist, artistControllers.postArtist);

router.post("/admin", adminControllers.postAdmin);

/* ************************************************************************* */

module.exports = router;
