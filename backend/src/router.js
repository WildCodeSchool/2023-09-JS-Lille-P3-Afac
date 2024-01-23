const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const userControllers = require("./controllers/userControllers");
const anecdoteControllers = require("./controllers/anecdoteControllers");
const artworkControllers = require("./controllers/artworkControllers");
const artistControllers = require("./controllers/artistControllers");

const validateAnecdote = require("./middlewares/validateAnecdote");
const validateUser = require("./middlewares/validateUser");
const hashPassword = require("./middlewares/hashPasswordUser");

router.get("/user/:id", userControllers.getUserById);
router.post("/user", validateUser, hashPassword, userControllers.addUser);

router.get("/artwork", artworkControllers.getAllArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);

router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);
router.post("/anecdote", validateAnecdote, anecdoteControllers.addAnecdote);

router.get("/artist", artistControllers.getArtists);
/* ************************************************************************* */

module.exports = router;
