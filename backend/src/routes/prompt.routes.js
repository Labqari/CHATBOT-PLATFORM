const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth.middleware");
const { createPrompt } = require("../controllers/prompt.controller");

// CREATE PROMPT
router.post("/", auth, createPrompt);

module.exports = router;
