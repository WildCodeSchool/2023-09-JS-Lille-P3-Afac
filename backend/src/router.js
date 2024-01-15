const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/UserControllers");
const artworkControllers = require("./controllers/artworkControllers");

router.get("/user/:id", userControllers.getUserById);
router.get("/artwork/:id/anecdote", artworkControllers.getAnecdoteByArtworkId);

/* ************************************************************************* */

module.exports = router;
