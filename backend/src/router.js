const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */
const anecdoteControllers = require("./controllers/anecdoteControllers");
const artworkControllers = require("./controllers/artworkControllers");
const artistControllers = require("./controllers/artistControllers");
const userControllers = require("./controllers/userControllers");

const validateAnecdote = require("./middlewares/validateAnecdote");
const validateArtist = require("./middlewares/validateArtist");

router.get("/user/:id", userControllers.getUserById);

router.get("/artwork", artworkControllers.getAllArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);

router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);
router.post("/anecdote", validateAnecdote, anecdoteControllers.addAnecdote);

router.get("/artist", artistControllers.getArtists);
router.post("/artist", validateArtist, artistControllers.postArtist);
/* ************************************************************************* */

module.exports = router;
