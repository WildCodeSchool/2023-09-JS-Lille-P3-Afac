const express = require("express");
const router = express.Router();

const userControllers = require("./controllers/UserControllers");
const anecdoteControllers = require("./controllers/anecdoteControllers");
const artworkControllers = require("./controllers/artworkControllers");
const artistControllers = require("./controllers/artistControllers");

router.get("/user/:id", userControllers.getUserById);

router.get("/artwork", artworkControllers.getAllArtwork);
router.get("/artwork/:id", ArtworkControllers.getArtworkById);
router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);

router.get("/artist", artistControllers.getArtists);

/* ************************************************************************* */

module.exports = router;
