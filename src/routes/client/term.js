const express = require("express");
const router = express.Router();

// controllers
const { getTerm } = require("../../controllers/client/term");

// routes
router.get("/:type", getTerm);

module.exports = router;
