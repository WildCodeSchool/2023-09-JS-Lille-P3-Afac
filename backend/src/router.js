const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/UserControllers");
const anecdoteControllers = require("./controllers/anecdoteControllers");
const artworkControllers = require("./controllers/artworkControllers");

router.get("/user/:id", userControllers.getUserById);
router.get("/artwork/:id/anecdote", anecdoteControllers.getAnecdoteByArtworkId);

router.get("/artwork", artworkControllers.getAllArtwork);

/* ************************************************************************* */

module.exports = router;
