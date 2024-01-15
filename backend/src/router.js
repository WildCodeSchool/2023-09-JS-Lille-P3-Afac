const express = require("express");

const router = express.Router();

const artistControllers = require("./controllers/artistControllers");

router.get("/artist", artistControllers.getArtists);

module.exports = router;
