const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const anecdoteControllers = require("./controllers/anecdoteControllers");
const validateAnecdote = require("./middlewares/validateAnecdote");

// Route to add a new item
router.post("/fact", validateAnecdote, anecdoteControllers.add);

/* ************************************************************************* */

module.exports = router;
