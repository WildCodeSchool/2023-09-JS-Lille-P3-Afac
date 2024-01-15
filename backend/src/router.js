const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

const userControllers = require("./controllers/userControllers");
const anecdoteControllers = require("./controllers/anecdoteControllers");
const validateAnecdote = require("./middlewares/validateAnecdote");

router.get("/user/:id", userControllers.getUserById);

router.post("/fact", validateAnecdote, anecdoteControllers.add);

/* ************************************************************************* */

module.exports = router;
