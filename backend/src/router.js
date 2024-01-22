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

const validateAnecdote = require("./middlewares/validateAnecdote");

router.get("/user/:id", userControllers.getUserById);
router.put("/user/:id", userControllers.updateUser);

router.get("/artwork", artworkControllers.getAllArtwork);
router.get("/artwork/:id", artworkControllers.getArtworkById);

router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);
router.post("/anecdote", validateAnecdote, anecdoteControllers.addAnecdote);

router.get("/artist", artistControllers.getArtists);

router.post("/admin", adminControllers.postAdmin);
/* ************************************************************************* */

module.exports = router;
