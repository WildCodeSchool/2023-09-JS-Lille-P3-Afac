const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const userControllers = require("./controllers/UserControllers");

router.get("/user/:id", userControllers.getUserById);

/* ************************************************************************* */

module.exports = router;
