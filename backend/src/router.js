const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const ArtworkControllers = require("./controllers/ArtworkControllers");

// Route to get a list of items

// Route to get a specific item by ID
router.get("/artwork/:id", ArtworkControllers.getArtworkById);

// Route to add a new item

/* ************************************************************************* */

module.exports = router;
